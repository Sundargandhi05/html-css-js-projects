let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let ingredientsList = ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"];

let headingElement = document.getElementById("mainHeading");
headingElement.textContent = recipeObj.title;

let imageElement = document.getElementById("imageElement");
imageElement.src = recipeObj.imgSrc;

let ingredientsContainer = document.getElementById("ingredientsContainer");

for (let ingredients of ingredientsList) {
    let listItem = document.createElement("li");
    listItem.classList.add("ingredients")
    listItem.textContent = ingredients;
    ingredientsContainer.appendChild(listItem)
}