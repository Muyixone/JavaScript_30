const rootDom = document.querySelector(':root');
const blur = document.getElementById('blur');
const baseColor = document.getElementById('color_picker');
const borderSpacing = document.getElementById('spacing');

function blurItem(event) {
  rootDom.style.setProperty('--Blur', `blur(${event.target.value}px)`);
}

blur.addEventListener('input', blurItem);

baseColor.addEventListener('input', (e) => {
  rootDom.style.setProperty('--base-color', `${e.target.value}`);
});

borderSpacing.addEventListener('input', (e) => {
  rootDom.style.setProperty('--spacing', `${e.target.value}px`);
});
