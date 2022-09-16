const resumeSelectorsConfig = {
  resumeTemplate: '#resume',
  prevJobTemplate: '#prev-job',
  motivationTemplate: '#motivation-item',
  resume: '.resume',
  about: '.resume__about',
  name: '.resume__name',
  salary: '.resume__salary',
  title: '.resume__title',
  picture: '.resume__picture',
  location: '.resume__location',
  age: '.resume__age',
  schedules: '.resume__schedules',
  additionalInfoItems: '.resume__additional-info-list',
  additionalInfoContainer: '.resume__additional-info-container',
  workExperiencesList: '.resume__work-experience-list',
  workExperienceItemTemplate: '#resume__work-experience-item',
  workExperienceItem: '.resume__work-experience-item',
  prevJobItem: '.resume__work-experience-item',
  prevJobName: '.resume__prev-job-name',
  prevJobTime: '.resume__prev-job-time',
  prevJobDescription: '.resume__prev-job-description',
  weakSidesText: '.resume__cons-text',
  strongSidesText: '.resume__pros-text',
  skillsList: '.resume__skills-list',
  motivationsList: '.resume__motivation-list',
  motivationItem: '.resume__motivation-item',
  hobbies: '.resume__hobbies-text'
};

const resumeClassesConfig = {
  scheduleItem: 'resume__schedule',
  additionalInfoItemsElement: 'resume__additional-info-element',
  skillsItem: 'resume__skill'
};

function fetchResumeData() {
  const data = JSON.parse(resumeDataJSON, (key, value) => {
    if (key === 'birthday') {
      return new Date(Date.parse(value));
    }

    return value;
  })

  // this is wrong and just an approximation
  data.age = new Date(Date.now()).getFullYear() - data.birthday.getFullYear();

  return data;
}

function getYearWord(number) {
  number %= 10;

  if (number === 1) {
    return 'год';
  }

  if (number > 1 && number < 5) {
    return 'года';
  }

  if (number === 0 || number >= 5) {
    return 'лет';
  }

  throw Error("couldn't get year word");
}

function makeResumeSection(data, selectors, classes) {
  const resume = document.querySelector('#resume').content.querySelector('.resume').cloneNode(true);

  const { name, age, about, contacts, job, info, picture } = data;

  // job
  resume.querySelector(selectors.salary).textContent = job.salary.toString() + ' руб.';

  // title
  resume.querySelector(selectors.title).textContent = job.title;

  // picture
  resume.querySelector(selectors.picture).src = picture;

  // name
  resume.querySelector(selectors.name).textContent = name;

  // location
  resume.querySelector(selectors.location).textContent = job.location;

  // age
  resume.querySelector(selectors.age).textContent = age.toString() + ' ' + getYearWord(age) + '.';

  // schedule
  const schedules = resume.querySelector(selectors.schedules);
  job.schedules.forEach(schedule => {
    const newSchedule = document.createElement('li');
    const checkMark = document.createElement('span')
    checkMark.classList.add('resume__checkmark');
    newSchedule.classList.add(classes.scheduleItem);
    newSchedule.textContent = schedule;
    schedules.append(newSchedule);
    newSchedule.prepend(checkMark);
  })

  // additional info
  const additionalInfo = resume.querySelector(selectors.additionalInfoItems);
  if (job.isDisabled) {
    additionalInfo.innerHTML = '<li class="resume__additional-info-element resume__subtext">Имеется инвалидность</li>';
  } else {
    additionalInfo.closest(selectors.additionalInfoContainer).remove();
  }

  // about
  resume.querySelector(selectors.about).textContent = about;

  // previous jobs
  const prevJobContainer = resume.querySelector(selectors.workExperiencesList);

  const prevJobTemplate = document.querySelector(selectors.prevJobTemplate);

  job.prevJobs.forEach(prevJobData => {
    const prevJobItem = prevJobTemplate.content.querySelector(selectors.prevJobItem).cloneNode(true);
    prevJobItem.querySelector(selectors.prevJobName).textContent = prevJobData.name;
    prevJobItem.querySelector(selectors.prevJobTime).textContent = '(' + prevJobData.period + ')';
    prevJobItem.querySelector(selectors.prevJobDescription).textContent = prevJobData.desc;
    prevJobContainer.append(prevJobItem);
  });

  // strong/weak sides
  resume.querySelector(selectors.strongSidesText).textContent = info.strongSides;
  resume.querySelector(selectors.weakSidesText).textContent = info.weakSides;

  // skills
  const skillsContainer = resume.querySelector(selectors.skillsList);
  job.skills.forEach(skill => {
    const newSkill = document.createElement('li');
    newSkill.classList.add(classes.skillsItem);
    newSkill.textContent = skill;
    skillsContainer.append(newSkill);
  })

  // motivations
  const motivationsContainer = resume.querySelector(selectors.motivationsList);
  const motivationItemTemplate = document.querySelector(selectors.motivationTemplate);
  info.motivations.forEach(motivationText => {
    const newMotivation = motivationItemTemplate.content.querySelector(selectors.motivationItem).cloneNode(true);
    newMotivation.append(motivationText);
    motivationsContainer.append(newMotivation);
  })

  // hobby
  resume.querySelector(selectors.hobbies).textContent = info.hobbies;

  return resume;
}

function addResumeToPage() {
  const main = document.querySelector('.main');
  main.append(makeResumeSection(fetchResumeData(), resumeSelectorsConfig, resumeClassesConfig));
}

addResumeToPage();
