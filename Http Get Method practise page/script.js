let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");


function createAndAppendObjectCode(object) {
    let httpResponse = JSON.stringify(object);
    httpResponseEl.classList.add("http-response");
    httpResponseEl.textContent = httpResponse;
    requestStatusEl.textContent = object.code;
    requestStatusEl.classList.add("request-status");
}




function displayResults(object) {
    createAndAppendObjectCode(object);
}




function showStautusAndOjects() {
    let options = {
        method: "GET"
    }
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let object = jsonData;
            displayResults(object);
        });
}



sendGetRequestBtnEl.addEventListener("click", showStautusAndOjects)