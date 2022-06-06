const form = document.querySelector("#contact-form");

const usersName = document.querySelector("#usersName");

const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");

const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");

const emailError = document.querySelector("#emailError");

const messageContent = document.querySelector("#message-content");

const messageContentError = document.querySelector("#messageContentError");

const successContainer = document.querySelector(".contactSuccess");

function contactFormValidate(event) {
  event.preventDefault();
  if (checkLength(usersName.value, 4) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 20) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateContactEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(messageContent.value, 15) === true) {
    messageContentError.style.display = "none";
  } else {
    messageContentError.style.display = "block";
  }

  if (
    checkLength(usersName.value, 4) &&
    validateContactEmail(email.value) &&
    checkLength(subject.value, 20) &&
    checkLength(messageContent.value, 15)
  ) {
    form.reset();
    successContainer.innerHTML = `<p class="success">Thank you! Your message has been sent</p>`;
  }
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateContactEmail(email) {
  const regEx = /\S+@\S+.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", contactFormValidate);
