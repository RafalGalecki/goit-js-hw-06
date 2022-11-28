"use strict";

const box = document.getElementById("boxes");

const input = document.querySelector("input");
const creationBtn = document.querySelector("[data-create");
const destructionBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;

input.addEventListener("input", (ev) => {
  amount = Number(ev.currentTarget.value);
});

creationBtn.addEventListener("click", createBoxes);
destructionBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    box.append(newBox);
    let sizer = 20 + i * 10;
    newBox.style.width = `${sizer}px`;
    newBox.style.height = `${sizer}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add("marker");
  }
}

function destroyBoxes() {
  for (let i = 1; i <= amount; i++) {
    const newBox = document.querySelector(".marker");
    newBox.remove();
  }
  input.value = 0;
}
