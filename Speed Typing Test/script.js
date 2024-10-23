let speedTypingTestEl = document.getElementById("speedTypingTest")
let quoteDisplayEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let counter = 0;

function startCounting() {
    counter += 1
    timerEl.textContent = counter;
}

function getNotation() {
    let options = {
        method: "GET",
    }
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData
            quoteDisplayEl.textContent = content;
            spinnerEl.classList.add("d-none");
        });
}



let counterval = setInterval(startCounting, 1000);

startCounting()
getNotation()

resetBtnEl.onclick = function() {
    startCounting();
    getNotation();
    counter = 0;
    timerEl.textContent = counter;
    quoteInputEl.value = "";
    resultEl.textContent = "";
    spinnerEl.classList.remove("d-none");
}

submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterval)
        resultEl.textContent = "You typed in " + counter + " seconds";
    } else {
        resultEl.textContent = " Yoy typed incorrect sentence";
    }
}