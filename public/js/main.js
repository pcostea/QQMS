doCheckSession()

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response; // response object that may contain redirect
}


window.app = new Vue({
    el:"#app",
    data: {
        theComponent: 'dashboard'
    },
    methods: {
        logout() {
            doLogout();
        },
        showDashboard(){
            this.theComponent = 'dashboard';
            console.log("show dashboard");
        },
        showTransactions(){
            this.theComponent = 'transactions';
            console.log("show transactions");
        }
    }
});


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

function doCheckSession(){
    postData('/checksession')
    .then(result =>{
        if(result.redirected){
            window.location.href = result.url;
        }
    })
    .catch((error) => {
        console.log(error);
    })
}