"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listOfImages = document.querySelector("ul.gallery");
const imagesToUl = images
  .map(
    (image) =>
      `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"/></li>`
  )
  .join("");
listOfImages.insertAdjacentHTML("beforeend", imagesToUl);

// adding styles

const bodyGlobalStyle = document.querySelector("body");

const link = document.querySelector("a");

const liItem = document.querySelectorAll("li");

const img = document.querySelectorAll("img.gallery__img");

bodyGlobalStyle.style.backgroundColor = "lightgrey";
bodyGlobalStyle.style.maxWidth = "1200px";
bodyGlobalStyle.style.margin = "0 auto";
bodyGlobalStyle.style.fontSize = "24px";

link.style.textDecoration = "none";
link.style.color = "grey";
link.style.marginLeft = "20px";

listOfImages.style.listStyleType = "none";
listOfImages.style.display = "flex";
listOfImages.style.justifyContent = "center";
listOfImages.style.alignItems = "center";
listOfImages.style.flexDirection = "row";
listOfImages.style.flexWrap = "wrap";
listOfImages.style.gap = "30px";
listOfImages.style.margin = "20px";
listOfImages.style.padding = "0";

liItem.forEach((el) => {
  el.style.flexBasis = "calc((100% - 30px * 2) / 3)";
  el.style.height = "240px";
  el.style.width = "340px";
  el.style.border = "none";
});

img.forEach((el) => {
  el.style.display = "block";
  el.style.width = "100%";
  el.style.height = "100%";
  el.style.objectFit = "cover";
  el.style.boxShadow =
    "0px 3px 6px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.2)";
  el.style.borderRadius = "8px";
});
console.log(document.firstChild);
