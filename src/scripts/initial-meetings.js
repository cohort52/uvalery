import { fetchVideos } from "./data/important-meetings-video-data.js";

class VideoCard {
  constructor(data) {
    this._url = data.url;
    this._title = data.title;
    this._type = data.type;
    this._poster = data.poster;
  }

  _getTemplate() {
    return document
      .querySelector(".video-template")
      .content.querySelector(".videocards__item")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".videocards__url").src = this._url;
    this._element.querySelector(".videocards__title").textContent = this._name;
    this._element.querySelector(".videocards__url").type = this._type;
    this._element.querySelector(".videocards__video").setAttribute("poster", this._poster);

    return this._element;
  }
}

const videoContainer = document.querySelector(
  ".important-meetings__videocards"
);
const markerElement = document.querySelector('.important-meetings__marker');
let currentPage = 1;
let isLoading = false;

async function  renderVideos(limit) {
  markerElement.classList.add('important-meetings__marker_visible')
  isLoading = true
  const videos = await fetchVideos(currentPage, limit)
  if(videos.length > 0) {
    videos.forEach((data) => {
      const video = new VideoCard(data)
      videoContainer.append(video.generateCard());
    });
    currentPage += 1;
  }
  markerElement.classList.remove('important-meetings__marker_visible')
  isLoading = false
};

const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  if(!isLoading)
    renderVideos(Math.floor(window.innerHeight / 280) * 2);
},{ threshold: 0, rootMargin: "0px" });

intersectionObserver.observe(markerElement);
