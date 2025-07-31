document.addEventListener("DOMContentLoaded", () => { 
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const closeMenu = document.getElementById('closeMenu');

  menuToggle.addEventListener('click', () => {
    menu.classList.add('show');
    menuToggle.classList.add('hide');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
    menuToggle.classList.remove('hide'); 
  });
})