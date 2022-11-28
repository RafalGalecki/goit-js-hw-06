"use strict";

const slidebar = document.querySelector("input");
slidebar.value = 16;

const changingFontSizeElement = document.getElementById("text");

slidebar.addEventListener("input", (ev) => {
  changingFontSizeElement.style.fontSize = `${ev.currentTarget.value}px`;
});
