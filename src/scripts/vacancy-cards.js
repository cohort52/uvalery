const initialVacancyCards = [
    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Жестокость','Безпринципность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender1.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PVP менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Красноречие','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'40 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender2.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'Менеджер Vip', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'3 дней назад',
    company:{logo:'../images/tender3.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    }
];

const content = document.querySelector('.page');
const sliderRow = content.querySelector('.slider__row');
const buttonLeft = content.querySelector('.slider__button-left');
const buttonRight = content.querySelector('.slider__button-right');
const vacancyTemplate = document.querySelector('#vacancy-template').content;


const createCard = function(element) {
    const vacancyItem = vacancyTemplate.querySelector('.tender__vacancy').cloneNode(true);
    const tenderTitle = vacancyItem.querySelector('.tender__subtitle');
    const tenderDescription = vacancyItem.querySelector('.tender_description');
    const tenderLink = vacancyItem.querySelector('.tender__link');
    const tenderSkillsContainer = vacancyItem.querySelector('.tender__skills'); //отдельный конетейнер вставки сюда скилов
    const tenderScheduleContainer=  vacancyItem.querySelector('.tender__schedule');//отдельный конетейнер вставки paб.графика 
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
    sliderRow.append(element);
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
};

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

function carusel(array) {

    function makeArray(array) {
    renderCard(createCard(array[array.length-1]));//рендер последнего

    array.forEach(element => {
        renderCard(createCard(element));
    });
    
    renderCard(createCard(array[0]));//рендер первого
}

makeArray(array);
const rowItems = document.querySelectorAll('.slider__element');
const rowItemWidth = rowItems[0].offsetWidth;
rowItems[1].classList.add('scale');

const offset = 174; 
const gap = 30;
const start = -rowItemWidth + offset - gap;//начальное положение: ширина карточки + смешение блока - 
const finish = - (rowItemWidth+gap)*array.length + offset;//конечное положение
//console.log(start, '##', finish);
let index = 0; 
let allowShift = true;
let posInitial;
buttonLeft.addEventListener("click", ()=>{
    movingClide(-1);
});//лево
buttonRight.addEventListener("click", ()=>{
    movingClide(1);
});//право

sliderRow.addEventListener('transitionend', checkIndex);
//карусель колесиком
sliderRow.addEventListener('wheel', movingByWheel);


function movingByWheel(e) {
    e.preventDefault();

    if(e.deltaY<0) {
        movingClide(-1);
    } else if(e.deltaY>0) movingClide(1);
}

function movingClide(dir){
    sliderRow.classList.add('moving');

    if (allowShift) {

        scaleElement(sliderRow.offsetLeft, dir); //увеличение карточки в фокусе 

        if(dir===-1) {//налево
            posInitial = sliderRow.offsetLeft;
            sliderRow.style.left = posInitial - (rowItemWidth + gap) + 'px';
            index++;
            
        } else if(dir===1) {//направо
            posInitial = sliderRow.offsetLeft;
            sliderRow.style.left = posInitial + (rowItemWidth + gap) + 'px';
            index--;
            
        }
        
        allowShift = false;
    }
}


function scaleElement(сoor,dir) {
    let i = findIndex(сoor);
    console.log(i);
    
    if (i===1&&dir===1) {//направо - краевой случай смещенния
        rowItems[1].classList.remove('scale');
        rowItems[0].classList.add('scale');
        rowItems[rowItems.length-2].classList.add('scale');
        setTimeout(()=>rowItems[0].classList.remove('scale'),500) 
    } else if(i===rowItems.length-2&&dir===-1) {//налево - краевой случай смещенния
        rowItems[rowItems.length-1].classList.add('scale');
        rowItems[rowItems.length-2].classList.remove('scale');
        rowItems[1].classList.add('scale');
        setTimeout(()=>rowItems[rowItems.length-1].classList.remove('scale'),500) 
    } else if(dir===-1){// типичный случай движения
        rowItems[i].classList.remove('scale');
        rowItems[i+1].classList.add('scale');
    } else if(dir===1) {// типичный случай движения
        rowItems[i].classList.remove('scale');
        rowItems[i-1].classList.add('scale');
    }
}

//функция опредления координаты наачала движения
function findIndex(сoor) {
    return -(сoor-offset)/(rowItemWidth + gap)
}
    

function checkIndex(e) {
    if(e.target===sliderRow) {
            sliderRow.classList.remove('moving');
        if(index===-1){
            sliderRow.style.left = finish + 'px';
            index = array.length-1;
        } else if(index===array.length){
            sliderRow.style.left = start+ 'px';
            index = 0;
        }
        allowShift = true;
    }}
}

carusel(initialVacancyCards);