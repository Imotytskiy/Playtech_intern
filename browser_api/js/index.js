// Write your code here
console.log("Hello world!");

// #1 Change text color
const elementClass_t1 = document.querySelector(".t1");
const elementButtonClass_b1 = document.querySelector(".b1");

function changeTextColor() {
  elementClass_t1.style.color = "blue";
}

elementButtonClass_b1.addEventListener("click", changeTextColor);

// #2 Change background color

const elementClass_t2 = document.querySelector(".t2");
const elementButtonClass_b2 = document.querySelector(".b2");

function changeBackgroundColor() {
  elementClass_t2.style.backgroundColor = "blue";
}

elementButtonClass_b2.addEventListener("click", changeBackgroundColor);

// #4 Change path to link

const elementWithHref = document.querySelector(
  'a[href="https://habrahabr.ru/"]'
);
const elementButtonClass_b3 = document.querySelector(".b3");

function changePathToLink() {
  elementWithHref.href =
    "https://www.playtech.com/careers/our-locations/kiev-office";
}

elementButtonClass_b3.addEventListener("click", changePathToLink);

// #5 Change path to image

const elementWithSrc = document.querySelector('img[src="images/kaktus.jpg"]');
const elementButtonClass_b4 = document.querySelector(".b4");

function changePathToImg() {
  elementWithSrc.src = "images/bro.jpg";
}

elementButtonClass_b4.addEventListener("click", changePathToImg);

//#6 Change id

let element = document.getElementById("ab");
const elementButtonClass_b5 = document.querySelector(".b5");

function changeId() {
  element.id = "abc";
}

elementButtonClass_b5.addEventListener("click", changeId);

//#7 Change text
const elementWithText = document.querySelector(".t6");
const elementButtonClass_b6 = document.querySelector(".b6");

function changeText() {
  elementWithText.textContent = "new TEXT";
}

elementButtonClass_b6.addEventListener("click", changeText);
