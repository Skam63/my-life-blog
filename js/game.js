// ====== БУРГЕР-МЕНЮ ======
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  const burger = document.getElementById('burgerBtn');
  nav.classList.toggle('open');
  burger.classList.toggle('active');
}

// ====== СЛАЙДЕР ======
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

// ====== ИГРА "УГАДАЙ ЧИСЛО" ======
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById('guessInput');
  const gameMessage = document.getElementById('gameMessage');
  
  // Если элементов игры нет на этой странице, прерываем выполнение
  if (!input || !gameMessage) return;

  const guess = parseInt(input.value);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    gameMessage.textContent = 'Введите число от 1 до 10!';
    gameMessage.style.color = 'orange';
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    gameMessage.textContent = `Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`;
    gameMessage.style.color = '#30d5c8';
  } else if (guess < secretNumber) {
    gameMessage.textContent = 'Загаданное число больше.';
    gameMessage.style.color = '#ff6b6b';
  } else {
    gameMessage.textContent = 'Загаданное число меньше.';
    gameMessage.style.color = '#ff6b6b';
  }

  input.value = '';
  input.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  const gameMessage = document.getElementById('gameMessage');
  const input = document.getElementById('guessInput');
  
  if (gameMessage && input) {
    gameMessage.textContent = 'Игра начата заново! Введите число от 1 до 10.';
    gameMessage.style.color = '#fff';
    input.value = '';
    input.focus();
  }
}