const navbarMenu = document.querySelector(".navbar-menu");
const navBackBtn = document.querySelector(".nav-back-btn");
const offcanvas = new bootstrap.Offcanvas(
  document.querySelector(".offcanvas"),
  {}
);

navbarMenu.addEventListener("click", () => {
  offcanvas.toggle();
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    navBackBtn.classList.remove("nav-back-btn-hide");
  } else {
    navBackBtn.classList.add("nav-back-btn-hide");
  }
});
