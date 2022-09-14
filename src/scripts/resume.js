const resumeSelectorsConfig = {
    template: '#resume',
    resume: '.resume',
    salary: '.resume__salary',
    title: '.resume__title',
    picture: '.resume__picture',
    location: '.resume__location',
    age: '.resume__age',
    schedules: '.resume__schedules',
    additionalInfoItems: '.resume__additional-info-list',
    workExperiencesList: '.resume__work-experience-list',
};

const resumeClassesConfig = {
    scheduleItem: 'resume__schedule',
    additionalInfoItemsElement: 'resume__additional-info-element'
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
    const resumeSectionNode = document.querySelector('#resume').textContent.querySelector('.resume').cloneNode(true);

    const { name, birthday, about, contacts, job, info } = data;
}
