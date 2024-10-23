let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let responseStatusEl = document.getElementById("responseStatus");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

let formData = {
    requestUrl: requestUrlEl.value,
    requestMethod: requestMethodEl.value,
    requestBody: requestBodyEl.value
}

function validateSendRequest(formData) {

    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;
    let bodyObject = JSON.stringify({
        "id": 1,
        "name": "John Doe",
        "email": "johh.doe@gamil.com",
        "gender": "Male",
        "status": "active"
    });
    let options = {
        method: formData.requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer c26db1e6e4a9d17627584a1a28de77b220764ce4f940a078b9c651ef788c8faa"
        },
        body: bodyObject
    }
    fetch(formData.requestUrl, options)
        .then(function(response) {
            responseStatusEl.value = response.status;
            return response.json();
        })
        .then(function(jsonData) {
            responseBodyEl.value = JSON.stringify(jsonData);
        });
}




requestUrlEl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});

requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
})



function validateRequestUrl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl(formData);
    if (requestUrlErrMsgEl.textContent === "") {
        validateSendRequest(formData);
    }
});