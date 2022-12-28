const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const playPauseContainer1 = document.querySelector(".playPause1");
const playPauseContainer2 = document.querySelector(".playPause2");
const videos = document.querySelectorAll("video");

const parent1 = playPauseContainer1.parentNode;
console.log(parent1.lastElementChild);

video1.addEventListener("click", () => playToggle(video1));
playPauseContainer1.addEventListener("click", () => playToggle(video1));
video2.addEventListener("click", () => playToggle(video2));
playPauseContainer2.addEventListener("click", () => playToggle(video2));

function playToggle(video) {
  video.paused ? video.play() : video.pause();
}

video1.addEventListener("play", () => {
  playPauseContainer1.classList.remove("paused");
  playPauseContainer1.style.opacity = "0";
});

video1.addEventListener("pause", () => {
  playPauseContainer1.style.opacity = "1";
  playPauseContainer1.classList.add("paused");
});

video2.addEventListener("play", () => {
  playPauseContainer2.classList.remove("paused");
  playPauseContainer2.style.opacity = "0";
});

video2.addEventListener("pause", () => {
  playPauseContainer2.style.opacity = "1";
  playPauseContainer2.classList.add("paused");
});

// swiper initializing

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  mousewheel: true,
});

// listen event on changes of slide

swiper.on("slideChange", function () {
  videos.forEach((video) => {
    video.played && video.pause();
  });
});
