// ========== DARK MODE TOGGLE ========== 
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Initialize dark mode from localStorage
function initDarkMode() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeToggleIcon();
  }
}

// Update theme toggle icon
function updateThemeToggleIcon() {
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeToggleIcon();
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', initDarkMode);

// ========== NAVIGATION ========== 
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== DESIGN PORTFOLIO - SORT BY DATE ========== 
const designData = [
  {
    image: "images/design3_package_tge.jpg",
    title: "티지이글로벌 패키지",
    type: "Package Design",
    month: "2025.04",
    program: "Photoshop, Illustrator",
    keywords: "지퍼스탠드",
    desc: "AI로 생성한 이미지를 활용한 패키지로, 제품별 고유의 맛과 향을 시각적으로 표현했습니다.",
    colors: "#59719D,#AB9190,#DDB22F,#a5c49f,#ffffff",
    date: "202504"
  },
  {
    image: "images/design6_jeju_book.jpg",
    title: "Tea 패키지",
    type: "Package Design",
    month: "2025.08",
    program: "Illustrator",
    keywords: "휘닉스 아일랜드",
    desc: "기존 '휘닉스 파크' 디자인 레이아웃을 활용하여, 기업의 통일감을 유지하면서 색상과 일러스트를 새롭게 적용한 패키지 디자인입니다.",
    colors: "#423E35,#ECE6C6,#EE7F54,#FFFFFF",
    date: "202508"
  },
  {
    image: "images/design1_package_hanati.jpg",
    title: "하나투어 패키지 디자인",
    type: "Package Design",
    month: "2024.03",
    program: "Illustrator",
    keywords: "단상자",
    desc: "하나투어의 판촉용 제품인 우롱차로, 브랜드 아이덴티티를 살린 패키지 디자인입니다.",
    colors: "#5E2BB8,#08D1D9,#ffffff",
    date: "202403"
  },
  {
    image: "images/design8_tge_ui.png",
    title: "티지이글로벌 상세페이지 디자인",
    type: "UI/UX Design",
    month: "2024.01",
    program: "Photoshop, Illustrator",
    keywords: "웹, UI, UX",
    desc: "티지이글로벌의 쇼핑 경험을 최적화한 웹 인터페이스 디자인 상세 페이지입니다.",
    colors: "#ffffff,#f8f8f8,#e0e0e0,#333333,#000000",
    date: "202401"
  },
  {
    image: "images/design2_poster_space.jpg",
    title: "우주 콜라주 포스터",
    type: "Poster Design",
    month: "2022.11",
    program: "Photoshop",
    keywords: "우주, 몽환, 콜라주",
    desc: "우주의 신비로움을 표현한 디지털 콜라주 포스터 디자인입니다.",
    colors: "#1C254E,#FD2997,#233685,#8a97c3,#FFF558",
    date: "202211"
  },
  {
    image: "images/design4_niihwa.png",
    title: "NiiHWA - XYZ 앨범 아트",
    type: "Album Art",
    month: "2022.11",
    program: "Photoshop",
    keywords: "음악, 힙합, 트렌디",
    desc: "아티스트 NiiHWA의 XYZ 앨범을 위한 비주얼 아트워크입니다.",
    colors: "#FFC5FF,#C3A5E1,#D8D8D8,#564768,#7A7A7A",
    date: "202211"
  },
  {
    image: "images/design5_anti.jpg",
    title: "안티 디자인 포스터",
    type: "Poster Design",
    month: "2023.06",
    program: "Photoshop",
    keywords: "실험적, 파격, 그래픽",
    desc: "기존의 규칙을 벗어나 자유로운 구성과 강한색을 사용한 포스터입니다.",
    colors: "#0000ff,#ffff00,#000000",
    date: "202306"
  },
  {
    image: "images/design7_space_fantasy.jpg",
    title: "우주 판타지 포스터",
    type: "Poster Design",
    month: "2023.06",
    program: "Photoshop",
    keywords: "판타지, 우주, 상상력",
    desc: "판타지적 요소가 가미된 공간 포스터입니다.",
    colors: "#4b0082,#FFFCF7,#55BC8D,#84AFF3,#3A444E",
    date: "202306"
  }
];

// Sort by date (newest first)
designData.sort((a, b) => b.date - a.date);

// Render design cards
function renderDesignCards() {
  const designGrid = document.getElementById('designGrid');
  designGrid.innerHTML = '';
  
  designData.forEach(item => {
    const card = document.createElement('article');
    card.className = 'design-card';
    card.setAttribute('data-image', item.image);
    card.setAttribute('data-title', item.title);
    card.setAttribute('data-type', item.type);
    card.setAttribute('data-month', item.month);
    card.setAttribute('data-program', item.program);
    card.setAttribute('data-keywords', item.keywords);
    card.setAttribute('data-desc', item.desc);
    card.setAttribute('data-colors', item.colors);
    
    card.innerHTML = `
      <div class="design-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="design-overlay">
          <button class="more-btn">More View +</button>
        </div>
      </div>
      <p class="design-title">${item.type} — ${item.title}</p>
    `;
    
    designGrid.appendChild(card);
  });
  
  // Re-attach event listeners to new cards
  attachDesignCardListeners();
}

// ========== DESIGN PORTFOLIO MODAL (ENHANCED) ========== 
const designModal = document.getElementById('designModal');
const modalImage = designModal.querySelector('.modal-image');
const modalTitle = document.getElementById('modal-title');
const modalType = document.getElementById('modal-type');
const modalMonth = document.getElementById('modal-month');
const modalProgram = document.getElementById('modal-program');
const modalKeywords = document.getElementById('modal-keywords');
const modalDesc = document.getElementById('modal-desc');
const modalColors = document.getElementById('modal-colors');
const modalClose = designModal.querySelector('.modal-close');

function attachDesignCardListeners() {
  const designCards = document.querySelectorAll('.design-card');
  
  // Open modal on design card click
  designCards.forEach(card => {
    card.addEventListener('click', () => {
      const data = {
        image: card.getAttribute('data-image'),
        title: card.getAttribute('data-title'),
        type: card.getAttribute('data-type'),
        month: card.getAttribute('data-month'),
        program: card.getAttribute('data-program'),
        keywords: card.getAttribute('data-keywords'),
        desc: card.getAttribute('data-desc'),
        colors: card.getAttribute('data-colors').split(',')
      };
      
      // Set text content
      modalImage.src = data.image;
      modalTitle.textContent = data.title;
      modalType.textContent = data.type;
      modalMonth.textContent = data.month;
      modalProgram.textContent = data.program;
      modalKeywords.textContent = data.keywords;
      modalDesc.textContent = data.desc;
      
      // Set colors
      modalColors.innerHTML = '';
      data.colors.forEach(color => {
        const circle = document.createElement('div');
        circle.className = 'color-circle';
        circle.style.backgroundColor = color;
        circle.title = color;
        modalColors.appendChild(circle);
      });
      
      designModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

// Close modal on close button click
modalClose.addEventListener('click', () => {
  designModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close modal on outside click
designModal.addEventListener('click', (e) => {
  if (e.target === designModal) {
    designModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && designModal.classList.contains('active')) {
    designModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ========== SKILL BARS ANIMATION (FIXED) ========== 
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillFills = entry.target.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = targetWidth;
      });
    } else {
      const skillFills = entry.target.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => {
        fill.style.width = '0';
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ========== WEB PORTFOLIO - LOADING SPINNER ========== 
const loadingSpinner = document.getElementById('loadingSpinner');
const projectCards = document.querySelectorAll('.project-card');

function showLoadingSpinner() {
  loadingSpinner.classList.add('active');
}

function hideLoadingSpinner() {
  loadingSpinner.classList.remove('active');
}

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    if (url) {
      showLoadingSpinner();
      // Simulate loading delay
      setTimeout(() => {
        window.open(url, '_blank');
        hideLoadingSpinner();
      }, 800);
    }
  });
});

// ========== MOBILE MENU TOGGLE ========== 
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;

// Create mobile menu toggle button
function createMobileMenuToggle() {
  if (window.innerWidth <= 768) {
    if (!document.querySelector('.mobile-menu-toggle')) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-menu-toggle';
      toggleBtn.innerHTML = '☰';
      toggleBtn.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 999;
        width: 40px;
        height: 40px;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        border-radius: 4px;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-primary);
        transition: all 0.3s ease;
      `;
      
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuOpen = !menuOpen;
        toggleBtn.style.backgroundColor = menuOpen ? 'var(--text-primary)' : 'var(--bg-secondary)';
        toggleBtn.style.color = menuOpen ? 'var(--bg-primary)' : 'var(--text-primary)';
      });

      document.body.appendChild(toggleBtn);
    }
  }
}

// Close mobile menu when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
      menuOpen = false;
      const toggleBtn = document.querySelector('.mobile-menu-toggle');
      if (toggleBtn) {
        toggleBtn.style.backgroundColor = 'var(--bg-secondary)';
        toggleBtn.style.color = 'var(--text-primary)';
      }
    }
  });
});

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenuToggle);
window.addEventListener('resize', createMobileMenuToggle);

// ========== SCROLL TO TOP ========== 
function createScrollToTopButton() {
  if (!document.querySelector('.scroll-to-top')) {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      width: 40px;
      height: 40px;
      background-color: var(--accent);
      color: var(--bg-primary);
      border: none;
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
    `;

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });
  }
}

window.addEventListener('load', createScrollToTopButton);

// ========== INITIAL SETUP ========== 
document.addEventListener('DOMContentLoaded', () => {
  // Render design cards sorted by date
  renderDesignCards();
  
  // Set first nav link as active
  if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
});
