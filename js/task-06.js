"use strict";

const input = document.querySelector("input");

const number = Number(input.dataset.length);

input.setAttribute("placeholder", `Please enter ${number} symbols`);

input.addEventListener("blur", (content) => {
  if (content.currentTarget.value.length === number) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
