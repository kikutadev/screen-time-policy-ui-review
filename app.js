const video = document.querySelector('#review-video');
const buttons = document.querySelectorAll('[data-speed]');
buttons.forEach((button) => button.addEventListener('click', () => {
  const speed = Number(button.dataset.speed);
  video.playbackRate = speed;
  buttons.forEach((item) => item.classList.toggle('active', item === button));
}));
