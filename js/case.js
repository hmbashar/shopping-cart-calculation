// quantity plus when click plus

function updateCaseNumber (isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;

    if(isIncrease === true) {
         newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }   

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

//Price Update
function updateCaseTotalPrice(newCaseNumber) {
    
    const caseTotalPrice = newCaseNumber * 59 ;

    const caseTotalAmount = document.getElementById('case-amount');

    caseTotalAmount.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber)
    
});

// quantity minus when click minus
document.getElementById('btn-case-minus').addEventListener('click', function() {
    const newCaseNumber = updateCaseNumber(false);


    updateCaseTotalPrice(newCaseNumber);


});