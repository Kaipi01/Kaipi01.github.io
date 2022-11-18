const menuBtn = document.querySelector(".nav__menu-btn");

menuBtn.addEventListener("click", () => {
  const openIcon = document.querySelector(".nav__menu-btn-img-open");
  const closeIcon = document.querySelector(".nav__menu-btn-img-close");
  const menu = document.querySelector(".nav__menu");
  menu.classList.toggle("nav__menu--hide");
  openIcon.classList.toggle("nav__menu-btn-img--hide");
  closeIcon.classList.toggle("nav__menu-btn-img--hide");
});
