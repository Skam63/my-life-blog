let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (!slides.length) return;
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

if (slides.length) {
  setInterval(nextSlide, 5000);
}
// ====== МЕНЮ-БУРГЕР ДЛЯ МОБИЛЬНЫХ ======
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  const burger = document.getElementById('burgerBtn');
  
  //меню и анимации кнопки
  nav.classList.toggle('open');
  burger.classList.toggle('active');
}