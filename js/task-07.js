"use strict";

const slidebar = document.querySelector("input");

const changingFontSizeElement = document.getElementById("text");

slidebar.addEventListener("change", (ev) => {
  changingFontSizeElement.style.fontSize = `${ev.currentTarget.value}px`;
});
