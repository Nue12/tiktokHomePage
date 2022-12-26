const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const playPauseContainer = document.querySelector(".playPauseContainer");
const videos = document.querySelectorAll("video");
console.log(videos);

video1.addEventListener("click", () => playToggle(video1));
video2.addEventListener("click", () => playToggle(video2));

function playToggle(video) {
  video.paused ? video.play() : video.pause();
}

video1.addEventListener("play", () => {
  playPauseContainer.classList.remove("paused");
  playPauseContainer.style.opacity = "0";
});

video1.addEventListener("pause", () => {
  playPauseContainer.style.opacity = "1";
  playPauseContainer.classList.add("paused");
});

video2.addEventListener("play", () => {
  playPauseContainer.classList.remove("paused");
  playPauseContainer.style.opacity = "0";
});

video2.addEventListener("pause", () => {
  playPauseContainer.style.opacity = "1";
  playPauseContainer.classList.add("paused");
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  mousewheel: true,
});

swiper.on("slideChange", function () {
  videos.forEach((video) => {
    video.played && video.pause();
  });
});
