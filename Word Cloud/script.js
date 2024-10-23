let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerElement = document.getElementById("wordsContainer");
let userInputElement = document.getElementById("userInput");

let errorMsgElement = document.getElementById("errorMsg");


let addButtonElement = document.getElementById("addBtn");

function onAddWordToWordCloud(word) {
    let randomSize = Math.ceil(Math.random() * 40) + "px";
    let wordElement = document.createElement("span");
    wordElement.textContent = word
    wordElement.style.fontSize = randomSize;
    wordsContainerElement.appendChild(wordElement);
}

for (let word of wordCloud) {
    onAddWordToWordCloud(word)
}

function addWordToWordCloud() {
    let userEneteredValue = userInputElement.value;
    if (userEneteredValue !== "") {
        errorMsgElement.textContent = "";
        userInputElement.value = "";
        onAddWordToWordCloud(userEneteredValue);
    } else {
        errorMsgElement.textContent = "Please Enter Valid Text";
    }
}