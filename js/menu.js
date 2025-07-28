  // Menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });