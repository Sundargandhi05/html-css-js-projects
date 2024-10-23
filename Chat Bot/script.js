let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInputElement = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userInputValue = userInputElement.value;

    let messageContainerElement = document.createElement("div");
    messageContainerElement.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(messageContainerElement);

    let userInputEl = document.createElement("span");
    userInputEl.classList.add("msg-to-chatbot");
    userInputEl.textContent = userInputValue;
    messageContainerElement.appendChild(userInputEl);

    userInputElement.value = "";
    getReplyFromChatbot();
}

function getReplyFromChatbot() {
    let noOfChatbotsMessages = chatbotMsgList.length;
    let chatbotMessage = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotsMessages) - 1];

    let messageContainerEl = document.createElement("div");
    messageContainerEl.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(messageContainerEl);

    let chatbotEl = document.createElement("span");
    chatbotEl.classList.add("msg-from-chatbot");
    chatbotEl.textContent = chatbotMessage;
    messageContainerEl.appendChild(chatbotEl);
}