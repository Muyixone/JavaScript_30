const rootDom = document.querySelector(':root');
const blur = document.getElementById('blur');
const baseColor = document.getElementById('color_picker');
const borderSpacing = document.getElementById('spacing');

const targetImg = document.getElementById('wall_image');

function blurItem(event) {
  rootDom.style.setProperty('--Blur', `blur(${event.target.value}px)`);
  rootDom.style.setProperty('--base-color', `${event.target.value}`);
}

blur.addEventListener('input', blurItem);
baseColor.addEventListener('input', blurItem);
borderSpacing.addEventListener('input', (e) => {
  rootDom.style.setProperty('--spacing', `${e.target.value}px`);
});
