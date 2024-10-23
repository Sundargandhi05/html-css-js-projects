let movieTitle = document.getElementById("titleInput");
let textareaPara = document.getElementById("reviewTextarea");
let reviewParaContainer = document.getElementById("reviewsContainer");

let buttonElement = document.getElementById("addBtn");
buttonElement.onclick = function() {
    let movieTitleValue = movieTitle.value;
    let movieReviewValue = textareaPara.value;


    if (movieTitleValue === "") {
        alert("Please enter valid movie title");
        return;
    }

    let movieTitleElement = document.createElement("h1");
    movieTitleElement.textContent = "Movie Title: " + movieTitleValue;
    movieTitleElement.classList.add("movie-title");
    reviewParaContainer.appendChild(movieTitleElement);

    let horizonalElement = document.createElement("hr");
    reviewParaContainer.appendChild(horizonalElement);

    let movieReviewElement = document.createElement("p");
    movieReviewElement.textContent = "Review: " + movieReviewValue;
    reviewParaContainer.appendChild(movieReviewElement);

    movieTitle.value = "";
    textareaPara.value = "";
}