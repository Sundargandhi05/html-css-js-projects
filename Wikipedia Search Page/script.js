let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults")
let spinnerEl = document.getElementById("spinner");

function createAppendValues(result) {
    // creating search item container
    let searchItemContainer = document.createElement("div");
    searchItemContainer.classList.add("result-item");
    searchResultsEl.appendChild(searchItemContainer);


    // creating title element 
    let {
        description,
        link,
        title
    } = result;
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    searchItemContainer.appendChild(titleEl);

    //creating break element 
    let breakElement = document.createElement("br");
    searchItemContainer.appendChild(breakElement)


    //creating link element 
    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    searchItemContainer.appendChild(urlEl);

    // creating the line break element 
    let lineBreakEl = document.createElement("br");
    searchItemContainer.appendChild(lineBreakEl);

    //creating the description element 
    let paraEl = document.createElement("p");
    paraEl.textContent = description;
    paraEl.classList.add("link-description");
    searchItemContainer.appendChild(paraEl);
}


function displayResults(search_results) {
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results) {
        createAppendValues(result);
    }
}



function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let searchInputElValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputElValue;
        let options = {
            method: "GET"
        }
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


searchInputEl.addEventListener("keydown", searchWikipedia)