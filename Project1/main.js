function playAudio(event) {
  // Used event.key instead of event.keycode because the later
  // is deprecated in javascript
  const audioKeyToUpper = event.key.toUpperCase();
  const audio = document.querySelector(`audio[data-key="${audioKeyToUpper}"]`);
  const key = document.querySelector(`.key[data-key="${audioKeyToUpper}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removePlayingClass(event) {
  const audioKeyToUpper = event.key.toUpperCase();
  const key = document.querySelector(`.key[data-key="${audioKeyToUpper}"]`);

  if (!key) return;

  key.classList.remove('playing');
}

window.addEventListener('keydown', playAudio);

window.addEventListener('keyup', removePlayingClass);
