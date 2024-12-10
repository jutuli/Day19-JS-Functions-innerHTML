const mainHeadline = document.querySelector("h1");
const bodyBackground = document.querySelector("body");

function changeColors(firstColor, secondColor) {
  mainHeadline.style.color = firstColor;
  bodyBackground.style.backgroundColor = secondColor;
}
