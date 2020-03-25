import './styles.css';
import menu from './menu.json';
import menuItem from './menu.hbs';

const menuUl = document.querySelector('.js-menu');

function createLi(menu){
    const items = menu.map(menu =>menuItem(menu)).join('');
    menuUl.insertAdjacentHTML('beforeend', items);
}
createLi(menu);

const inputButton = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const checkbox = document.querySelector('.js-switch-input[type="checkbox"]');
const currentTheme = localStorage.getItem('Theme');

inputButton.addEventListener('click', changeColorTheme);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  if(currentTheme === 'DARK'){
    body.classList.add('dark-theme');
    checkbox.checked = true;
  } else {
    body.classList.add('light-theme');
    checkbox.checked = false;
  }

function changeColorTheme() {
    if(body.classList.contains('light-theme')){
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('Theme', 'DARK');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('Theme', 'LIGHT');
    }
}

