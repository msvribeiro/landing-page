const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.querySelector('nav');
const myElen = document.querySelector('nav li a');
const brand = document.querySelector('.nav-brand a')
const brandSpace = document.querySelector('.nav-brand')
/* Scroll color */

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec*100)
}

addEventListener('scroll', () => {
    myNav.style.setProperty('background', scrolled() < 20 ? "var(--color1)" : "var(--color2)");
    brand.style.setProperty('color', scrolled() <15 ? "white" : "black");
    brandSpace.style.setProperty('background', scrolled() <15 ? "var(--color1)" : "var(--color2)");
})

