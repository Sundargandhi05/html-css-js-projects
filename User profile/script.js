let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");
let imageContainer = document.getElementById("imgContainer");

profileContainer.classList.add("profile-container", "d-flex", "flex-column", "justify-content-center", "text-center");
profileContainer.appendChild(imageContainer);




let imgElement = document.createElement("img");
imgElement.setAttribute("src", profileDetails.imgSrc);
imageContainer.appendChild(imgElement);

let h1Element = document.createElement("h1");
h1Element.textContent = profileDetails.name;
profileContainer.appendChild(h1Element);


let paraElement = document.createElement("p");
paraElement.textContent = "Age: " + profileDetails.age;
paraElement.classList.add("paragraph-element");
profileContainer.appendChild(paraElement);