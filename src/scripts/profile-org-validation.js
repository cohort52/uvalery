const profileOrgValidationConfig = {
  formSelector: ".profile-org__form",
  inputSelector: ".profile-org__input",
  inputErrorClass: "profile-org__input_type_error",
  errorSelector: ".profile-org__input-error",
  submitButtonSelector: ".profile-org__save-button",
};

function enableFormValidation(validationConfig) {
  const formElem = document.querySelector(validationConfig.formSelector);
  setEventListenersForInputs(formElem, validationConfig);
}

function setEventListenersForInputs(formElem, validationConfig) {
  const inputsList = Array.from(
    formElem.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonElem = formElem.querySelector(
    validationConfig.submitButtonSelector
  );

  toggleSubmitButtonState(inputsList, buttonElem);

  inputsList.forEach((inputElem) => {
    inputElem.addEventListener("input", () => {
      checkInputValid(inputElem, formElem, validationConfig);
      toggleSubmitButtonState(inputsList, buttonElem);
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

function hasInvalidInput(inputsList) {
  return inputsList.some((input) => !input.validity.valid);
}

function toggleSubmitButtonState(inputsList, buttonElem) {
  if (hasInvalidInput(inputsList)) {
    buttonElem.disabled = true;
  } else {
    buttonElem.disabled = false;
  }
}
