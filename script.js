const menuBtn = document.querySelector(`.menu__btn`);
const menuOverlay = document.querySelector(`.menu__overlay`);
const navbarCategories = document.querySelector(`.navbar__categories`);
const logoImg = document.querySelector(`.logo__img`);
const closeMenuBtn = document.querySelector(`.close-menu__btn`);

menuBtn.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    menuOverlay.classList.remove('hidden');
    navbarCategories.classList.remove('hidden');
    logoImg.classList.add('fixed');
    closeMenuBtn.classList.remove('hidden');
})

closeMenuBtn.addEventListener('click', () => {
    document.body.style.overflow = '';
    menuOverlay.classList.add('hidden');
    navbarCategories.classList.add('hidden');
    logoImg.classList.remove('fixed');
    closeMenuBtn.classList.add('hidden');
})

const mq = window.matchMedia("(max-width: 50rem)");
mq.addEventListener("change", (e) => {
    if (!e.matches) {
        document.body.style.overflow = '';
        menuOverlay.classList.add('hidden');
        navbarCategories.classList.add('hidden');
        logoImg.classList.remove('fixed');
        closeMenuBtn.classList.add('hidden');
    }
});