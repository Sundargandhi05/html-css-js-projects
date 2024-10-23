let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

let successMessage = "Congratulations! You got it right";
let failureMessage = "Please Try Again!"



let firstNumberRandom = Math.random() * 100;
let secondNumberRandom = Math.random() * 100;

firstNumber.textContent = Math.ceil(firstNumberRandom);
secondNumber.textContent = Math.ceil(secondNumberRandom);



function checkButton() {
    let firstNumberInt = parseInt(firstNumber.textContent);
    let secondNumberInt = parseInt(secondNumber.textContent);
    let userElemetInt = parseInt(userInput.value);
    let sumOfTwoIntValues = firstNumberInt + secondNumberInt;
    if (userElemetInt === sumOfTwoIntValues) {
        gameResult.textContent = successMessage;
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = failureMessage;
        gameResult.style.backgroundColor = "#1e217c";
    }
}


function restartButton() {

    gameResult.textContent = "";
    userInput.value = "";
}
restartButton();