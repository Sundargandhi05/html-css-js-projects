let userInputElement = document.getElementById("userInput");
let keyCodeListElement = document.getElementById("keyCodeList");



function presskeydown(event) {
    let listElement = document.createElement("li");
    listElement.classList.add("key-code-list");
    listElement.textContent = event.keyCode
    keyCodeListElement.appendChild(listElement);
}

userInputElement.addEventListener("keydown", presskeydown);