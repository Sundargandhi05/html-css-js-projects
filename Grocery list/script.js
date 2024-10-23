let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");
groceryListContainer.classList.add("bg-container");


let headingElement = document.createElement("h1");
headingElement.textContent = "Grocery List";
headingElement.classList.add("heading");
groceryListContainer.appendChild(headingElement);

let listContainer = document.createElement("ul");
listContainer.classList.add("list-container");
groceryListContainer.appendChild(listContainer);

for (let item of groceryList) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listContainer.appendChild(listItem);
}