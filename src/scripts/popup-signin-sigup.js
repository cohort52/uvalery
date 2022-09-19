const buttonSignIn = document.querySelector('.header__button');
const popupSignIn = document.querySelector('.popup');

const buttonHeaderSignIn = document.querySelector('.popup__button_type_sign-in');
const buttonHeaderSignUp = document.querySelector('.popup__button_type_sign-up');

const formSignIn = document.querySelector('.popup__form_type_enter');
const formSignUp = document.querySelector('.popup__form_type_registration');

const inputUserEmail = popupSignIn.querySelector('.popup__input_type_email');
const inputUserPassword = popupSignIn.querySelector('.popup__input_type_password');

const popupProfileMenu = document.querySelector('.popup-profile-menu');
const buttonLogOut = popupProfileMenu.querySelector('.popup-profile-menu__button_type_log-out');

const closePopupOnEsc = (evt) => {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopUp(openedPopup);
    }
}

function openPopUp(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

function closePopUp(popup) {
    popup.classList.remove('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
}

function openProfileMenu() {
    popupProfileMenu.classList.add('popup-profile-menu_opened');
}

function handleButtonSignIn() {
    if (window.UserInfo) {
        openProfileMenu();
        buttonSignIn.classList.add('header__button_clicked');
    } else {
        openPopUp(popupSignIn);
        formSignIn.classList.add('popup__form_type_opened');
        formSignUp.classList.remove('popup__form_type_opened');
        buttonHeaderSignIn.classList.add('popup__button_type_bold');
        buttonHeaderSignUp.classList.remove('popup__button_type_bold');
    }
}

buttonSignIn.addEventListener('click', handleButtonSignIn);

function initializeClosePopup() {
    const popups = Array.from(document.querySelectorAll('.popup'));
    popups.forEach((popup) => {
        popup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {
                closePopUp(popup);
            }
        });
    });
}

initializeClosePopup();

function toggleHeaderButton(button, form, button2, form2) {
    button.classList.remove('popup__button_type_bold');
    form.classList.remove('popup__form_type_opened');
    button2.classList.add('popup__button_type_bold');
    form2.classList.add('popup__form_type_opened');
}

function handleButtonHeaderSignUp() {
    toggleHeaderButton(buttonHeaderSignIn, formSignIn, buttonHeaderSignUp, formSignUp);
}

buttonHeaderSignUp.addEventListener('click', handleButtonHeaderSignUp);

function handleButtonHeaderSignIn() {
    toggleHeaderButton(buttonHeaderSignUp, formSignUp, buttonHeaderSignIn, formSignIn);
}

buttonHeaderSignIn.addEventListener('click', handleButtonHeaderSignIn);

function save(email, password) {
    window.UserInfo = {
        'email': email,
        'password':  password
    };
}

function handleFormSignInSubmit(evt) {
    evt.preventDefault();
    closePopUp(popupSignIn);
    save(inputUserEmail.value, inputUserPassword.value);
    refreshSignInButton();
    formSignIn.reset();
}

popupSignIn.addEventListener('submit', handleFormSignInSubmit);

function refreshSignInButton() {
    let buttonText = 'Войти';
    if (window.UserInfo) {
        buttonText = window.UserInfo.email;
    }
    buttonSignIn.textContent = buttonText;
}

refreshSignInButton();

function logOut() {
    window.UserInfo = '';
}

function handleButtonLogOut() {
    logOut();
    buttonSignIn.textContent = 'Войти';
    buttonSignIn.classList.remove('header__button_clicked');
    popupProfileMenu.classList.remove('popup-profile-menu_opened');
}

buttonLogOut.addEventListener('click', handleButtonLogOut);

function handleSubmitFormSignUp(e) {
    e.preventDefault();
    toggleHeaderButton(buttonHeaderSignUp, formSignUp, buttonHeaderSignIn, formSignIn);
    formSignUp.reset();
    e.stopPropagation();
    alert('Вы зарегистрированы!');
}

formSignUp.addEventListener('submit', handleSubmitFormSignUp);
