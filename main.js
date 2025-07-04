  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    const isDark = body.classList.contains("dark-mode");
    if (toggleBtn) toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    if (toggleBtnMobile) toggleBtnMobile.textContent = isDark ? "☀️" : "🌙";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleTheme);

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});


function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}