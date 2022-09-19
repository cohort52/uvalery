// Конфигурационный объект

const templateElementConfig = {
  resumeCurrentTemplateBlock: '#template',
  resumeCurrentCard: '.resume-current__card',
  resumeCurrentJob: '.resume-current__subtitle',
  resumeCurrentDescription: '.resume-current__description',
  resumeCurrentSkills: '.resume-current__skills',
  resumeCurrentSkill: 'resume-current__skill',
  resumeCurrentGrafic: '.resume-current__grafic',
  resumeCurrentPay: '.resume-current__pay',
  resumeCurrentPublished: '.resume-current__published',
  resumeCurrentImage: '.resume-current__image'
}

// Функция создания карточки-резюме

const templateElement = document.querySelector('#template').content;

function createCard(templateElementConfig, arrayElement) {
  const resumeCurrentTemplate = templateElement.querySelector(templateElementConfig.resumeCurrentCard).cloneNode(true);

  const resumeCurrentTemplateJob = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentJob);
  const resumeCurrentTemplateDescription = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentDescription);
  const resumeCurrentTemplateSkills = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentSkills);
  const resumeCurrentTemplateGrafic = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentGrafic);
  const resumeCurrentTemplatePay = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPay);
  const resumeCurrentTemplatePublished = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPublished);
  const resumeCurrentTemplateImage = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentImage);

  resumeCurrentTemplateJob.textContent = arrayElement.job;
  resumeCurrentTemplateDescription.textContent = arrayElement.description;

  const resumeCurrentSkills = Array.from(arrayElement.skills);
  resumeCurrentSkills.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.classList.add(templateElementConfig.resumeCurrentSkill);
    spanElement.classList.add('description_border');
    spanElement.textContent = item;
    resumeCurrentTemplateSkills.append(spanElement);
  });

  resumeCurrentTemplateGrafic.textContent = arrayElement.grafic;
  resumeCurrentTemplatePay.textContent = arrayElement.pay + ' руб.';
  resumeCurrentTemplatePublished.textContent = arrayElement.published;
  resumeCurrentTemplateImage.src = arrayElement.image;
  resumeCurrentTemplateImage.alt = arrayElement.name;

  resumeCurrentTemplate.querySelector('.resume-current__hover-name').textContent = arrayElement.name;
  resumeCurrentTemplate.querySelector('.resume-current__hover-description').textContent = (arrayElement.city + ', ' + arrayElement.age);

  return resumeCurrentTemplate;
};


// Пагинация

const paginationConfig = {
  previousButton: '#left-button',
  nextButton: '#right-button',
  pageNumberClass: 'resume-current__page-number',
  buttonActiveClass: 'resume-current__page-number_active'
}

const previousButton = document.querySelector(paginationConfig.previousButton);
const nextButton = document.querySelector(paginationConfig.nextButton);

let currentPageNumber = 1;
const recordsPerPage = 3;

function numberOfPages() {
  return Math.ceil(resumeList.length / recordsPerPage);
}

function changePage(currentPageNumber) {
  const pageNumber = Number(currentPageNumber);
  const startPoint = (pageNumber - 1) * recordsPerPage;
	const endPoint = startPoint + recordsPerPage;
  const newList = resumeList.slice(startPoint, endPoint);
  const resumeContainer = document.querySelector('.resume-current__main');
  const cardsToRemove = Array.from(resumeContainer.querySelectorAll('.resume-current__card'));
  cardsToRemove.forEach( (element) =>
    element.remove());
  newList.forEach((arrayElement) => {
    resumeContainer.append(createCard(templateElementConfig, arrayElement));
  });
}

function createNumbersOfPages(paginationConfig) {
  changePage(currentPageNumber);
  for(let i = 1; i <= numberOfPages(); i++) {
    const numberButton = document.createElement('button');
    numberButton.classList.add(paginationConfig.pageNumberClass);
    numberButton.textContent = String(i);
    if (numberButton.textContent == currentPageNumber) {
      numberButton.classList.add(paginationConfig.buttonActiveClass);
    }
    const numbersContainer = document.querySelector('.resume-current__numbers-container');
    numberButton.addEventListener('click', (event) => {
      currentPageNumber = numberButton.textContent
      changePage(currentPageNumber);
      const buttonsToGo = Array.from(numbersContainer.querySelectorAll('.' + paginationConfig.pageNumberClass));
      buttonsToGo.forEach((element) => {
        element.classList.remove(paginationConfig.buttonActiveClass)
      });
      event.target.classList.add(paginationConfig.buttonActiveClass);
    });
    numbersContainer.append(numberButton);
  }
}
createNumbersOfPages(paginationConfig);

function previousPage() {
  if(currentPageNumber > 1) {
    currentPageNumber--;
    changePage(currentPageNumber);
  }
}

function nextPage() {
  if(currentPageNumber < numberOfPages()) {
    currentPageNumber++;
    changePage(currentPageNumber);
  }
}

previousButton.addEventListener('click', previousPage);
nextButton.addEventListener('click', nextPage);

