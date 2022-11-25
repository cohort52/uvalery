export const initialFriends = [
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/lena-marshalova.png',
    name: 'Лена Маршалова',
    about: 'HR, профессиональный карьерный консультант и коуч.'
  },
  {
    image: '../images/megafon.png',
    name: 'Мегафон',
    about: 'Предоставит услуги связи для некоммерческих организаций.'
  }
];

export function fetchFriends(page, limit) {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(initialFriends.slice((page - 1) * limit, page * limit)),
      1000
    )
  );
}
