"use strict";

const btnChangeColor = document.querySelector("button.change-color");

const body = document.querySelector("body");

const spanHexColorValue = document.querySelector("span.color");

btnChangeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  body.style.backgroundColor = bgColor;
  spanHexColorValue.textContent = bgColor;
}
