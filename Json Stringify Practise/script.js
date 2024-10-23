let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainer = document.getElementById("jsonContainer");
let jsonStrinifiedValues = [bikes, person, todos];


function createAndAppendAllStringifiedValues(strifiedValues) {

    let valuesContainer = document.createElement("div");
    valuesContainer.classList.add("value-container");
    jsonContainer.appendChild(valuesContainer);

    let valueElement = document.createElement("span");
    valueElement.classList.add("value");
    valueElement.textContent = strifiedValues;
    valuesContainer.appendChild(valueElement);
}

function createAndAppendValues(values) {
    let strifiedValues = JSON.stringify(values);
    createAndAppendAllStringifiedValues(strifiedValues);
}


for (let values of jsonStrinifiedValues) {
    createAndAppendValues(values);
}