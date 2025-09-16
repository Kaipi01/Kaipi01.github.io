
const navLinks = document.querySelectorAll('.nav-link');
const menuBtn = document.querySelector('.navbar-menu-btn');
const menuSkipBtn = document.querySelector('.navbar-skip');
const heroImgSun = document.querySelector('.hero__img-sun');
const heroImgCloud1 = document.querySelector('.hero__img-cloud-1');
const heroImgCloud2 = document.querySelector('.hero__img-cloud-2');
const heroImgMountain1 = document.querySelector('.hero__img-mountain-1');
const heroImgMountain2 = document.querySelector('.hero__img-mountain-2');
const heroImgHuman = document.querySelector('.hero__img-human');

menuBtn.addEventListener('click', changeMenuTheme);
menuSkipBtn.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

new simpleParallax(heroImgSun, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 3,
});

new simpleParallax(heroImgHuman, {
    orientation: 'left',
    overflow: true,
    delay: .8,
    scale: 1.2,
});

new simpleParallax(heroImgMountain1, {
    orientation: 'left',
    overflow: true,
    delay: .2,
});

new simpleParallax(heroImgMountain2, {
    orientation: 'right',
    overflow: true,
    delay: .2,
});

function closeMenu() {
    const navbar = document.querySelector('#navbar');
    if (!navbar.classList.contains('show')) return;
    navbar.classList.remove('show');
    changeMenuTheme();
}

function changeMenuTheme() {
    const navBrand = document.querySelector('.navbar-brand');
    menuBtn.classList.toggle('active');
    navBrand.classList.toggle('active');
}