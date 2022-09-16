const actualVacanciesInitialCards = [
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  },
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  }
  ,
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  }
  ,
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  },
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  }
  ,
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  }
  ,
  {
    subtitle: 'PR менеджер',
    description: 'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    city: 'Новороссийск',
    skills: ['SMM','instagram','Администратор', 'Честность', 'Открытость', 'Целеустремленность'],
    job: '',
    grafic:'Удаленно 5/2 2/2',
    published: '5 дней назад',
    salary: '35000',
    schedule: '',
    workExperience: '',
    logo: '../images/tender3.svg',
    hoverTitle: '"Антон тут рядом"',
    hoverAddress: 'г.Новороссийск, ул.Видова, д.214',
  }

]

const template = document.querySelector(".template");
const filterTemplate = document.querySelector(".filter__template");

const initTemplateDescriptionBorder = (element) => {
    element.textContent = 'skills';
};

function createCard(subtitle, description, skills, grafic, salary, published, logo) {
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
  templateDescriptionBorder.forEach(initTemplateDescriptionBorder);
  templateGrafic.textContent = grafic;
  templatePay.textContent = salary;
  templatePublished.textContent =  published;
  templateImage.src = logo;

  return clone;
}

// createCard (actualVacanciesInitialCards)

function renderCard(card) {
  filterTemplate.prepend(createCard(card.subtitle, card.description, card.skills, card.grafic,card.salary, card.published, card.logo));
}

 actualVacanciesInitialCards.forEach(renderCard);
