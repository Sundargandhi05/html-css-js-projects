let numbers = [17, 31, 77, 20, 63];


let userInput = document.getElementById("userInput");
let indexOfNumber = document.getElementById("indexOfNumber");
let findBtn = document.getElementById("findBtn");

function findIndexOfNumber() {
    let userInputValue = parseInt(userInput.value);
    let index = numbers.findIndex(function(eachItem) {
        if (eachItem === userInputValue) {
            return true
        } else {
            return false
        }

    });
    indexOfNumber.textContent = index;
}