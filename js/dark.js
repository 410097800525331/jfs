const body = document.body;
const home = document.getElementById('home');
const toggleBtn = document.getElementById('toggle-btn');

// 현재 시각에 따라 자동 적용
function applyThemeByTime() {
  const now = new Date();
  const hour = now.getHours();

  // 19시(7PM) ~ 7시(7AM) 사이는 다크모드
  // if (hour >= 19 || hour < 7) {
  if (hour >= 17 || hour < 7) {
    home.classList.add('dark');
    // info.textContent = `현재 시각: ${hour}시 → 다크모드 자동 적용 🌙`;
    // toggleBtn.textContent = '☀️ 라이트 모드 전환';
  } else {
    home.classList.remove('dark');
    // info.textContent = `현재 시각: ${hour}시 → 라이트모드 적용 ☀️`;
    // toggleBtn.textContent = '🌙 다크 모드 전환';
  }
}

// 수동 전환 (자동 모드와 별개)
// toggleBtn.addEventListener('click', () => {
//   body.classList.toggle('dark');
//   const isDark = body.classList.contains('dark');
//   toggleBtn.textContent = isDark ? '☀️ 라이트 모드 전환' : '🌙 다크 모드 전환';
//   info.textContent = isDark ? '사용자 설정: 다크모드 🌙' : '사용자 설정: 라이트모드 ☀️';
// });

// 페이지 로드 시 자동 설정
applyThemeByTime();