const vacanciesElement = document.querySelector('.tender__vacancies');
const templateVacancyElement = document.querySelector('.template-vacancy');

const createVacancy = (position, duties, schedule, salary) =>{
    const vacancyElement = templateVacancyElement.content.querySelector('.tender__container-vacancy-icon').cloneNode(true);
    vacancyElement.querySelector('.tender__subtitle').textContent = position;
    vacancyElement.querySelector('.tender_description').textContent = duties;
    vacancyElement.querySelector('.tender__grafic').textContent = schedule;
    vacancyElement.querySelector('.tender__pay').textContent = salary;
    return vacancyElement;
};

const addVacancy = (position, duties, schedule, salary) =>{
    const newVacancyElement = createVacancy(position, duties, schedule, salary);
    vacanciesElement.prepend(newVacancyElement);
};

initialVacancies.forEach((item) => {
    addVacancy(item.position, item.duties, item.schedule, item.salary);
});
