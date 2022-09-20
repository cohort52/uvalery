const bannerButton = document.querySelector(".banner__button");

if(bannerButton) {
  const bannerContainerContacts = document.querySelector(".banner__container-contancts");
  const bannerContainerContactsHiden = document.querySelector(".banner__container-contancts_hidden");

  bannerButton.addEventListener("click", () => {
      bannerContainerContacts.classList.toggle("banner__container-contancts_hidden");
      bannerButton.classList.toggle("banner__button_bc");
  })
}
