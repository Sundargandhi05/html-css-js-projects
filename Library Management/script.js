let searchInputEl = document.getElementById("searchInput");
let messageEl = document.getElementById("message");
let spinnerEl = document.getElementById("spinner");
let headingEl = document.createElement("h1");
let searchResultsEl = document.getElementById("searchResults");


function createAndAppend(result) {
    let searchItemContainer = document.createElement("div");
    searchItemContainer.classList.add("col-6", "col-md-4", "col-lg-3", "mb-3");
    searchResultsEl.appendChild(searchItemContainer);

    headingEl.classList.add("in-heading");
    headingEl.textContent = "Popular Books"
    searchItemContainer.appendChild(headingEl);

    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", result.imageLink);
    searchItemContainer.appendChild(imgEl);

    let titleEl = document.createElement("p");
    titleEl.textContent = result.author;
    searchItemContainer.appendChild(titleEl);
}


function displayResults(search_results) {
    for (let result of search_results) {
        createAndAppend(result);
    }
}


function searchInputBooks(event) {
    if (event.key === "Enter") {
        let searchInputElValue = searchInputEl.value;
        let options = {
            method: "GET"
        }
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputElValue;
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", searchInputBooks)