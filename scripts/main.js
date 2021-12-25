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
    removeError(email);
  }
});

email.addEventListener('focusout', () => {
  if (!testEmail()) {
    displayError(email, 'please enter valid email address');
  }
});

country.addEventListener('input', () => {
  if (!testCountry()) {
    displayInvalid(country);
  } else {
    removeInvalid(country);
    removeError(country);
  }
});

country.addEventListener('focusout', () => {
  if (!testCountry()) {
    displayError(country, 'please enter valid country');
  }
});

zip.addEventListener('input', () => {
  if (!testZip()) {
    displayInvalid(zip);
  } else {
    removeInvalid(zip);
    removeError(zip);
  }
});

zip.addEventListener('focusout', () => {
  if (!testZip()) {
    displayError(zip, 'please enter valid zip code');
  }
});

password.addEventListener('input', () => {
  if (!testPasswordLength()) {
    displayInvalid(password);
  } else {
    removeInvalid(password);
    removeError(password);
  }
});

password.addEventListener('focusout', () => {
  if (!testPasswordLength()) {
    displayError(password, 'please enter a password that is at least 5 characters long');
  }
});

passwordConfirm.addEventListener('input', () => {
  if (!testPasswordMatch()) {
    displayInvalid(passwordConfirm);
  } else {
    removeInvalid(passwordConfirm);
    removeError(passwordConfirm);
  }
});

passwordConfirm.addEventListener('focusout', () => {
  if (!testPasswordMatch()) {
    displayError(passwordConfirm, 'password confirmation does not match password');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (testEmail() && testCountry() && testZip() && testPasswordLength() && testPasswordMatch()) {
    displaySuccess();
  }

  if (!testEmail()) {
    displayInvalid(email);
    displayError(email, 'please enter valid email address');
  }

  if (!testCountry()) {
    displayInvalid(country);
    displayError(country, 'please enter valid country');
  }

  if (!testZip()) {
    displayInvalid(zip);
    displayError(zip, 'please enter valid zip code');
  }

  if (!testPasswordLength()) {
    displayInvalid(password);
    displayError(password, 'please enter a password that is at least 5 characters long');
  }

  if (!testPasswordMatch()) {
    displayInvalid(passwordConfirm);
    displayError(passwordConfirm, 'password confirmation does not match password');
  }
});

function displayError(element, errorMessage) {
  const pError = document.createElement('p');

  removeError(element);

  pError.classList.add('error');
  pError.innerHTML = errorMessage;
  pError.setAttribute('id',element.getAttribute('id') + "Error");
  element.insertAdjacentElement('afterend', pError);
}

function removeError(element) {
  const error = document.querySelector("#" + element.getAttribute('id') + "Error");

  if (error) {
    error.remove();
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
