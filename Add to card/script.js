let rowContainer = document.getElementById("rowCart");
rowContainer.classList.add("cart");

let headingElement = document.createElement("h1");
headingElement.textContent = "Add To Cart";
headingElement.classList.add("cart");
rowContainer.appendChild(headingElement);

let inputContainerElement = document.createElement("div");
inputContainerElement.classList.add("d-flex", "flex-row", "justify-content-center", "mt-4");
rowContainer.appendChild(inputContainerElement)

let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "cartItemTextInput";
inputContainerElement.appendChild(inputElement);

let buttonElement = document.createElement("button");
buttonElement.classList.add("btn", "btn-primary", "ml-3")
buttonElement.textContent = "Add";
buttonElement.id = "addBtn";
inputContainerElement.appendChild(buttonElement);


let containerCart = document.createElement("div");
rowContainer.appendChild(containerCart);

let containerInElement = document.createElement("h1");
containerInElement.textContent = "My Cart items";
containerInElement.classList.add("center-heading");
containerCart.appendChild(containerInElement);

buttonElement.onclick = function() {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = inputElement.value;
    containerCart.appendChild(listItem);
    inputElement.value = "";
}