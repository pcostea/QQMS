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
        result.push({ 'business_component': bc.component, 'business_service': bc.service, 'ERCSA_categories': ercsa })
    });
    return result;

}

function getBusinessComponent() {
    let result = [];

    window.user_data.forEach(element => {
        let value = element.business_component;
        let text = window.md.business_component.find(elm => elm.shortname == value).service;
        result.push({ text: text, value: value });
    })
    return result;
}

function augmentERCSAQuestionnaire(responses) {
    let result = responses;
    //add current quarters for this year Q1-Q4 according to local date
    let quater = Math.floor((new Date()).getMonth() / 3 + 1), year = (new Date()).getFullYear();
    //build the augmented part
    if (result.length > 0) {
        result.forEach((e, idx) => {
            result[idx].bc = window.md.business_component.find(elm => elm.shortname == e.response.business_component).component;
            result[idx].bs = window.md.business_component.find(elm => elm.shortname == e.response.business_component).service;
            result[idx].y = result[idx].response.y;
            result[idx].q = result[idx].response.q;
        });
    }
    window.user_data.forEach(element => {
        for (let q = 1; q <= quater; q++) {
            if (responses.length == 0) {
                result.push({
                    q: q,
                    y: year,
                    status: "NEW",
                    bc: window.md.business_component.find(elm => elm.shortname == element.business_component).component,
                    bs: window.md.business_component.find(elm => elm.shortname == element.business_component).service,
                    response: {
                        status: "NEW",
                        business_component: element.business_component
                    }
                })
            } else {
                if (responses.findIndex((e) => { return typeof e.response !== 'undefined' && e.response.q == q && e.response.y == year && e.response.business_component == element.business_component }) == -1) {
                    result.push({
                        q: q,
                        y: year,
                        status: "NEW",
                        bc: window.md.business_component.find(elm => elm.shortname == element.business_component).component,
                        bs: window.md.business_component.find(elm => elm.shortname == element.business_component).service,
                        response: {
                            status: "NEW",
                            business_component: element.business_component
                        }
                    })
                }
            }
        }
    })

    return result;

}