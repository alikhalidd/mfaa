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
// console.log(window.scrollY);
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 460) {
//     home.classList.remove('active');
//     about.classList.add('active');
//   } else {
//     home.classList.add('active')
//     about.classList.remove('active')
//   }
// });
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 1028) {
//     about.classList.remove('active');
//     vision.classList.add('active');
//   } else if (window.scrollY < 460) {
//     about.classList.remove('active')
//     vision.classList.remove('active')
//   }
//   else {
//     vision.classList.remove('active');
//     about.classList.add('active');
//   }
// });
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 1799) {
//     vision.classList.remove('active');
//     makkah.classList.add('active');
//   }
//   else if (window.scrollY < 1799 && window.scrollY > 1028) {
//     makkah.classList.remove('active');
//     vision.classList.add('active');
//   }
// });
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 2400) {
//     makkah.classList.remove('active');
//     contact.classList.add('active');
//   }
//   else if (window.scrollY < 2400 && window.scrollY > 1799) {
//     contact.classList.remove('active');
//     makkah.classList.add('active');
//   }
// });
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
});
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
