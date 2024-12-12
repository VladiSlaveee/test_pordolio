const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});

const percents = document.querySelectorAll('.percent__grid-item-header__percent');
lines = document.querySelectorAll('.percent__grid-item-body');

percents.forEach((item, i) => {            //кажный элем на основе его индекса (аргумент)
    lines[i].style.width = item.innerHTML;  //вытаскиваем стили из percent и кладём в lines по индексу
});