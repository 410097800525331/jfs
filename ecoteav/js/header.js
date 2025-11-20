// window.addEventListener('load', function () {
//   var allElements = document.getElementsByTagName('*');
//   Array.prototype.forEach.call(allElements, function (el) {
//     var includePath = el.dataset.includePath;
//     if (includePath) {
//       var xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//           el.outerHTML = this.responseText;
//         }
//       };
//       xhttp.open('GET', includePath, true);
//       xhttp.send();
//     }
//   });
// });

// header
// const header = document.querySelector('#header');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) {
//     header.classList.add('active');
//   } else {
//     header.classList.remove('active');
//   }
// });
// const main = document.querySelector('section');
// const headerHeight = header.offsetHeight;
// main.style.paddingTop = `${headerHeight}px`;
// main.js

document.addEventListener('includeLoaded', function () {
  const header = document.querySelector('#header');
  const main = document.querySelector('section');

  if (!header || !main) return;

  // 스크롤 시 헤더 색상 변경
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });

  // 메인 패딩 조정 (헤더 높이만큼)
  const headerHeight = header.offsetHeight;
  main.style.paddingTop = `${headerHeight}px`;
});
