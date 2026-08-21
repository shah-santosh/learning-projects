const colorCode = document.getElementById("color-code");
const changeColorButton = document.getElementById("change-color");

function generateRandomColor() {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    color += characters[randomIndex];
  }

  return color;
}

changeColorButton.addEventListener("click", () => {
  const newColor = generateRandomColor();

  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});