function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorButtom = document.querySelector('.change-color');
const textColorSpan = document.querySelector('.color');
console.log(document.querySelector('.color'));
const onButtomClick = () => {
  const newColorButom = getRandomHexColor();
  document.body.style.backgroundColor = newColorButom;
  textColorSpan.textContent = newColorButom;
};

changeColorButtom.addEventListener('click', onButtomClick);
