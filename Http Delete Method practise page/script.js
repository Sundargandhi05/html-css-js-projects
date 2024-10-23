let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function createAndAppendTodoChanges(object) {
    let userInputValue = userInputEl.value;
    requestStatusEl.textContent = object.code;
    requestStatusEl.classList.add("request-status");
    let httpResponse = JSON.stringify(object);
    httpResponseEl.textContent = httpResponse;
    httpResponseEl.classList.add("http-response");
}



function displayResults(object) {
    createAndAppendTodoChanges(object)
}



function deleteChangesData() {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 93446f8bc3b034d74c14b81b6cb0e20e13e0a594347e5542d845a203b1e646eb"
        }
    }

    let url = "https://gorest.co.in/public-api/users/" + userInputEl.value;
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let object = jsonData;
            displayResults(object)
        });
}


sendDeleteRequestBtnEl.addEventListener("click", deleteChangesData);