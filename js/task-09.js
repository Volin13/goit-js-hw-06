const BodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClickColorChange(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  let currentColor = getRandomHexColor();
  BodyEl.style.backgroundColor = currentColor;
  colorNameEl.textContent = "${currentColor}";
}

BodyEl.addEventListener("click", onBtnClickColorChange);
