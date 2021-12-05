 document.getElementById('validationCustom01').addEventListener('focusout', validateFirstName);
 document.getElementById('validationCustom02').addEventListener('focusout', validateLastName);
 document.getElementById('validationCustom08').addEventListener('focusout', validateDonationAmount);
 document.getElementById('validationCustom09').addEventListener('focusout', validateCreditCardNumber);
 document.getElementById('validationCustom10').addEventListener('focusout', validateExpireDate);
 document.getElementById('donate-button').addEventListener('click', validateAndDisplay);

 function validateFirstName() {
    let firstName = document.getElementById('validationCustom01').value;
    let firstNameError = document.getElementById('fname-error');
    if (firstName == "") {
      firstNameError.classList.remove('display-none');
        return false;
    } else {
      firstNameError.classList.add('display-none');
        return true;
    }
  }

  function validateLastName() {
    let lastName = document.getElementById('validationCustom02').value;
    let lastNameError = document.getElementById('lname-error');
    if (lastName == "") {
      lastNameError.classList.remove('display-none');
        return false;
    } else {
      lastNameError.classList.add('display-none');
        return true;
    }
  }

  function validateDonationAmount() {
    let donation = document.getElementById('validationCustom08').value;
    let donationError = document.getElementById('amount-error');
    if (donation == "") {
      donationError.classList.remove('display-none');
        return false;
    } else {
      donationError.classList.add('display-none');
        return true;
    }
  }

  function validateCreditCardNumber() {
    let creditCard = document.getElementById('validationCustom09').value;
    let creditCardError = document.getElementById('card-error');
    if (creditCard == "") {
      creditCardError.classList.remove('display-none');
        return false;
    } else {
      creditCardError.classList.add('display-none');
        return true;
    }
  }

  function validateExpireDate() {
    let expireDate = document.getElementById('validationCustom10').value;
    let expireDateError = document.getElementById('expire-error');
    if (expireDate == "") {
      expireDateError.classList.remove('display-none');
        return false;
    } else {
      expireDateError.classList.add('display-none');
        return true;
    }
  }

function validateAndDisplay(){
    let donationError = document.getElementById('donation-result');

    let firstName = validateFirstName();
    let lastName = validateLastName();
    let donationAmount = validateDonationAmount();
    let creditCardNumber = validateCreditCardNumber();
    let expireDate = validateExpireDate();
    if(!firstName || !lastName || !donationAmount || !creditCardNumber || !expireDate){
      donationError.classList.add('display-none');
    }else {
        donationError.classList.remove('display-none');
    }
}