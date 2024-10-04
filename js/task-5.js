function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const colorBack = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const diffColor = getRandomHexColor();
  document.body.style.backgroundColor = diffColor;
  colorBack.textContent = diffColor;
});