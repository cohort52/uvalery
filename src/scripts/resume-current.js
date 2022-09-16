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
  const resumeCurrentTemplate = templateElement.querySelector(templateElementConfig.resumeCurrentCard).cloneNode(true);

  const resumeCurrentTemplateJob = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentJob);
  const resumeCurrentTemplateDescription = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentDescription);
  const resumeCurrentTemplateSkills = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentSkills);
  const resumeCurrentTemplateGrafic = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentGrafic);
  const resumeCurrentTemplatePay = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPay);
  const resumeCurrentTemplatePublished = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentPublished);
  const resumeCurrentTemplateImage = resumeCurrentTemplate.querySelector(templateElementConfig.resumeCurrentImage);

  resumeCurrentTemplateJob.textContent = arrayElement.name;
  resumeCurrentTemplateDescription.textContent = arrayElement.description;

  const resumeCurrentSkills = Array.from(arrayElement.skills);
  resumeCurrentSkills.forEach((item) => {
    const spanElement = document.createElement('span');
    spanElement.classList.add(templateElementConfig.resumeCurrentSkill);
    spanElement.textContent = item.textContent;
    resumeCurrentTemplateSkills.append(spanElement);
  });

  resumeCurrentTemplateGrafic.textContent = arrayElement.grafic;
  resumeCurrentTemplatePay.textContent = arrayElement.pay;
  resumeCurrentTemplatePublished.textContent = arrayElement.published;
  resumeCurrentTemplateImage.src = arrayElement.image;
  resumeCurrentTemplateImage.alt = arrayElement.name;

  return resumeCurrentTemplate;
}

resumeList.forEach((arrayElement) => {
  const resumeContainer = document.querySelector('.resume-current__main');
  resumeContainer.append(createCard(templateElementConfig, arrayElement));
});

