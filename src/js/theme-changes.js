const themeCheckboxEl = document.getElementById('theme-switch-toggle');
const bodyEl = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === Theme.LIGHT || localStorage.getItem('Theme') === null) {
  themeCheckboxEl.checked = false;
  bodyEl.classList.add('light-theme');
} else if (localStorage.getItem('Theme') === Theme.DARK) {
  themeCheckboxEl.checked = true;
  bodyEl.classList.add('dark-theme');
}

const onCheckboxToggle = () => {
  console.log('Change theme');
  if (themeCheckboxEl.checked) {
    bodyEl.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyEl.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};

themeCheckboxEl.addEventListener('change', onCheckboxToggle);
// themeCheckboxEl.addEventListener('change', changeStorageValue);
