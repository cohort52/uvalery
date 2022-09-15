const templateElementConfig = {
  tenderTemplateBlock: '#template',
  tenderCard: '.tender__card',
  tenderJob: '.tender__subtitle',
  tenderDescription: '.tender__description',
  tenderSkills: '.tender__skills',
  tenderSkill: 'tender__skill',
  tenderGrafic: '.tender__grafic',
  tenderPay: '.tender__pay',
  tenderPublished: '.tender__published',
  tenderImage: '.tender__image'
}

const resumeList = [
  {
    image: 'https://images.unsplash.com/photo-1610655507808-a59293f4e332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    job: 'Психолог, координатор',
    name: 'Иванова Мария Ивановна',
    description: 'Творчески развиваюсь постоянно, изучаю новые методы и т.д. Ищу свою команду для активной деятельности во благо.',
    skills: ['SMM', 'Instgram', 'Администратор', 'Открытость'],
    grafic: 'Удаленно 5/2 2/2',
    pay: '35 000 руб',
    published: '1 день назад'
  },
  {
    image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    job: 'Преподватель, менеджер',
    name: 'Смирнова Дарья Петровна',
    description: 'Здравствуйте, меня зовут Дарья. Я занимаюсь преподаванием более 5 лет. Имею опыт работы с детьми от 4 и до 18 лет. Также занимаюсь со студентами и взрослыми. Преподавала в unknown школе. Нахожу ко всем индивидуальный подход.',
    skills: ['Креативность', 'коммуникабельность'],
    grafic: 'В офисе 5/2',
    pay: '40 000 руб',
    published: '4 дня назад'
  },
  {
    image: 'https://images.unsplash.com/photo-1560298803-1d998f6b5249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    job: 'Прогаммист, системный администратор',
    name: 'Иванов Иван Иванович',
    description: 'Здравствуйте, меня зовут Иван. ',
    skills: ['Накатываю Arch без гайда', 'трукодер'],
    grafic: 'Удаленно 5/2',
    pay: '50 000 руб',
    published: '6 дней назад'
  }
];


const templateElement = document.querySelector('#template').content;

function createCard(templateElementConfig, arrayElement) {
  const tenderTemplate = templateElement.querySelector(templateElementConfig.tenderCard).cloneNode(true);

  const tenderTemplateJob = tenderTemplate.querySelector(templateElementConfig.tenderJob);
  const tenderTemplateDescription = tenderTemplate.querySelector(templateElementConfig.tenderDescription);
  const tenderTemplateSkills = tenderTemplate.querySelector(templateElementConfig.tenderSkills);
  const tenderTemplateGrafic = tenderTemplate.querySelector(templateElementConfig.tenderGrafic);
  const tenderTemplatePay = tenderTemplate.querySelector(templateElementConfig.tenderPay);
  const tenderTemplatePublished = tenderTemplate.querySelector(templateElementConfig.tenderPublished);
  const tenderTemplateImage = tenderTemplate.querySelector(templateElementConfig.tenderImage);

  tenderTemplateJob.textContent = arrayElement.name;
  tenderTemplateDescription.textContent = arrayElement.description;

  const tenderSkills = Array.from(arrayElement.skills);
  tenderSkills.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.classList.add(templateElementConfig.tenderSkill);
    spanElement.textContent = item.textContent;
    tenderTemplateSkills.append(spanElement);
  });

  tenderTemplateGrafic.textContent = arrayElement.grafic;
  tenderTemplatePay.textContent = arrayElement.pay;
  tenderTemplatePublished.textContent = arrayElement.published;
  tenderTemplateImage.src = arrayElement.image;
  tenderTemplateImage.alt = arrayElement.name;

  return tenderTemplate;
}

resumeList.forEach((arrayElement) => {
  const resumeContainer = document.querySelector('.tender__main');
  resumeContainer.append(createCard(templateElementConfig, arrayElement));
});

