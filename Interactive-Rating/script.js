const radioBtns = document.querySelectorAll('button[role="radio"]');
const submmitBtn = document.querySelector('button[type="submit"]');
let score;

animateSection('rate-us');

submmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showThanks();
});

radioBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
        selectButton(btn)
    })
);

function showThanks() {
    const rateUsSection = document.querySelector('.rate-us');
    const thanksSection = document.querySelector('.thanks');
    const thanksScoreValue = document.querySelector('.thanks-score-value');

    rateUsSection.classList.add('hide');
    thanksSection.classList.remove('hide');

    animateSection('thanks');
    thanksScoreValue.textContent = score;
}

function selectButton(btn) {
    radioBtns.forEach((btn) => {
        btn.classList.remove("select");
        btn.ariaChecked = "false";
    });
    btn.classList.add("select");
    btn.ariaChecked = "true";
    score = btn.textContent;
}

function animateSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);

    section.style.opacity = "0.3"
    setTimeout(() => {
        section.style.opacity = "1"
    }, 100)
}