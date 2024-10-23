let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

let aboutTab = document.getElementById("aboutTab");
let timeToVisitTab = document.getElementById("timeToVisitTab");
let attractionsTab = document.getElementById("attractionsTab");

timeToVisitTab.classList.add("d-none");
attractionsTab.classList.add("d-none");

function onclickAboutButton() {
    aboutTab.classList.remove("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.add("d-none");

    aboutButton.classList.add("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button")
}

function onclickTimeToVisitButton() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.remove("d-none");
    attractionsTab.classList.add("d-none");

    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.add("selected-button");
    attractionsButton.classList.remove("selected-button")
}

function onclickAttractionsButton() {
    aboutTab.classList.add("d-none");
    timeToVisitTab.classList.add("d-none");
    attractionsTab.classList.remove("d-none");

    aboutButton.classList.remove("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.add("selected-button")
}