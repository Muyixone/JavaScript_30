const keys = document.getElementById('keys');
const mainContainer = document.getElementById('outer_container');
function playAudio(event) {
  // Used event.key instead of event.keycode because the later
  // is deprecated in javascript
  const audioKeyToUpper = event.key.toUpperCase();
  const audio = document.querySelector(`audio[data-key="${audioKeyToUpper}"]`);
  const key = document.querySelector(`.key[data-key="${audioKeyToUpper}"]`);

  if (!audio) return;

  // Make audio repeatable when key is pressed multiple times
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

// window.addEventListener('click', (e) => {
//   if (e.target === keys) {
//     return console.log('heya');
//   }

//   if (e.target.tagName == 'KBD') {
//     const audioKey = e.target.textContent;
//   }
// });

window.addEventListener('keydown', playAudio);

window.addEventListener('keyup', removePlayingClass);

// document.addEventListener('click', (e) => {
//   const key = document.querySelector(`audio[data-key="${e.target.innerHTML}"]`);

//   const outsideClick = !elem.contains(e.target.innerHTML);

//   console.log(outsideClick);
// });
