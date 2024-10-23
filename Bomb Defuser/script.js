let timerElement = document.getElementById("timer");
let defuserElement = document.getElementById("defuser");

let countervalue = 10;
let intervalId = setInterval(function() {
    countervalue = countervalue - 1;
    timerElement.textContent = countervalue;
    if (countervalue === 0) {
        clearInterval(intervalId);
        timerElement.textContent = "BOOM";
    }
}, 1000);

defuserElement.addEventListener("keydown", function(event) {
    let defuserInputText = defuserElement.value;
    if (event.key === "Enter" && defuserInputText === "defuse" && countervalue !== 0) {
        timerElement.textContent = "You Did It!";
        clearInterval(intervalId);
    }
});