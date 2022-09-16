const profileOrgValidationConfig = {
  formSelector: ".profile-org__form",
  inputSelector: ".profile-org__input",
  inputErrorClass: "profile-org__input_type_error",
  errorSelector: ".profile-org__input-error",
};

function enableFormValidation(validationConfig) {
  const formElem = document.querySelector(validationConfig.formSelector);
  setEventListenersForInputs(formElem, validationConfig);
}

function setEventListenersForInputs(formElem, validationConfig) {
  const inputsList = Array.from(
    formElem.querySelectorAll(validationConfig.inputSelector)
  );
  inputsList.forEach((inputElem) => {
    inputElem.addEventListener("input", () => {
      checkInputValid(inputElem, formElem, validationConfig);
    });
  });
}

function checkInputValid(inputElem, formElem, validationConfig) {
  if (inputElem.validity.valid) {
    hideInputError(inputElem, formElem, validationConfig);
  } else {
    showInputError(inputElem, formElem, validationConfig);
  }
}

/* Пофиксить атрибуты для тегов input 
type='', minlength="2",maxlength="40" и др */

/** Прописать стили для span */

function hideInputError(inputElem, formElem, validationConfig) {
  inputElem.classList.remove(validationConfig.inputErrorClass);
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);
  errorElem.textContent = "";
}

function showInputError(inputElem, formElem, validationConfig) {
  inputElem.classList.add(validationConfig.inputErrorClass);
  const errorElem = formElem.querySelector(`#${inputElem.id}-error`);
  errorElem.textContent = inputElem.validationMessage;
}

enableFormValidation(profileOrgValidationConfig);
