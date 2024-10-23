let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainer.classList.add("bg-container");


let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkbox";
checkboxWithLabelContainer.append(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.textContent = "Click Me!";
labelElement.id = "checkboxLabel";
labelElement.classList.add("ml-2");
checkboxWithLabelContainer.appendChild(labelElement);