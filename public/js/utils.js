// Example GET method implementation:
async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    //treat redirects here
    if (response.redirected) {
        window.location.href = response.url;
        return;
    }
    return response.json(); // response object that may contain redirect
}

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
    //treat redirects here
    if (response.redirected) {
        window.location.href = response.url;
        return;
    }
    return response.json(); // response object that may contain redirect
}

function getBusinessComponentERCSA() {
    //input data is in window.user_data and window.md
    let result = [];
    window.user_data.forEach(element => {
        let bc = window.md.business_component.find(elm => elm.shortname == element.business_component);
        let ercsa = element.ercsa.join(', ');
        result.push({'business_component': bc.component, 'business_service': bc.service , 'ERCSA_categories': ercsa})
    });
    return result;

}

function getBusinessComponent() {
    let result = [];

    window.user_data.forEach(element =>{
        let value = element.business_component;
        let text = window.md.business_component.find(elm => elm.shortname == value).service;
        result.push({text: text, value: value});
    })
    return result;
}