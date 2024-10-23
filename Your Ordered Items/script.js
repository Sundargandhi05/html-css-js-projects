let orderedItemsContainer = document.getElementById("orderedItemsContainer");
orderedItemsContainer.classList.add("text-center");

let orderedListContainer = document.getElementById("itemsListContainer");
orderedListContainer.classList.add("item-list-container");

let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

function onDeleteItem(itemId) {
    let itemElement = document.getElementById(itemId);
    orderedListContainer.removeChild(itemElement);
}

function createAndAppendItem(item) {
    let itemId = "item" + itemList.uniqueNo;
    let butttonId = "button" + itemList.uniqueNo;

    let orderedElement = document.createElement("li");
    orderedElement.classList.add("d-flex", "flex-row", "pt-3");
    orderedElement.id = itemId;
    orderedListContainer.appendChild(orderedElement);

    let itemElement = document.createElement("p");
    itemElement.textContent = item.itemName;
    orderedElement.appendChild(itemElement);

    let buttonElement = document.createElement("button");
    buttonElement.textContent = "Cancel";
    buttonElement.id = butttonId;
    buttonElement.classList.add("btn", "btn-danger", "ml-3");
    buttonElement.onclick = function() {
        onDeleteItem(itemId);
    }
    orderedElement.appendChild(buttonElement);
}

for (let item of itemList) {
    createAndAppendItem(item)
}