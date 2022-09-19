const resumeDataJSON = JSON.stringify({
    name: "Игорь Рождественский",
    picture: '../images/default_resume_face.jpg',
    birthday: new Date(1998, 7, 15),
    about: 'Компания "Балет с 2 лет" не просто чтит и поддерживает вековые традиции русской балетной школы, но и приносит чувство единения друг с другом всем, кто с ней связан. Работа в "Балет с 2 лет" отличается от работы с любой другой компании. Здесь Вы создаете подлинные ценности и ориентиры для детей, меняя их жизнь.',
    contacts: {
        socials: ['Vk.com/igor222', 'facebook.com/igor222', 'instagram.com/igor222'],
        tel: '8 (900) 111 - 22 -33',
        email: 'Igor222@gmail.com'
    },
    job: {
        title: 'PR менеджер',
        location: 'Москва',
        salary: 25000,
        skills: ['SMM', 'Instagram', 'Честность', 'Администратор', 'Стрессоустойчивость'],
        schedules: ['5/2', '2/2'],
        isDisabled: true,
        prevJobs: [
            {
                name: 'Фонд Живой',
                period: 'Больше 5 лет',
                desc: 'Проектирование и разработка дизайна сайтов, пользовательских веб-интерфейсов, дизайн баннеров, е-mail рассылок.'
            },
            {
                name: 'Последний адресс',
                period: '2 года',
                desc: 'Проектирование и разработка дизайна сайтов, пользовательских веб-интерфейсов, дизайн баннеров, е-mail рассылок.'
            },
            {
                name: 'Фонд Живой',
                period: '3 года',
                desc: 'Проектирование и разработка дизайна сайтов, пользовательских веб-интерфейсов, дизайн баннеров, е-mail рассылок.'
            },
        ]
    },
    info: {
        strongSides: 'Компания "Балет с 2 лет" не просто чтит и поддерживает вековые традиции русской балетной школы, но и приносит чувство единения друг с другом всем, кто с ней связан.',
        weakSides: 'Компания "Балет с 2 лет" не просто чтит и поддерживает вековые традиции русской балетной школы, но и приносит чувство единения друг с другом всем, кто с ней связан.',
        motivations: ['Путешествие', 'Еда'],
        hobbies: 'Летом велосипед и палатки, зимой сноуборд и лыжи',
    }
});
