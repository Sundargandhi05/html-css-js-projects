let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let selectedCity = null;
let capitalCity = "Delhi";

cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})

cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})

cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})

cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
});


questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    resultMsgEl.classList.remove("paragraph-incorrect", "paragraph-correct")
    if (selectedCity === null) {
        resultMsgEl.textContent = "Please select the answer!";
        resultMsgEl.classList.add("paragraph-incorrect");
    } else if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.classList.add("paragraph-correct")
    } else {
        resultMsgEl.textContent = "Wrong Answer!"
        resultMsgEl.classList.add("paragraph-incorrect");
    }

});