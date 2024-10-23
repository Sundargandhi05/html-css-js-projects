let fromUserInputElement = document.getElementById("fromUserInput");
let toUserInputElement = document.getElementById("toUserInput");
let startBtnElement = document.getElementById("startBtn");
let counterTextElement = document.getElementById("counterText");

startBtnElement.onclick = function() {
    let fromUserInputElementText = parseInt(fromUserInputElement.value);
    let toUserInputElementText = parseInt(toUserInputElement.value);
    if (fromUserInputElement.value === "") {
        alert("Enter the from value");
        return;
    }
    if (toUserInputElement.value === "") {
        alert("Enter the to value");
        return;
    }
    counterTextElement.textContent = fromUserInputElementText;
    let intervalId = setInterval(function() {
        counterTextElement.textContent = fromUserInputElementText;
        if (fromUserInputElementText < toUserInputElementText) {
            fromUserInputElementText = fromUserInputElementText + 1;
        } else {
            clearInterval(intervalId);
        }
    }, 1000)
}