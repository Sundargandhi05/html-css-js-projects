let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

function createAndAppendCountry(country) {
    // item container
    let itemCountainer = document.createElement("div");
    itemCountainer.classList.add("ml-auto", "mr-auto", "country-card", "col-11", "d-flex", "flex-row", "col-md-5")
    resultCountriesEl.appendChild(itemCountainer)


    //creating img element 
    let imageEl = document.createElement("img");
    imageEl.src = country.flag
    imageEl.classList.add("country-flag", "mt-auto", "mb-auto");
    itemCountainer.appendChild(imageEl);


    //creatin inside container 
    let insideContainer = document.createElement("div");
    insideContainer.classList.add("d-flex", "flex-column", "ml-4");
    itemCountainer.appendChild(insideContainer)


    //creating country name 
    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name");
    insideContainer.appendChild(countryNameEl);


    //crating population para 
    let countrypopulationEl = document.createElement("p");
    countrypopulationEl.textContent = country.population;
    countrypopulationEl.classList.add("country-population");
    insideContainer.appendChild(countrypopulationEl);
}




function onDisplayCountries() {
    resultCountriesEl.textContent = "";
    for (let country of countriesList) {
        let countryName = country.name;
        if (countryName.includes(searchInputElVal)) {
            createAndAppendCountry(country);
        }
    }
}




function getCountries() {
    resultCountriesEl.textContent = "";
    let url = "https://apis.ccbp.in/countries-data"
    let options = {
        method: "GET"
    }
    resultCountriesEl.textContent = "";
    spinnerEl.classList.remove("d-none");
    resultCountriesEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            resultCountriesEl.classList.remove("d-none");
            countriesList = jsonData;
            onDisplayCountries();
        });
}



let searchInputElVal = "";

function onSearchChangeInput(event) {
    searchInputElVal = event.target.value;
    getCountries()
}
getCountries()

searchInputEl.addEventListener("keyup", onSearchChangeInput)