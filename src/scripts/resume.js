const resumeSelectorsConfig = {
    resumeTemplate: '#resume',
    resume: '.resume',
    salary: '.resume__salary',
    title: '.resume__title',
    picture: '.resume__picture',
    location: '.resume__location',
    age: '.resume__age',
    schedules: '.resume__schedules',
    additionalInfoItems: '.resume__additional-info-list',
    workExperiencesList: '.resume__work-experience-list',
    workExperienceItemTemplate: '#resume__work-experience-item',
    workExperienceItem: '.resume__work-experience-item',
    prevJobName: '.resume__prev-job-name',
    prevJobTime: '.resume__prev-job-time',
    prevJobDescription: '.resume__prev-job-description',
    weakSidesText: '.resume__cons-text',
    strongSidesText: '.resume__pros-text',
    skillsList: '.resume__skills-list',
    motivationsList: '.resume__motivation-list',
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
            return Date.parse(value);
        }

        return value;
    })

    return data;
}

function makeResumeSection(data) {
    const resumeSectionNode = document.querySelector('#resume').content.querySelector('.resume').cloneNode(true);

    // const { name, birthday, about, contacts, job, info } = data;

    return resumeSectionNode;
}

function addResumeToPage() {
    const main = document.querySelector('.main');
    main.append(makeResumeSection());
}

addResumeToPage();
