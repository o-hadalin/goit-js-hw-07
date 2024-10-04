const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameIn.addEventListener("input", () => {
  const trimmedValue = nameIn.value.trim();
  nameOut.textContent = trimmedValue || "Anonymous";
});