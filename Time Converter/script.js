let hoursInputElement = document.getElementById("hoursInput");
let minutesInputElement = document.getElementById("minutesInput");
let buttonElement = document.getElementById("convertBtn");
let errorMsgElement = document.getElementById("errorMsg");
let timeInSeconds = document.getElementById("timeInSeconds");

function convertHourstoseconds() {
    if (hoursInputElement.value === "") {
        errorMsgElement.textContent = "Please enter a valid number of hours.";
        timeInSeconds.textContent = "";
        return;
    }
    if (minutesInputElement.value === "") {
        errorMsgElement.textContent = "Please enter a valid number of minutes.";
        timeInSeconds.textContent = "";
        return;
    }
    let hoursInputElementValue = parseInt(hoursInputElement.value);
    let minutesInputElementValue = parseInt(minutesInputElement.value);
    let hoursToSeconds = hoursInputElementValue * 3600;
    let minutesToSeconds = minutesInputElementValue * 60;
    let totalValue = hoursToSeconds + minutesToSeconds;
    timeInSeconds.textContent = totalValue + "s";
    timeInSeconds.classList.add("time-in-seconds");
    errorMsgElement.textContent = "";

}



buttonElement.addEventListener("click", convertHourstoseconds);