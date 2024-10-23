let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndex = document.getElementById("startIndexInput");
let deleteCount = document.getElementById("deleteCountInput");
let itemToAdd = document.getElementById("itemToAddInput");
let updatedArray = document.getElementById("updatedArray");
let spliceBtn = document.getElementById("spliceBtn");

function updateAndDisplayValues() {
    let startIndexValue = startIndex.value;
    let deleteCountValue = deleteCount.value;
    let itemToAddValue = itemToAdd.value;
    if (startIndexValue === "") {
        alert("Please enter valid text")
        return;
    }
    if (itemToAddValue === "") {
        arr.splice(parseInt(startIndexValue), parseInt(deleteCountValue));
    } else {
        arr.splice(parseInt(startIndexValue), parseInt(deleteCountValue), itemToAddValue);
    }
}



spliceBtn.onclick = function() {
    updateAndDisplayValues()
    let strifiriedArray = JSON.stringify(arr);
    updatedArray.textContent = strifiriedArray;
}