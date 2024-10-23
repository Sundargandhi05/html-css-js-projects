let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createAndAppendToDo(todo) {

    let toDoElement = document.createElement("li");
    toDoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(toDoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input")
    toDoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    toDoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIconElemet = document.createElement("i");
    deleteIconElemet.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIconElemet);
}

for (todo of todoList) {
    createAndAppendToDo(todo);
}