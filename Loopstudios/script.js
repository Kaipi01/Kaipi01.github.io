const hamburgerBtn=document.querySelector(".nav__hamburger");hamburgerBtn.addEventListener("click",toggleMenu);function toggleMenu(){const a=document.querySelector(".nav__menu"),b=document.querySelector(".nav__hamburger-img-open"),c=document.querySelector(".nav__hamburger-img-close");a.classList.toggle("nav__menu--hide"),b.classList.toggle("nav__hamburger-img-open--hide"),c.classList.toggle("nav__hamburger-img-close--hide")}