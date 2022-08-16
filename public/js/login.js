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
    return response.json(); // parses JSON response into native JavaScript objects
}


function doLogin() {
    //Get user email and password
    let user_email = document.getElementById('user_email').value,
        user_password = document.getElementById('user_password').value;
    //Hash password
    user_password = CryptoJS.SHA384(user_password).toString(CryptoJS.enc.Base64);
    //Send data to server 
    postData('/login', { email: user_email, password: user_password })
        .then(data => {
            console.log(data);
            var toastLiveExample = document.getElementById('liveToast')
            var toast = new bootstrap.Toast(toastLiveExample)
            document.getElementById('msgArea').innerHTML =`The server says: ${data.status}.`
            toast.show()
            if (data.status.indexOf('OK') != -1) window.location.assign('/dashboard')
        })
        .catch((error) => {
            console.error(error);
        })
    //wait for a response
}