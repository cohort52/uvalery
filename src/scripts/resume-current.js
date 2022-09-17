// Пока что скрипты подключила по-старинке и css файл тоже отдельно, чтобы не мешать это все в основную ветку
// Думаю можно скорректировать подключения, а также ссылку на новую страничку в самом конце перед сдачей

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

// Функция добавления карточки-резюме

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

// Создание карточки для каждого элемента массива

resumeList.forEach((arrayElement) => {
  const resumeContainer = document.querySelector('.resume-current__main');
  resumeContainer.append(createCard(templateElementConfig, arrayElement));
});


// Пагинация



// Фильтр - заготовки
// Я поменяла pay на числовое значение, а не строку. Потом это должно использоваться в фильтре, где на ввод тоже числа
// Посмотришь как сделать, чтобы это отрисовывалось тоже числом, а не text? И как отрисовать с отделением тысяч пробелом + слово "руб"

const blockFilter = document.querySelector('.resume-current__filter');

const filterResumeList = () => {
  return resumeList.filter(function(arrayElement) {
    arrayElement.pay === blockFilter.querySelector('#pay').value;
  });
}
console.log(blockFilter.querySelector('#pay'))

// нажатие на найти вызывает метод

const buttonSearch = blockFilter.querySelector('.filter__button');
buttonSearch.addEventListener('click', filterResumeList);
