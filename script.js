
// Находим элементы слайдера
const slider = document.querySelector('.hero2-block-right');
const slides = Array.from(slider.querySelectorAll('img'));

// Находим элементы управления (стрелки, кружочки и ссылки)
const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');
const dots = Array.from(document.querySelectorAll('.dot'));
const links = Array.from(document.querySelectorAll('.header2-navigation_item a'));

// Текущий индекс активного слайда
let currentSlide = 0;

// Функция для отображения активного слайда
function showSlide(index) {
  // Скрываем все слайды
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Отображаем активный слайд
  slides[index].style.display = 'block';

  // Удаляем класс 'active' у всех заголовков
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Добавляем класс 'active' к текущему заголовку
  links[index].classList.add('active');

  // Обновляем текущий индекс
  currentSlide = index;
}

// Функция для переключения на следующий слайд
function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
  updateDots(nextIndex);
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
  const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
  updateDots(prevIndex);
}

// Функция для обновления кружочков (активный кружочек)
function updateDots(index) {
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  dots[index].classList.add('active');
}

// Обработчики событий для стрелок
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

// Обработчики событий для кружочков
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    updateDots(index);
  });
});

// Обработчики событий для ссылок
links.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем переход по ссылке
    showSlide(index);
    updateDots(index);
  });
});

// Показываем первый слайд при загрузке страницы
showSlide(0);
updateDots(0);