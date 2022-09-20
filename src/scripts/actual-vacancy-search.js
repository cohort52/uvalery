const form = document.querySelector('.filter');
const errora = document.querySelector('.filter__template');
const selected = document.querySelectorAll('.actual-vacancies__select');
const inputSalary = document.querySelector('.actual-vacancies__input');
const pagination = document.querySelector('.pagination');
const error = document.querySelector('.tender__error');
function initSelectData (searchItems) {
  for (let i = 0; i < selected.length; i++) {
    if(i === 1 ){}else{searchItems[i] = selected[i].selectedOptions[0].label.toLowerCase()}
  }
}

function searchVacancies(card, event) {
  const allLi = document.querySelectorAll('.tender__li');
  event.preventDefault();
  const searchItems = [];
  searchItems[1] = selected[1].selectedOptions[0].label;
  initSelectData(searchItems);

  const cardsFinded = actualVacanciesInitialCards.filter((element)=> {
    if (element.salary >= inputSalary.value)
      if (element.grafic.includes(searchItems[0]) && element.grafic.includes(searchItems[1]) && element.grafic.includes(searchItems[2]) && element.grafic.includes(searchItems[3]))
       return element;
  });

 allLi.forEach(function(elem){
   elem.parentNode.removeChild(elem);
  });

  if (cardsFinded.length > 0) {
    errora.firstChild.remove();
      cardsFinded.forEach(renderCard);
      reloadPagination();
  }
   else {
     if (document.querySelector('.tender__error'))
     {}
     else {
       pagination.classList.remove('pagination_active')
       const noData = document.createElement("h4");
       noData.classList.add('tender__error');
       noData.textContent = 'По вашему запросу ничего не найдено, нажмите сброс и попробуйте выбрать другие данные';
       filterTemplate.prepend(noData)
     }
   }
}

form.addEventListener("submit", () => searchVacancies(actualVacanciesInitialCards, event));
