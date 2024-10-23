let bgContainerElement = document.getElementById("bgContainer");
let headingElement = document.getElementById("heading")
let themeUserInputElement = document.getElementById("themeUserInput")

let lightbgImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkbgImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

bgContainerElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let themeUserInputElementText = themeUserInputElement.value;
        if (themeUserInputElementText === "Dark") {
            bgContainerElement.style.backgroundImage = darkbgImage;
            headingElement.style.color = "#ffffff";
        } else if (themeUserInputElementText === "Light") {
            bgContainerElement.style.backgroundImage = lightbgImage;
            headingElement.style.color = "#014d40";
        } else {
            alert("Enter a valid theme");
            return;
        }
    }
});