"use strict";
const allCategories = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${allCategories.length}`);
const categoriesNamesAndCount = allCategories.forEach((element) => {
  console.log(
    `Category: ${element.querySelector("h2").textContent}\nElements: ${
      element.querySelector("ul").childElementCount
    }`
  );
});
