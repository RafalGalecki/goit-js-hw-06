"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

const userLoginData = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  userLoginData.email = email.value;
  userLoginData.password = password.value;
  console.log(userLoginData);
  event.currentTarget.reset();
}
