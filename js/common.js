// Calculate Total
function getTextElementValueById(elementID) {

    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;

}

// set value
function setTextElementValueById(elementID, value) {
 
    const subTotalElement = document.getElementById(elementID);

    subTotalElement.innerText = value;
}

//Calculate sub total
function calculateSubTotal() {

    // Calculate Total
    const currentPhoneTotal = getTextElementValueById('phone-price-amount');
    const currentCaseTotal = getTextElementValueById('case-amount');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementValueById('sub-total', currentSubTotal);

    // Calculate Tax
    const TaxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2)); // tax added 10% with 2 decimal and convert string to number

    setTextElementValueById('tax-amount', TaxAmount);

    //Final Amount
    const finalAmount = currentSubTotal + TaxAmount;

    setTextElementValueById('final-amount', finalAmount);
}
