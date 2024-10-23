let likeButton = document.getElementById("likeButton");
let likeIcon = document.getElementById("likeIcon");
let puppyImage = document.getElementById("puppyImage")
let isImageLiked = false; 

function onClickLikeButton() {
    if (isImageLiked) {
        likeButton.style.backgroundColor = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
        likeIcon.style.color = "#cbd2d9";
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        isImageLiked = false;
    } else {
        likeButton.style.backgroundColor = "#0967d2";
        likeButton.style.color = "#ffffff";
        likeIcon.style.color = "#0967d2";
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        isImageLiked = true;
    }
}