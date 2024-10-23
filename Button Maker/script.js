let backgroundColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyButton() {
    let bgColor = backgroundColorInput.value;
    let fontColor = fontColorInput.value;
    let fontSize = fontSizeInput.value;
    let fontWeight = fontWeightInput.value;
    let padding = paddingInput.value;
    let borderRadius = borderRadiusInput.value;

    customButton.style.backgroundColor = bgColor;
    customButton.style.color = fontColor;
    customButton.style.fontSize = fontSize;
    customButton.style.fontWeight = fontWeight;
    customButton.style.padding = padding;
    customButton.style.borderRadius = borderRadius;

};