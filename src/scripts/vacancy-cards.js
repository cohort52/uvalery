const initialVacancyCards = [
    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender1.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender2.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender3.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    }
];

const content = document.querySelector('.page');
const vacancyTemplate = document.querySelector('#vacancy-template').content;
const vacancyList = content.querySelector('.tender__main');


const createCard = function(element) {
    const vacancyItem = vacancyTemplate.querySelector('.tender__vacancy').cloneNode(true);
    const tenderTitle = vacancyItem.querySelector('.tender__subtitle');
    const tenderDescription = vacancyItem.querySelector('.tender_description');
    const tenderLink = vacancyItem.querySelector('.tender__link');
    const tenderSkillsContainer = vacancyItem.querySelector('.tender__skills'); //отдельная функция вставки сюда скилов
    const tenderScheduleContainer=  vacancyItem.querySelector('.tender__schedule');//отдельная функция вставки paб.графика 
    //const tenderSkill = tenderSkillsContainer.querySelector('.');///название класса для скилла... возможно тут придется разметку span прописывать и вставлять её
    const tenderPay = vacancyItem.querySelector('.tender__pay');
    const tenderDate = vacancyItem.querySelector('.tender__published');
    const tenderCompanyLogo = vacancyItem.querySelector('.tender__image');
    const tenderCompanyName = vacancyItem.querySelector('.tender-company');
    const tenderCompanyAddress = vacancyItem.querySelector('.tender-address'); 

    tenderTitle.textContent=element.title;
    tenderDescription.textContent=element.description;
    tenderLink.href=element.link;
   
    tenderPay.textContent=element.pay;
    tenderDate.textContent=element.published;
    tenderCompanyLogo.src=element.company.logo;
    tenderCompanyName.textContent=element.company.name;
    tenderCompanyAddress.textContent=element.company.address;

      //функция для вставки скилов в контейнер
    fillSkillsContainer(element.skills, tenderSkillsContainer, 6);
     // функция для вставки раб.графика в контейнер
    fillScheduleContainer(element.schedule, tenderScheduleContainer, 3);
    
    return vacancyItem;
}

const renderCard = function(element){
    vacancyList.append(element);
}

const fillSkillsContainer = function(array, container, places) {
    for (i=0;i<=array.length&&i<=places-1; i++) {
         createIconSkill(array[i], container);
        }
    if (array.length>places) {
        createIconSkill(`Еще +${array.length-places}`, container);
    }
};

const fillScheduleContainer = function(array, container, places) {
    for (i=0; i<=array.length&&i<=places-1; i++) {
        createIconSchedule(array[i], container);
    }
}


const createIconSkill = function(text, container) {
    const skillItem = document.createElement('span');
    skillItem.textContent = text;
    skillItem.classList.add('tender_description', 'description_border');
    container.append(skillItem);
};

const createIconSchedule = function(text, container) {
    const scheduleItem = document.createElement('span');
    scheduleItem.textContent = text;
    container.append(scheduleItem);
}


initialVacancyCards.forEach(card => {
    renderCard(createCard(card));
});