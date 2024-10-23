// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/ 

let bookmarkFormEl = document.getElementById("bookmarkForm");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let submitBtnEl = document.getElementById("submitBtn");

let bookmarksListEl = document.getElementById("bookmarksList");

let lastContainer = document.getElementById("lastContainer");




function validateFormData(formData) {
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value
    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*"
    }
};

function addBookmark() {
    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    let listItem = document.createElement("li");
    bookmarksListEl.appendChild(listItem);
    let bookMarkName = document.createElement("p");
    bookMarkName.textContent = siteName;
    listItem.appendChild(bookMarkName);
    let bookmarkUrl = document.createElement("a");
    bookmarkUrl.textContent = siteUrl;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarkUrl.href = siteUrl;
    listItem.appendChild(bookmarkUrl);
    lastContainer.classList.toggle("d-none");
}



siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*"
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});


siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*"
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
})


bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookmark();
    validateFormData();
})