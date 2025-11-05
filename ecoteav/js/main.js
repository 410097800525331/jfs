// header
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
const main = document.querySelector('section');
const headerHeight = header.offsetHeight;
main.style.paddingTop = `${headerHeight}px`;


