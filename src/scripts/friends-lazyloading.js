import { fetchFriends } from "./friends-cards.js";

class FriendCard {

  constructor(data) {

    this._image = data.image;

    this._name = data.name;

    this._about = data.about;

  }




  _getTemplate() {

    return document

      .querySelector("#friend-template")

      .content.querySelector(".friend")

      .cloneNode(true);

  }




  generateCard() {

    this._element = this._getTemplate();




    this._element.querySelector(".friend__image").src = this._image;

    this._element.querySelector(".friend__name").textContent = this._name;

    this._element.querySelector(".friend__about").textContent = this._about;

    return this._element;

  }

}




const friendsContainer = document.querySelector(

  ".friends__container"

);

const markerElement = document.querySelector('.friends__check-block');

let currentPage = 1;

let isLoading = false;




async function getContent(limit) {
  markerElement.classList.add('friends__check-block_visible')

  isLoading = true

  const friends = await fetchFriends(currentPage, limit)

  if(friends.length > 0) {

    friends.forEach((data) => {

      const friend = new FriendCard(data)

      friendsContainer.append(friend.generateCard());

    });

    currentPage += 1;

  }
  else {
    intersectionObserver.unobserve(markerElement);
  }
  markerElement.classList.remove('friends__check-block_visible')
  isLoading = false

};




const intersectionObserver = new IntersectionObserver((entries) => {

  if (entries[0].intersectionRatio <= 0) return;

  if(!isLoading)

    getContent(Math.floor(window.innerHeight / 388) * 4);

},{ threshold: 0, rootMargin: "0px" });




intersectionObserver.observe(markerElement);
