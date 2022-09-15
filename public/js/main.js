doCheckSession()

function doCheckSession() {
    postData('/checksession')
        .then(data => {
            window.user_data = data.user_data;
            createVueApp()
        })
        .catch((error) => {
            console.log(error);
        })
}

function createVueApp() {
    //load data

    getData('/md')
        .then(data => {
            window.md = data.result;
            window.app = new Vue({
                el: "#app",
                data: {
                    theComponent: 'dashboard',
                    transactions: [],
                    responses: [],
                    ercsa_report: [],
                },
                methods: {
                    logout() {
                        doLogout();
                    },
                    showDashboard() {
                        this.theComponent = 'dashboard';
                    },
                    showTransactions() {
                        getData('/transactions')
                            .then(data => {
                                this.transactions = data.result;
                                this.theComponent = 'transactions';
                                console.log("show transactions");
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    },
                    showERCSA() {
                        getData('/questionnaire')
                            .then(data => {
                                //augment the result set
                                this.responses = augmentERCSAQuestionnaire(data.result);
                                this.theComponent = 'ercsa';
                                console.log("show ercsa");
                            })
                            .catch((error) => {
                                console.log(error);
                            })

                    },
                    showReports() {
                        getData('/reports?dataset=ercsa')
                            .then(data0 => {
                                //augment the result set
                                getData('/reports?dataset=business-component_ercsa')
                                    .then(data1 => {
                                        //augment the result set
                                        this.ercsa_report = prepareERCSAReport(data0.result, data1.result);
                                        this.theComponent = 'reports';
                                        console.log("show reports");
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }
                }
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

function doLogout() {
    //Send data to server 
    postData('/logout')
        .then(data => {
            //this should be a redirect to index page
            if (data.redirected) {
                window.location.href = data.url;
            }
        })
        .catch((error) => {
            console.error(error);
        })

}



