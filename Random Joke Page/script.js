let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");


function createAndAppendJokes(jokes) {
    jokeTextEl.textContent = jokes
    jokeTextEl.classList.add("joke-text");
}


function displayResults(value) {
    spinnerEl.classList.toggle("d-none");
    let jokes = value;
    createAndAppendJokes(jokes);
}




function createJokesRandom() {
    spinnerEl.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                value
            } = jsonData;
            console.log(value);
            displayResults(value)
        });
}


jokeBtnEl.addEventListener("click", createJokesRandom)