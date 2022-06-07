import apiCall from "./getapi.js";
// apiCall(wpApi);

const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=1";
const slideOne = document.querySelector(".one");
const slideTwo = document.querySelector(".two");
const slideThree = document.querySelector(".three");
const slideFour = document.querySelector(".four");
const slideFive = document.querySelector(".five");


// console.log(slides);
// Call api and create HTML
async function getApiSlides() {
  try {
    const getSlides = await apiCall(wpApi);
    for (let i = 0; i < getSlides.length; i++) {
      if (i === 0) {
        // console.log(getSlides[i].id);
        // console.log(getSlides[i]);
        slideOne.innerHTML += `<a class="slide-link" href="/projectpost.html?id=${getSlides[i].id}">
        <img class="slide-image" src="${getSlides[i].featured_media_src_url}" alt="${getSlides[i].acf.alt_text}"/>
        <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
      } else if (i === 1) {
        slideTwo.innerHTML += `<a class="slide-link" href="/projectpost.html?id=${getSlides[i].id}">
        <img class="slide-image" src="${getSlides[i].featured_media_src_url}" alt="${getSlides[i].acf.alt_text}"/>
        <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
      }else if (i === 2) {
        slideThree.innerHTML += `<a class="slide-link" href="/projectpost.html?id=${getSlides[i].id}">
        <img class="slide-image" src="${getSlides[i].featured_media_src_url}" alt="${getSlides[i].acf.alt_text}"/>
        <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
      }else if (i === 3) {
        slideFour.innerHTML += `<a class="slide-link" href="/projectpost.html?id=${getSlides[i].id}">
        <img class="slide-image" src="${getSlides[i].featured_media_src_url}" alt="${getSlides[i].acf.alt_text}"/>
        <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
      }else if (i === 4) {
        slideFive.innerHTML += `<a class="slide-link" href="/projectpost.html?id=${getSlides[i].id}">
        <img class="slide-image" src="${getSlides[i].featured_media_src_url}" alt="${getSlides[i].acf.alt_text}"/>
        <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
      }
    }
  }catch (err) {}
};
getApiSlides();

// Carousel slider
const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.children);
const slide = document.querySelectorAll(".slide");
// console.log(slides);
const slidesLen = slides.length;
// console.log(slidesLen);
const btnNext = document.getElementById("button-next");
const btnPrev = document.getElementById("button-prev");

// dot navigation
const navigation = document.querySelector(".navigation");
const dots = Array.from(navigation.children);
const dot = document.querySelectorAll(".dot");
// console.log(dots);
// const dot = document.querySelector(".dot");
let slideIndex = 0;

// next and prev buttons move
btnNext.addEventListener("click", () => {
  moveNext();
});
btnPrev.addEventListener("click", () => {
  movePrev();
});


// function to move and update dots and slides
function updateMove() {
  slide.forEach(element => {
    element.classList.remove("slide-active");
    element.classList.add("slide-hidden");
  });
  slides[slideIndex].classList.add("slide-active");
};


function updateDots() {
  dot.forEach(dot => {
    dot.classList.remove("nav-active");
    dot.classList.add("nav-hidden");
  })
  dots[slideIndex].classList.add("nav-active");
};
function moveNext() {
  if (slideIndex === slidesLen - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  updateMove();
  updateDots();
};
function movePrev() {
  if (slideIndex === 0) {
    slideIndex = slidesLen - 1;
  } else {
    slideIndex--;
  }
  updateMove();
  updateDots();
};

function autoPlay() {
  moveNext();
}
setInterval(autoPlay, 6000);






























// buttons
// const carouselBtn = document.querySelector(".carousel-btn")
// const btnNext = document.querySelector(".next");
// const btnPrev = document.querySelector(".prev");
// const loader = document.querySelector(".loader");
// const sliderBtn = document.querySelectorAll("[data-carousel-btn]");

// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0
//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })






// let counter = 0;
// setInterval(function() {
//   const activeSlide = slides.querySelector("[data-active]");
//   document.querySelector("[data-active]" + counter).checked = true;
//   counter++;
//   if (counter > 5) {
//     counter = 0;
//   }
// })




// function autoSlide() {
//   setInterval(function() {
//     document.getElementsByClassName("[data-active]" + counter).checked = true;
//     counter++;
//     if(counter > 5) {
//       counter = 1;
//     }
//   }, 1000);
// }

// autoSlide();










// sliderBtn.forEach(button => {
//   button.addEventListner("click", () => {
//     const move = button.dataset.carousel-btn === "next" ? 1 : -1;
//     const slides = button
//     .closest("[data-carousel]")
//     .querySelector("[data-slides]")
//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + move;
//     if (newIndex < 0) newIndex = slides.children.lenght - 1;
//     if (newIndex >= slides.children.lenght) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   })
  
// });

