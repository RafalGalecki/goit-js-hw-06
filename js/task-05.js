"use strict";

let outputName = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    outputName.textContent = event.currentTarget.value;
  } else {
    outputName.textContent = "Anonymous";
  }
});
