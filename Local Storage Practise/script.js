let messageElement = document.getElementById("msg");
let saveButtonElement = document.getElementById("saveBtn");
let clearButtonElement = document.getElementById("clearBtn");
let storageKey = "userInput";

saveButtonElement.onclick = function() {
    let msgVal = messageElement.value;
    localStorage.setItem(storageKey, msgVal);
}

clearButtonElement.onclick = function() {
    messageElement.value = "";
    localStorage.removeItem(storageKey);
}

let userInputStoredValue = localStorage.getItem(storageKey);

if (userInputStoredValue !== null) {
    messageElement.val = userInputStoredValue;
} else {
    messageElement.value = "";
}