const template = document.querySelector(".template");
const filterTemplate = document.querySelector(".filter__template");

function initTemplateHoverAddress(templateHoverDescription, hoverAddress) {
  for (let i=0;i<templateHoverDescription.length;i++){
    templateHoverDescription[i].textContent = hoverAddress[i];
  }
}

function initTemplateHoverTitle(templateHoverTitle,hoverTitle) {
  for (let i=0;i<templateHoverTitle.length;i++){
    templateHoverTitle[i].textContent = hoverTitle[i];
  }
}

function initTemplateDescriptionBorder (descriptions, skills) {
  for (let i=0;i<descriptions.length;i++){
    descriptions[i].textContent = skills[i];
  }
}

function createCard(subtitle, description, skills, grafic, salary, published, logo, hoverTitle, hoverAddress) {
  const clone = template.content.cloneNode(true);
  const templateSubtitle = clone.querySelector(".tender__subtitle");
  const templateDescription = clone.querySelector(".tender_description");
  const templateDescriptionBorder = clone.querySelectorAll(".description_border");
  const templateGrafic = clone.querySelector(".tender__grafic");
  const templatePay = clone.querySelector(".tender__pay");
  const templatePublished = clone.querySelector(".tender__published");
  const templateImage = clone.querySelector(".tender__image");
  const templateHoverTitle = clone.querySelectorAll(".tender__hover-title");
  const templateHoverDescription = clone.querySelectorAll(".tender__hover-description");
  templateSubtitle.textContent = subtitle;
  templateDescription.textContent = description;
  initTemplateDescriptionBorder(templateDescriptionBorder,skills);
  initTemplateHoverTitle(templateHoverTitle,hoverTitle)
  initTemplateHoverAddress(templateHoverDescription,hoverAddress)
  templateGrafic.textContent = grafic;
  templatePay.textContent = salary;
  templatePublished.textContent =  published;
  templateImage.src = logo;
  return clone;
}

function renderCard(card) {
  filterTemplate.prepend(createCard(card.tenderSubtitle, card.tenderDescription, card.skills, card.grafic,card.pay, card.published, card.logo, card.hoverTitle, card.hoverDescription));
}

actualVacanciesInitialCards.forEach(renderCard);
