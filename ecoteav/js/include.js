window.addEventListener('load', function () {
  var allElements = document.getElementsByTagName('*');
  var includeCount = 0;
  var totalIncludes = 0;

  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      totalIncludes++;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
          includeCount++;
          if (includeCount === totalIncludes) {
            initHeaderScript(); // ✅ include 다 끝나면 실행
          }
        }
      };
      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });

  if (totalIncludes === 0) {
    initHeaderScript(); // include가 없으면 바로 실행
  }
});

// header
function initHeaderScript() {
  const header = document.querySelector('#header');
  const main = document.querySelector('section');

  if (!header || !main) return;

  // 스크롤 시 헤더 스타일
  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 50) {
  //     header.classList.add('active');
  //   } else {
  //     header.classList.remove('active');
  //   }
  // });

  // 메인 영역 패딩
  const headerHeight = header.offsetHeight;
  main.style.paddingTop = `${headerHeight}px`;

  // const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  // const headerNav = document.getElementById('headerNav');

  // mobileMenuBtn.addEventListener('click', () => {
  //   headerNav.classList.toggle('active');
  // });

  // // 메뉴 외부 클릭시 닫기
  // document.addEventListener('click', (e) => {
  //   if (!headerNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
  //     headerNav.classList.remove('active');
  //   }
  // });
  
  // // 모바일 햄버거
  // const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  // const mainMenu = document.getElementById('mainMenu');

  // mobileMenuBtn.addEventListener('click', () => {
  //   mainMenu.classList.toggle('active');
  // });

  // // 메뉴 외부 클릭시 닫기
  // document.addEventListener('click', (e) => {
  //   if (!mainMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
  //     mainMenu.classList.remove('active');
  //   }
  // });
}
