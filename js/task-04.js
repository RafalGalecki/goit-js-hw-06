"use strict";
let counterValue = 0;

const plusBtn = document.querySelector("[data-action=increment]");
const minusBtn = document.querySelector("[data-action=decrement]");

plusBtn.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

// Bonus: Styles to buttons as events

plusBtn.addEventListener("mousedown", () => {
  plusBtn.style.backgroundColor = "green";
  plusBtn.style.color = "white";
});
plusBtn.addEventListener("mouseup", () => {
  plusBtn.style.backgroundColor = null;
  plusBtn.style.color = null;
});

minusBtn.addEventListener("mousedown", () => {
  minusBtn.style.backgroundColor = "red";
  minusBtn.style.color = "white";
});
minusBtn.addEventListener("mouseup", () => {
  minusBtn.style.backgroundColor = null;
  minusBtn.style.color = null;
});
