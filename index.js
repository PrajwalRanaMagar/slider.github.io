const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});
