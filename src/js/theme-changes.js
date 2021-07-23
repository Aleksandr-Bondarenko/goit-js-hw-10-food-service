const themeCheckboxEl = document.getElementById('theme-switch-toggle');
const bodyEl = document.querySelector('body');
const markerEl = document.querySelector('.theme-switch__marker');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChanges = function () {
  if (localStorage.getItem('Theme') === Theme.LIGHT || localStorage.getItem('Theme') === false) {
    themeCheckboxEl.checked = false;
    bodyEl.classList.add('light-theme');
  } else if (localStorage.getItem('Theme') === Theme.DARK) {
    themeCheckboxEl.checked = true;
    bodyEl.classList.add('dark-theme');
    markerEl.style.transitionDuration = '0ms';
    bodyEl.style.transition = 'color 0ms, background-color 0ms';
  }

  const onCheckboxToggle = () => {
    markerEl.style.transitionDuration = '250ms';
    bodyEl.style.transition = 'color 150ms, background-color 150ms';
    if (themeCheckboxEl.checked) {
      bodyEl.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('Theme', Theme.DARK);
    } else {
      bodyEl.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('Theme', Theme.LIGHT);
    }
  };

  themeCheckboxEl.addEventListener('change', onCheckboxToggle);
};

export default themeChanges();
