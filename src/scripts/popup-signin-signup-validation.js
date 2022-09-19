const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (form, input, config) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(config.inputErrorClass);
    error.classList.add(config.errorClass);
    error.textContent = input.validationMessage;
};

const hideInputError = (form, input, config) => {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = '';
};

const validateInput = (form, input, config) => {
    if (!input.validity.valid) {
        showInputError(form, input, config);
    } else {
        hideInputError(form, input, config);
    }
};

const hasInvalidInput = (inputs) => {
    return inputs.some((input) => {
        return !input.validity.valid;
    })
};

const disableButton = (buttonSubmit, config) => {
    buttonSubmit.classList.add(config.inactiveButtonClass);
    buttonSubmit.setAttribute('disabled', 'disabled');
}

const enableButton = (buttonSubmit, config) => {
    buttonSubmit.classList.remove(config.inactiveButtonClass);
    buttonSubmit.removeAttribute('disabled', 'disabled');
}

const toggleButtonState = (input, buttonSubmit, config) => {
    if (hasInvalidInput(input)) {
        disableButton(buttonSubmit, config);
    } else {
        enableButton(buttonSubmit, config);
    }
};

function setHandlers (form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const buttonSubmit = form.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, buttonSubmit, config);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            validateInput(form, input, config);
            toggleButtonState(inputs, buttonSubmit, config);
        });
    });
}

function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setHandlers(form, config);
    });
}

enableValidation(validationConfig);