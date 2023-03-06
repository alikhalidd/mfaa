var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('new-nav');
  } else {
    navbar.classList.remove('new-nav');
  }
});
let about = document.querySelector('.about');
let home = document.querySelector('.home');
let vision = document.querySelector('.vision');
let makkah = document.querySelector('.makkah');
let contact = document.querySelector('.contact');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
console.log(window.scrollY);
document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))


// image slideshow

const imgHead = document.getElementById('ih');
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    imgHead.classList.add('zero-o');
  }, 2000);
  setTimeout(() => {
    imgHead.classList.remove('img-head');
    imgHead.classList.add('img-headd');
    imgHead.classList.remove('zero-o');
  }, 2500);
  setTimeout(() => {
    imgHead.classList.add('zero-o');
  }, 4500);
  setTimeout(() => {
    imgHead.classList.remove('zero-o');
    imgHead.classList.remove('img-headd');
    imgHead.classList.add('img-headdd');
  }, 5000);
  setTimeout(() => {
    imgHead.classList.add('zero-o');
  }, 7000);
  setTimeout(() => {
    imgHead.classList.remove('zero-o');
    imgHead.classList.remove('img-headdd');
    imgHead.classList.add('img-head');
  }, 7500);
}

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
