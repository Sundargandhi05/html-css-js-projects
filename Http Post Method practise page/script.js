let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");


function createAndAppendData(object) {
    let requestBody = requestBodyEl.value;
    requestStatusEl.textContent = object.code;
    requestStatusEl.classList.add("request-status");
    let httpResponse = JSON.stringify(object);
    httpResponseEl.textContent = httpResponse;
    httpResponseEl.classList.add("http-response");

}




function displayResult(object) {
    createAndAppendData(object);
}



function createTheChanges() {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 93446f8bc3b034d74c14b81b6cb0e20e13e0a594347e5542d845a203b1e646eb"
        },
        body: requestBody
    }
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let object = jsonData;
            displayResult(object);
        });
}



sendPostRequestBtnEl.addEventListener("click", createTheChanges)