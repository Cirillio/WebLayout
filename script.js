`use strict`;

document.addEventListener("DOMContentLoaded", () => {
  const headerColorToggles = document.querySelectorAll(".header-color-toggles");
  headerColorToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      headerColorToggles.forEach((tgl) => {
        tgl.classList.remove("header-color-toggles-checked");
      });
      toggle.classList.add("header-color-toggles-checked");
    });
  });
});
