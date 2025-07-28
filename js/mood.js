document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    icon.classList.replace("fa-moon", "fa-sun");
  }

  toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    if (isLight) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
});
