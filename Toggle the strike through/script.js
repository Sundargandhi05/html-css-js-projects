let checkboxId = "checkbox";
let checkboxLabelId = "checkboxLabel";

function changesHappend(checkboxId, checkboxLabelId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(checkboxLabelId);
    if (checkboxElement.checked === true) {
        labelElement.classList.add("striked")
    } else {
        labelElement.classList.remove("striked")
    }

}

let checkBoxWithLabelContainer = document.getElementById("checkBoxWithLabelContainer");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.onclick = function() {
    changesHappend(checkboxId, checkboxLabelId)
}
checkBoxWithLabelContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.textContent = "I am a label";
labelElement.classList.add("ml-1");
labelElement.id = checkboxLabelId;
checkBoxWithLabelContainer.appendChild(labelElement);