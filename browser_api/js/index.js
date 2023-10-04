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

// #3 Change path to link

const elementWithHref = document.querySelector(
  'a[href="https://habrahabr.ru/"]'
);
const elementButtonClass_b3 = document.querySelector(".b3");

function changePathToLink() {
  elementWithHref.href =
    "https://www.playtech.com/careers/our-locations/kiev-office";
}

elementButtonClass_b3.addEventListener("click", changePathToLink);

// #4 Change path to image

const elementWithSrc = document.querySelector('img[src="images/kaktus.jpg"]');
const elementButtonClass_b4 = document.querySelector(".b4");

function changePathToImg() {
  elementWithSrc.src = "images/bro.jpg";
}

elementButtonClass_b4.addEventListener("click", changePathToImg);

//#5 Change id

let element = document.getElementById("ab");
const elementButtonClass_b5 = document.querySelector(".b5");

function changeId() {
  element.id = "abc";
}

elementButtonClass_b5.addEventListener("click", changeId);

//#6 Change text

const elementWithText = document.querySelector(".t6");
const elementButtonClass_b6 = document.querySelector(".b6");

function changeText() {
  elementWithText.textContent = "new TEXT";
}

elementButtonClass_b6.addEventListener("click", changeText);

//#7 Change HTML

const elementChangeHTML = document.querySelector(".t7");
const elementButtonClass_b7 = document.querySelector(".b7");

function changeHTML() {
  elementChangeHTML.innerHTML = "Измененное содержимое";
}

elementButtonClass_b7.addEventListener("click", changeHTML);

//#8 Change font-size

const elementChangeFontSize = document.querySelector(".t8");
const elementButtonClass_b8 = document.querySelector(".b8");

function changeFontSize() {
  elementChangeFontSize.style.fontSize = "36px";
}
elementButtonClass_b8.addEventListener("click", changeFontSize);

// #9 add class "hi"

const elementAddClass = document.querySelector(".t9");
const elementButtonClass_b9 = document.querySelector(".b9");

function addClass() {
  elementAddClass.className = "hi";
}
elementButtonClass_b9.addEventListener("click", addClass);

// #10 remove class "hi"

const elementRemoveClass = document.querySelector(".t10");
const elementButtonClass_b10 = document.querySelector(".b10");

function removeClass() {
  elementRemoveClass.classList.remove("hi");
}
elementButtonClass_b10.addEventListener("click", removeClass);

// #11 toggle hi

const elementToggleClass = document.querySelector(".t11");
const elementButtonClass_b11 = document.querySelector(".b11");

function toggleClass() {
  elementToggleClass.classList.toggle("hi");
}
elementButtonClass_b11.addEventListener("click", toggleClass);

//#12 attr class element target

const elementDom = document.querySelector(".t12");

document.addEventListener("click", function (event) {
  elementDom.textContent = event.target.classList;
});

//#14 translate

const elementTranslateClass = document.querySelector(".t13");
const elementButtonClass_b13 = document.querySelector(".b13");

function TranslateClass() {
  elementTranslateClass.textContent =
    elementTranslateClass.getAttribute("data-en");
}
elementButtonClass_b13.addEventListener("click", TranslateClass);
