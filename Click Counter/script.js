let spanElement = document.getElementById("counterValue");

let buttonElement = document.getElementById("incrementBtn");

buttonElement.onclick = function() {
    let spanElementValue = spanElement.textContent;
    let updateSpanElementValue = parseInt(spanElementValue) + 1;
    localStorage.setItem("clickCount", updateSpanElementValue);
    spanElement.textContent = updateSpanElementValue;

}