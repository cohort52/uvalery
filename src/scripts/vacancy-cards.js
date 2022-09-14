const initialVacancyCards = [
    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    grafic:'Удаленно 5/2 2/2',
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender1.svg',
             name:'Антон тут рядом',
             adress:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    grafic:'Удаленно 5/2 2/2',
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender2.svg',
             name:'Антон тут рядом',
             adress:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    grafic:'Удаленно 5/2 2/2',
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender3.svg',
             name:'Антон тут рядом',
             adress:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    }
];

const content = document.querySelector('.page');
const vacancyTemplate = document.querySelector('#vacancy-template').content;
const vacancyList = content.querySelector('.tender__main');


initialVacancyCards.forEach(card => {
    renderCard(createCard(card));
});

const createCard = function(element) {
    const vacancyItem = cardTemplate.querySelector('.tender__vacancy').cloneNode(true);
    const tenderTitle = vacancyItem.querySelector('.tender__subtitle');
    const tenderDescription = vacancyItem.querySelector('.tender_description');
    const tenderLink = vacancyItem.querySelector('.tender__link');
    const tenderSkillsContainer = vacancyItem.querySelector('.tender__skills'); //отдельная функция вставки сюда скилов
    const tenderSkill = tenderSkillsContainer.querySelector('.');///название класса для скилла... возможно тут придется разметку span прописывать и вставлять её
    const tenderGrafic = vacancyItem.querySelector('.tender__grafic');
    const tenderPay = vacancyItem.querySelector('.tender__pay');
    const tenderDate = vacancyItem.querySelector('.tender__published');
    const tenderCompanyLogo = vacancyItem.querySelector('.tender__image');
    const tenderCompanyName = vacancyItem.querySelector('.tender-company');
    const tenderCompanyAdress = vacancyItem.querySelector('.tender-adress'); 


    tenderTitle=element.title;
    tenderDescription=element.description;
    tenderLink=element.link;
    tenderGrafic=element.grafic;
    tenderPay=element.pay;
    tenderDate=element.published;
    tenderCompanyLogo=element.company.logo;
    tenderCompanyName=element.company.name;
    tenderCompanyAdress=element.company.adress;

    
    //функция для вставки скилов в контейнер
    element.skills.forEach(element => {
        tenderSkillsContainer.append(tenderSkill.textContent(element));
        tenderSkill.textContent('');
    });

    return vacancyItem
}

const renderCard = function(element){
    vacancyList.prepend(element);
}