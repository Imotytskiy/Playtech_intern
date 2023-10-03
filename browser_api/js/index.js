// Write your code here
console.log("Hello world!");

// 1# Change text color
const elementClass_t1 = document.querySelector(".t1");
const elementButtonClass_b1 = document.querySelector(".b1");

function changeTextColor() {
  elementClass_t1.style.color = "blue";
}

elementButtonClass_b1.addEventListener("click", changeTextColor);

// 2# Change background color

const elementClass_t2 = document.querySelector(".t2");
const elementButtonClass_b2 = document.querySelector(".b2");

function changeBackgroundColor() {
  elementClass_t2.style.backgroundColor = "blue";
}

elementButtonClass_b2.addEventListener("click", changeBackgroundColor);
