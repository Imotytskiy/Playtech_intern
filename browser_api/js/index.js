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

//#15 resize window change color

const onresize = function () {
  const elementTranslateClass = document.querySelector(".t99");
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  elementTranslateClass.style.backgroundColor =
    "#" + Math.floor(Math.random() * (width * height)).toString(16);
};

window.addEventListener("resize", onresize);

// #16 length input

const valueLength = document.querySelector(".t98-2");
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  valueLength.textContent = input.value.length;
});

// #17 data Jasmine
const elementButtonClass_b14 = document.querySelector(".b14");
const containerForUnstall = document.querySelector(".whores-container");

const wDiv = document.createElement("div");
wDiv.className = "whore";

const wNameDiv = document.createElement("div");
wNameDiv.className = "whore-name";
wNameDiv.textContent = jasmine.name;

const wImage = document.createElement("img");
wImage.src = jasmine.photo;
wImage.width = "200";

const wAgeDiv = document.createElement("div");
wAgeDiv.className = "whore-age";
wAgeDiv.textContent = `Возраст: ${jasmine.photo}`;

const wBoobsDiv = document.createElement("div");
wBoobsDiv.className = "whore-boobs";
wBoobsDiv.textContent = `Размер : ${jasmine.boobs}`;

const wHeightDiv = document.createElement("div");
wHeightDiv.className = "whore-height";
wHeightDiv.textContent = `Рост: ${jasmine.weight}`;

const wWeightDiv = document.createElement("div");
wWeightDiv.className = "whore-weight";
wWeightDiv.textContent = `Вес : ${jasmine.weight}`;

const wPhoneDiv = document.createElement("div");
wPhoneDiv.className = "whore-phone";
wPhoneDiv.textContent = jasmine.phone;

const wCanComeDiv = document.createElement("div");
wCanComeDiv.className = "whore-can-come";
wCanComeDiv.textContent = `Выезд : ${jasmine.can_come === true ? "+" : "-"}`;

const wTeaserDiv = document.createElement("div");
wTeaserDiv.className = "whore-teaser";
wTeaserDiv.textContent = `${jasmine.teaser}`;
function addNewCard() {
  containerForUnstall.appendChild(wDiv);
  wDiv.appendChild(wNameDiv);
  wDiv.appendChild(wImage);
  wDiv.appendChild(wAgeDiv);
  wDiv.appendChild(wBoobsDiv);
  wDiv.appendChild(wHeightDiv);
  wDiv.appendChild(wWeightDiv);
  wDiv.appendChild(wPhoneDiv);
  wDiv.appendChild(wCanComeDiv);
  wDiv.appendChild(wTeaserDiv);
}

elementButtonClass_b14.addEventListener("click", addNewCard);

// #18 toogle for fish
const elementButtonClass_b15 = document.querySelector(".b15");

function changeCatFish() {
  const fishImage1 = document.querySelector(".cat-container-1 .fish");
  const fishImage2 = document.querySelector(".cat-container-2 .fish");
  const catContainer1 = document.querySelector(".cat-container-1");
  const catContainer2 = document.querySelector(".cat-container-2");

  if (fishImage1 && catContainer2) {
    fishImage1.remove();
    catContainer2.appendChild(fishImage1);
  }
  catContainer1.appendChild(fishImage2);
}

elementButtonClass_b15.addEventListener("click", changeCatFish);

// #19 remove teeth
const elementButtonClass_b16 = document.querySelector(".b16");

const tooth = document.querySelector(".tooth");

function removeTooth() {
  const tooth = document.querySelector(".tooth");
  if (tooth) {
    tooth.remove();
  }
}

elementButtonClass_b16.addEventListener("click", removeTooth);

// #20 skier
const elementButtonClass_b17 = document.querySelector(".b17");
const elementButtonClass_b17_2 = document.querySelector(".b17-2");

const elementToShift = document.querySelector(".skier");
let currentPosition = 0;
let intervalId = 0;

function shiftSkier() {
  currentPosition += 5;

  elementToShift.style.transform = `translateX(${currentPosition}px) scaleX(-1)`;
}

elementButtonClass_b17.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(shiftSkier, 16);
});

elementButtonClass_b17_2.addEventListener("click", () => {
  clearInterval(intervalId);
  currentPosition = 0;
});

// #21  write mikki from array

