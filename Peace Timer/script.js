let twentySecondBtnElement = document.getElementById("twentySecondsBtn");
let thirtySecondBtnElement = document.getElementById("thirtySecondsBtn");
let fortySecondBtnElement = document.getElementById("fortySecondsBtn");
let oneMinuteBtnElement = document.getElementById("oneMinuteBtn");
let timerTextElement = document.getElementById("timerText");


twentySecondBtnElement.onclick = function() {
    let timerTextElementValue = 20;
    timerTextElement.textContent = timerTextElementValue + " seconds left";
    let intervalId = setInterval(function() {
        timerTextElementValue = timerTextElementValue - 1;
        timerTextElement.textContent = timerTextElementValue + " seconds left";
        if (timerTextElementValue === 0) {
            clearInterval(intervalId);
            timerTextElement.textContent = "Your momemt is complete";
        }
    }, 1000);
}

thirtySecondBtnElement.onclick = function() {
    let countervalue = 30;
    timerTextElement.textContent = countervalue + " seconds left";
    let intervalId = setInterval(function() {
        countervalue = countervalue - 1;
        timerTextElement.textContent = countervalue + " seconds left";
        if (countervalue === 0) {
            clearInterval(intervalId);
            timerTextElement.textContent = "Your momemt is complete";
        }
    }, 1000);
}

fortySecondBtnElement.onclick = function() {
    let countervalue = 40;
    timerTextElement.textContent = countervalue + " seconds left";
    let intervalId = setInterval(function() {
        countervalue = countervalue - 1
        timerTextElement.textContent = countervalue + " seconds left";
        if (countervalue === 0) {
            clearInterval(intervalId);
            timerTextElement.textContent = "Your momemt is complete";
        }
    }, 1000);
}

oneMinuteBtnElement.onclick = function() {
    let countervalue = 60;
    timerTextElement.textContent = countervalue + " seconds left";
    let intervalId = setInterval(function() {
        countervalue = countervalue - 1
        timerTextElement.textContent = countervalue + " seconds left";
        if (countervalue === 0) {
            clearInterval(intervalId);
            timerTextElement.textContent = "Your momemt is complete";
        }
    }, 1000);
}