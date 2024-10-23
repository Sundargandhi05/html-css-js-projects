let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function displayResultFact(fact) {
    spinnerEl.classList.toggle("d-none");
    factEl.textContent = fact;
    factEl.classList.add("fact-text");
}




function displayNumberFacts() {
    let userInputElValue = userInputEl.value
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputElValue;
    let options = {
        method: "GET"
    }
    spinnerEl.classList.toggle("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                fact
            } = jsonData;
            displayResultFact(fact)
        });
}


userInputEl.addEventListener("keyup", displayNumberFacts)