const friendsContainer = document.querySelector('.friends__container');
const friendTemplate = document.querySelector('#friend-template').content.querySelector('.friend');

const createFriendElement = (image, name, about) => {
  const friendElement = friendTemplate.cloneNode(true);

  const photo = friendElement.querySelector('.friend__image');
  photo.setAttribute('src', image);
  photo.setAttribute('alt', name);
  friendElement.querySelector('.friend__name').textContent = name;
  friendElement.querySelector('.friend__about').textContent = about;
  return friendElement;
}

const addFriend = (image, name, about) => {
  const createdFriend = createFriendElement(image, name, about);
  friendsContainer.prepend(createdFriend);
}

initialFriends.forEach((el) => {
  addFriend(el.image, el.name, el.about);
});
