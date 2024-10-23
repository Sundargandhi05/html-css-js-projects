let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let backGroundContainer = document.getElementById("bgContainer");
backGroundContainer.style.backgroundColor = bgColorsArray[0]

function buttonElement() {
    let noOFBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * noOFBgColors);
    if (noOFBgColors === randomBgColorIndex) {
        randomBgColorIndex = noOFBgColors - 1;
    }
    let randomNUmberIndex = bgColorsArray[randomBgColorIndex];
    backGroundContainer.style.backgroundColor = randomNUmberIndex;

};