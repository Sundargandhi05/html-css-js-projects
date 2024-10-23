let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let errorMessage = document.getElementById("errorMessage");


function calculateButton() {
    let billAmountValue = billAmount.value;
    let percentageTipValue = percentageTip.value;
    if (billAmountValue === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
    } else if (percentageTipValue === "") {
        errorMessage.textContent = "Please Enter a Valid Input.";
    } else {
        errorMessage.textContent = "";
        let billAmountIntValue = parseInt(billAmountValue);
        let percentageTipIntValue = parseInt(percentageTipValue);
        let calculatedTip = (percentageTipIntValue / 100) * billAmountIntValue;
        let totalAmountValue = billAmountIntValue + calculatedTip;
        tipAmount.value = calculatedTip;
        totalAmount.value = totalAmountValue;
    }
}