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
    width += 2; // increase by 2% instead of 1
    progressBar.style.width = width + '%';
  }
}, 20); // reduce interval from 30ms to 20ms
