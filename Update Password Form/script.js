let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword()
    validateConfirmPassword()
});

function validateNewPassword() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
}

function validateConfirmPassword() {
    if (confirmPasswordEl.value !== newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be the same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}



newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);