document.addEventListener("DOMContentLoaded", async function() {
  const includes = document.querySelectorAll('[data-include]');

  // ✨ 미리 숨기기 (깜빡임 방지)
  includes.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.3s ease';
  });

  // ✨ fetch 요청 캐싱 함수
  const cache = new Map();

  async function fetchInclude(file) {
    if (cache.has(file)) return cache.get(file);
    const response = await fetch(file, { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Failed to load: ${file}`);
    const text = await response.text();
    cache.set(file, text);
    return text;
  }

  // ✨ header 우선 로드 (UX 개선)
  const sortedIncludes = Array.from(includes).sort((a, b) => {
    if (a.getAttribute('data-include').includes('header')) return -1;
    if (b.getAttribute('data-include').includes('header')) return 1;
    return 0;
  });

  for (const el of sortedIncludes) {
    const file = el.getAttribute('data-include');
    try {
      const data = await fetchInclude(file);
      el.innerHTML = data;
      el.style.opacity = '1'; // fade-in
    } catch (err) {
      console.error('Include Error:', err);
    }
  }
});
