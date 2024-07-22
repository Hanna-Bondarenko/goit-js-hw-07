function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  let boxesHTML = '';
  let sizeSquare = 30;
  for (let i = 0; i < amount; i++) {
    const newBoxHTML = `<div style="width: ${sizeSquare}px; height: ${sizeSquare}px; background-color: ${getRandomHexColor()}; margin: 10px;"></div>`;
    boxesHTML += newBoxHTML;
    sizeSquare += 10;
  }
  boxesContainer.innerHTML = boxesHTML;
}
function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const onButtomClick = () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
};
createButton.addEventListener('click', onButtomClick);
destroyButton.addEventListener('click', destroyBoxes);
