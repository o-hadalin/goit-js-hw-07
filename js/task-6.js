function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputPlace = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const elementField = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const inputNum = Number(inputPlace.value);
  if (inputNum >= 1 && inputNum <= 100) {
    makeBox(inputNum);
    inputPlace.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

destroyButton.addEventListener("click", destroyField);

function makeBox(inputNum) {
  elementField.innerHTML = "";
  
  const massive = [];
  for (let index = 0; index < inputNum; index++) {
    const box = document.createElement('div');
    const size = 30 + index * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    massive.push(box);
  }
  elementField.append(...massive);
}

function destroyField() {
  elementField.innerHTML = '';
}