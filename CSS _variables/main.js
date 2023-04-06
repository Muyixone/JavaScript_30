const slider = document.getElementById('blur');
const baseColor = document.getElementById('color_picker');
const rootDom = document.querySelector(':root');

const targetImg = document.getElementById('wall_image');

// slider.oninput = function () {
//   rootDom.style.setProperty('--Blur', `blur(${this.value}px)`);
// };

window.addEventListener('input', (event) => {
  rootDom.style.setProperty('--Blur', `blur(${event.target.value}px)`);

  rootDom.style.setProperty('--base-color', `${event.target.value}`);
});
