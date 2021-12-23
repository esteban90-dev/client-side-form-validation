const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const form = document.querySelector('form');

email.addEventListener('input', () => {
  if (!testEmail()) {
    displayInvalid(email); 
  } else {
    removeInvalid(email);
    removeEmailError();
  }
});

country.addEventListener('input', () => {
  if (!testCountry()) {
    displayInvalid(country);
  } else {
    removeInvalid(country);
    removeCountryError();
  }
});

zip.addEventListener('input', () => {
  if (!testZip()) {
    displayInvalid(zip);
  } else {
    removeInvalid(zip);
    removeZipError();
  }
});

password.addEventListener('input', () => {
  if (!testPasswordLength()) {
    displayInvalid(password);
  } else {
    removeInvalid(password);
    removePasswordLengthError();
  }
});

passwordConfirm.addEventListener('input', () => {
  if (!testPasswordMatch()) {
    displayInvalid(passwordConfirm);
  } else {
    removeInvalid(passwordConfirm);
    removePasswordMatchError();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (testEmail() && testCountry() && testZip() && testPasswordLength() && testPasswordMatch()) {
    displaySuccess();
  }

  if (!testEmail()) {
    displayInvalid(email);
    displayEmailError();
  }

  if (!testCountry()) {
    displayInvalid(country);
    displayCountryError();
  }

  if (!testZip()) {
    displayInvalid(zip);
    displayZipError();
  }

  if (!testPasswordLength()) {
    displayInvalid(password);
    displayPasswordLengthError();
  }

  if (!testPasswordMatch()) {
    displayInvalid(passwordConfirm);
    displayPasswordMatchError();
  }
});

function displayEmailError() {
  if (!document.querySelector('#emailError')) {
    const message = 'you must enter a valid email address.';
    const p = document.createElement('p');
    p.classList.add('error-message');
    p.setAttribute('id','emailError');
    p.innerHTML = message;
  
    form.insertBefore(p, email);
  }
}

function removeEmailError() {
  const emailError = document.querySelector('#emailError');

  if (emailError) {
    emailError.remove();
  }
}

function displayCountryError() {
  if (!document.querySelector('#countryError')) {
    const message = 'you must enter a valid country.';
    const p = document.createElement('p');
    p.classList.add('error-message');
    p.setAttribute('id','countryError');
    p.innerHTML = message;

    form.insertBefore(p, country);
  }
}

function removeCountryError() {
  const countryError = document.querySelector('#countryError');

  if (countryError) {
    countryError.remove();
  }
}

function displayZipError() {
  if (!document.querySelector('#zipError')) {
    const message = 'you must enter a valid zip code.';
    const p = document.createElement('p');
    p.classList.add('error-message');
    p.setAttribute('id','zipError');
    p.innerHTML = message;

    form.insertBefore(p, zip);
  }
}

function removeZipError() {
  const zipError = document.querySelector('#zipError');

  if (zipError) {
    zipError.remove();
  }
}

function displayPasswordLengthError() {
  if (!document.querySelector('#passwordLengthError')) {
    const message = 'you must enter a password longer than 4 characters.';
    const p = document.createElement('p');
    p.classList.add('error-message');
    p.setAttribute('id','passwordLengthError');
    p.innerHTML = message;

    form.insertBefore(p, password);
  }
}

function removePasswordLengthError() {
  const passwordLengthError = document.querySelector('#passwordLengthError');

  if (passwordLengthError) {
    passwordLengthError.remove();
  }
}

function displayPasswordMatchError() {
  if (!document.querySelector('#passwordMatchError')) {
    const message = 'password confirmation does not match password.';
    const p = document.createElement('p');
    p.classList.add('error-message');
    p.setAttribute('id','passwordMatchError');
    p.innerHTML = message;

    form.insertBefore(p, passwordConfirm);
  }
}

function removePasswordMatchError() {
  const passwordMatchError = document.querySelector('#passwordMatchError');

  if (passwordMatchError) {
    passwordMatchError.remove();
  }
}

function displaySuccess() {
  const message = 'you have submitted the form correctly!';
  const p = document.createElement('p');
  p.innerHTML = message;
  p.style.color = 'green';
  document.querySelector('body').appendChild(p);
}

function displayInvalid(element) {
  if (!element.classList.contains('invalid')) {
    element.classList.add('invalid');
  }
}

function removeInvalid(element) {
  if (element.classList.contains('invalid')) {
    element.classList.remove('invalid');
  }
}

function testEmail() {
  const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regexp.test(email.value);
}

function testCountry() {
  const regexp = /\w{3,}/
  return regexp.test(country.value);
}

function testZip() {
  return ((zip.value >= 1) && (zip.value <= 99950));
}

function testPasswordLength() {
  const value = password.value;
  return (value.trim().length > 4);
}

function testPasswordMatch() {
  return (password.value === passwordConfirm.value);
}
