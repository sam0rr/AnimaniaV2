// theme.js
import { setCookie, getCookie} from './cookieManager.js';

function toggleTheme() {
  const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
  console.log("Nouveau thème sélectionné :", newTheme); // Pour le débogage
  document.getElementById('themeToggle').textContent = newTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
  setCookie('theme', newTheme, 7);
  updateTheme();
}

function updateTheme() {
  const savedTheme = getCookie('theme') || 'light';
  console.log("Thème sauvegardé récupéré :", savedTheme); // Pour le débogage
  document.body.className = savedTheme + '-theme';
  document.getElementById('themeToggle').textContent = savedTheme === 'light' ? 'Mode Sombre' : 'Mode Clair';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

window.addEventListener('DOMContentLoaded', (event) => {
  updateTheme();
});
