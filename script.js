import Swiper from "./node_modules/swiper/swiper-bundle.min.mjs"; // Инициализация Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Один слайд на экране
  loop: false, // Выключаем бесконечный цикл
});

// Находим все кнопки
const buttons = document.querySelectorAll("#main_sneakers_toggles button");

// Добавляем обработчики событий на кнопки
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Переключаем на соответствующий слайд
    swiper.slideTo(index);

    // Обновляем классы кнопок
    buttons.forEach((btn) =>
      btn.classList.remove("header-color-toggles-checked")
    );
    button.classList.add("header-color-toggles-checked");
  });
});

swiper.on("slideChange", () => {
  buttons.forEach((btn) =>
    btn.classList.remove("header-color-toggles-checked")
  );
  buttons[swiper.activeIndex].classList.add("header-color-toggles-checked");
});
