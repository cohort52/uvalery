import { initialVideo } from './data/important-meetings-video-data.js';

const videoTemplate = document.querySelector('#videoTemplate').content;
const videoContainer = document.querySelector('.important-meetings__videocards');

const addVideo = function (clip) {
  videoContainer.prepend(clip);
}

const createVideoCard = function (videoData) {
  const videoItem = videoTemplate.querySelector('.videocards__item').cloneNode(true);
  videoItem.querySelector('.videocards__url').src = videoData.url;
  videoItem.querySelector('.videocards__title').textContent = videoData.name;
  videoItem.querySelector('.videocards__url').type = videoData.type;
  return videoItem;
};

const initVideo = function (clips) {
  clips.forEach(function (clip) {
    addVideo(createVideoCard(clip));
  });
}

initVideo(initialVideo);

