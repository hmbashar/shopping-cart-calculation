function updatePhoneNumber (isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;

    if(isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }   

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

//Price Update
function updatePhoneTotalPrice(newPhoneNumber) {
    
    const phoneTotalPrice = newPhoneNumber * 1219 ;

    const phoneTotalAmount = document.getElementById('phone-price-amount');

    phoneTotalAmount.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const totalPhonePrice = updatePhoneNumber(true);

    updatePhoneTotalPrice(totalPhonePrice);

});


document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const totalPhonePrice = updatePhoneNumber(false);

    updatePhoneTotalPrice(totalPhonePrice);

});
