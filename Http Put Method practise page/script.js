let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");


function createAndAppendData(object) {
    let userInput = userInputEl.value;
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
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 93446f8bc3b034d74c14b81b6cb0e20e13e0a594347e5542d845a203b1e646eb"
        },
        body: requestBody
    }
    let url = "https://gorest.co.in/public-api/users" + userInputEl.value;
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            requestBodyEl.classList.add("d-none");
            let object = jsonData;
            displayResult(object);
        });
}


sendPutRequestBtnEl.addEventListener("click", createTheChanges);