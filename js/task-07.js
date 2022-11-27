"use strict";

const slidebar = document.querySelector("input");

const changingFontSizeElement = document.getElementById("text");

slidebar.addEventListener("input", (ev) => {
  changingFontSizeElement.style.fontSize = `${ev.currentTarget.value}px`;
});
