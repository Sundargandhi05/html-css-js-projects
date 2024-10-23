let addUserFormEl = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let statusEl = document.getElementById("status");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale")

let formData = {
    name: "",
    email: "",
    workStatus: "Active",
    gender: "Male"
}

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
});

statusEl.addEventListener("change", function(event) {
    formData.workStatus = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function submitFormButton(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer c26db1e6e4a9d17627584a1a28de77b220764ce4f940a078b9c651ef788c8faa"
        },
        body: JSON.stringify(formData)
    }
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (object.code === 422) {
                if (object.data[0].email === "email has already exist") {
                    emailErrMsgEl.textContent = "Provide Valid User email id";
                }
            }
        });
}


addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submitFormButton(formData);
});