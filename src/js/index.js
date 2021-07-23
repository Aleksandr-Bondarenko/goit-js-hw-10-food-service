import * as myModule from './theme-changes';

import menu from '../menu.json';
import menuItemTpl from '../templates/menu-item.hbs';

const menuListEl = document.querySelector('.js-menu');

const createMenuMarkup = function (menu) {
  return menu.map(menuItemTpl).join('');
};

menuListEl.insertAdjacentHTML('beforeend', createMenuMarkup(menu));