const mikkiMap = document.querySelector(".mikki_tiles");

mikki.forEach((row) => {
  for (let char of row) {
    if (char === " ") {
      const cellElement = document.createElement("div");
      cellElement.className = "mikki_tile";
      mikkiMap.appendChild(cellElement);
    } else {
      {
        const cellElement = document.createElement("div");
        cellElement.className = "mikki_tile";
        cellElement.style.backgroundColor = "#000";
        mikkiMap.appendChild(cellElement);
      }
    }
  }
});

// super Mario
const elementButtonClass_b18 = document.querySelector(".b18");
const superMarioMap = document.querySelector(".scene");
let x = 0;
let y = 0;

function buildMarioWorld() {
  map.forEach((row) => {
    for (let char of row) {
      if (char === " ") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "z") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_z";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "k") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_k";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "c") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_c";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "t") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_t";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "g") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_g";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "b") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_b";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "d") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_d";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      if (char === "w") {
        const cellElement = document.createElement("div");
        cellElement.className = "tile x_w";
        cellElement.style.left = x + "px";
        cellElement.style.top = y + "px";
        superMarioMap.appendChild(cellElement);
      }
      x += 16;
    }
    x = 0;
    y += 16;
  });
}
elementButtonClass_b18.addEventListener("click", buildMarioWorld);

// caurusel

const elementButtonClass_next = document.querySelector(".next");
const elementButtonClass_previous = document.querySelector(".previous");
const slide = document.querySelectorAll(".slide");
let position = 0;

elementButtonClass_next.addEventListener("click", () => {
  slide[position].classList.remove("active");
  position++;

  if (position >= slide.length) {
    position = 0;
  }

  slide[position].classList.add("active");
});

elementButtonClass_previous.addEventListener("click", () => {
  slide[position].classList.remove("active");

  position--;

  if (position < 0) {
    position = slide.length - 1;
  }
  slide[position].classList.add("active");
});

// accordion

const dtElements = document.querySelectorAll("dt");

dtElements.forEach((dt) => {
  dt.addEventListener("click", (event) => {
    dtElements.forEach((dt) => {
      dt.classList.remove("active");
    });
    dt.classList.add("active");
  });
});

// tabs
const todayTab = document.querySelector('[data-tab="today"]');
const tomorrowTab = document.querySelector('[data-tab="tomorrow"]');
const dayTab = document.querySelector('[data-tab="23d"]');

function active(someDay) {
  const delActive = document.querySelectorAll(".item");
  delActive.forEach((element) => {
    element.classList.remove("active");
  });
  const dataTabValue = someDay.getAttribute("data-tab");
  const addActive = document.querySelectorAll(
    `.item[data-tab="${dataTabValue}"]`
  );
  addActive.forEach((element) => {
    element.classList.add("active");
  });
}

todayTab.addEventListener("click", function () {
  active(todayTab);
});

tomorrowTab.addEventListener("click", function () {
  active(tomorrowTab);
});

dayTab.addEventListener("click", function () {
  active(dayTab);
});

//  pop_up task

const elementButtonClass_overlay = document.querySelector(".overlay");
const elementButtonClass_pop_up = document.querySelector(".pop-up");
const elementButtonClass_login = document.querySelector(".show-login-pop-up");
const elementButtonClass_close = document.querySelector(".close");

function showPop_up() {
  elementButtonClass_overlay.classList.remove("hidden");
  elementButtonClass_pop_up.classList.remove("hidden");
}

function closePop_up() {
  elementButtonClass_overlay.classList.add("hidden");
  elementButtonClass_pop_up.classList.add("hidden");
}

elementButtonClass_login.addEventListener("click", showPop_up);
elementButtonClass_close.addEventListener("click", closePop_up);

//  prevent default
const elementButtonLink = document.querySelector(".link-ebanoe");

elementButtonLink.addEventListener("click", (event) => {
  event.preventDefault();
});

// last remove ad

const elementButtonClass_b97 = document.querySelector(".b97");
const elementButtonClass_t97 = document.querySelector(".t97");
if (localStorage.getItem("Ad") === "None") {
  elementButtonClass_t97.style.display = "none";
}

elementButtonClass_b97.addEventListener("click", () => {
  localStorage.setItem("Ad", "None");
  elementButtonClass_t97.style.display = "none";
});
