

window.onscroll = function () {
  const navbar = document.querySelector('nav')
  const fixedNav = navbar.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add('sticky')
  }else {
    navbar.classList.remove('sticky')
  }
}


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
   nav.classList.toggle('slide')
})

//klik di luar hamburger
window.addEventListener('click', function (e) {
   if (e.target != menuToggle && e.target != nav) {
     nav.classList.remove('slide');
   }
 });

const scroll = new SmoothScroll('.navbar a[href*="#"]',{
  speed: 700,
  speedAsDuration: true
});