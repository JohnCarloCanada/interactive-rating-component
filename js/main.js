const ratingBtn1 = document.querySelector(".rating__button:nth-child(1)");
const ratingBtn2 = document.querySelector(".rating__button:nth-child(2)");
const ratingBtn3 = document.querySelector(".rating__button:nth-child(3)");
const ratingBtn4 = document.querySelector(".rating__button:nth-child(4)");
const ratingBtn5 = document.querySelector(".rating__button:nth-child(5)");
const submitBtn = document.querySelector(".card__submit");
const tySection = document.querySelector(".thankyou__section");
const rating = document.querySelector("#rating");

ratingBtn1.addEventListener("click", () => {
  // Style Removing
  ratingBtn2.classList.remove("rating__btn__active__style");
  ratingBtn3.classList.remove("rating__btn__active__style");
  ratingBtn4.classList.remove("rating__btn__active__style");
  ratingBtn5.classList.remove("rating__btn__active__style");
  // Style Adding
  ratingBtn1.classList.add("rating__btn__active__style");
});

ratingBtn2.addEventListener("click", () => {
  // Style Removing
  ratingBtn1.classList.remove("rating__btn__active__style");
  ratingBtn3.classList.remove("rating__btn__active__style");
  ratingBtn4.classList.remove("rating__btn__active__style");
  ratingBtn5.classList.remove("rating__btn__active__style");
  // Style Adding
  ratingBtn2.classList.add("rating__btn__active__style");
});
ratingBtn3.addEventListener("click", () => {
  // Style Removing
  ratingBtn2.classList.remove("rating__btn__active__style");
  ratingBtn1.classList.remove("rating__btn__active__style");
  ratingBtn4.classList.remove("rating__btn__active__style");
  ratingBtn5.classList.remove("rating__btn__active__style");
  // Style Adding
  ratingBtn3.classList.add("rating__btn__active__style");
});

ratingBtn4.addEventListener("click", () => {
  // Style Removing
  ratingBtn2.classList.remove("rating__btn__active__style");
  ratingBtn3.classList.remove("rating__btn__active__style");
  ratingBtn1.classList.remove("rating__btn__active__style");
  ratingBtn5.classList.remove("rating__btn__active__style");
  // Style Adding
  ratingBtn4.classList.add("rating__btn__active__style");
});
ratingBtn5.addEventListener("click", () => {
  // Style Removing
  ratingBtn2.classList.remove("rating__btn__active__style");
  ratingBtn3.classList.remove("rating__btn__active__style");
  ratingBtn4.classList.remove("rating__btn__active__style");
  ratingBtn1.classList.remove("rating__btn__active__style");
  // Style Adding
  ratingBtn5.classList.add("rating__btn__active__style");
});

submitBtn.addEventListener("click", () => {
  if (ratingBtn1.classList.contains("rating__btn__active__style")) {
    rating.innerHTML = "1";
  } else if (ratingBtn2.classList.contains("rating__btn__active__style")) {
    rating.innerHTML = "2";
  } else if (ratingBtn3.classList.contains("rating__btn__active__style")) {
    rating.innerHTML = "3";
  } else if (ratingBtn4.classList.contains("rating__btn__active__style")) {
    rating.innerHTML = "4";
  } else {
    rating.innerHTML = "5";
  }
  tySection.classList.toggle("isActive");
});
