const video = document.querySelector("video");
const playPauseContainer = document.querySelector(".playPauseContainer");
const playTag = document.querySelector(".playIcn");
const pauseTag = document.querySelector(".pauseIcn");

video.addEventListener("click", playToggle);

function playToggle() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  playPauseContainer.classList.remove("paused");
  playPauseContainer.style.opacity = "0";
});

video.addEventListener("pause", () => {
  playPauseContainer.style.opacity = "1";
  playPauseContainer.classList.add("paused");
});
