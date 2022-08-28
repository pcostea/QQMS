function createVueApp() {
    window.app = new Vue({
        el: "#app",
        data: {
            theComponent: 'dashboard'
        },
        methods: {
            logout() {
                doLogout();
            },
            showDashboard() {
                this.theComponent = 'dashboard';
                console.log("show dashboard");
            },
            showTransactions() {
                this.theComponent = 'transactions';
                console.log("show transactions");
            }
        }
    });
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

