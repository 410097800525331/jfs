const menuItems = document.querySelectorAll('.menu_item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.menu_item.active')?.classList.remove('active');
    item.classList.add('active');
  });
});