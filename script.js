let width = 0;
const progressBar = document.getElementById('progressBar');
const loaderScreen = document.getElementById('loader-screen');
const mainContent = document.getElementById('main-content');

let interval = setInterval(() => {
  if (width >= 100) {
    clearInterval(interval);
    loaderScreen.style.display = 'none';
    mainContent.classList.remove('hidden');
  } else {
    width++;
    progressBar.style.width = width + '%';
  }
}, 30);
