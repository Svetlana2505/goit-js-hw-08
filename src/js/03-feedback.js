import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

storageСheck();

function onFormInput() {
  const {
    elements: { email, message },
  } = form;

  const obj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function storageСheck() {
  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (obj) {
    input.value = obj.email;
    textarea.value = obj.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
