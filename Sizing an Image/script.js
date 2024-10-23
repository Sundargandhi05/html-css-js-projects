let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imageWidth = document.getElementById("imageWidth");

let defaultImageWidth = 200;
let maxImageWidth = 300;
let minImageWidth = 100;
let maxImageWidthWarningMessage = "Too big. Decrease the size of the image.";
let minImageWidthWarningMessage = "Can't visible. Increase the size of the image.";

imageElement.style.width = defaultImageWidth + "px";
imageWidth.textContent = defaultImageWidth + "px";


function incrementButton() {
    if (defaultImageWidth > maxImageWidth) {
        warningMessage.textContent = maxImageWidthWarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        let updatedImage = defaultImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedImage;
        imageWidth.textContent = updatedImage
    }
}

function decrementButton() {
    if (defaultImageWidth <= minImageWidth) {
        warningMessage.textContent = minImageWidthWarningMessage;
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        let updatedImage = defaultImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedImage;
        imageWidth.textContent = updatedImage
    }
}