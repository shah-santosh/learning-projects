let count = 0;

// const countElement = document.getElementById("count");
// const increaseButton = document.getElementById("increase");
// const decreaseButton = document.getElementById("decrease");


const countElement = document.getElementById("count");
const increaseElement = document.getElementById("increase");
const decreaseElement = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseElement.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
})

decreaseElement.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
})

resetButton.addEventListener("click", () => {
  count = 0;
  countElement.textContent = count;
})








// const resetButton = document.getElementById("reset");

// increaseButton.addEventListener("click", () => {
//   count++;
//   countElement.textContent = count;
// });

// decreaseButton.addEventListener("click", () => {
//   count--;
//   countElement.textContent = count;
// });

// resetButton.addEventListener("click", () => {
//   count = 0;
//   countElement.textContent = count;
// });