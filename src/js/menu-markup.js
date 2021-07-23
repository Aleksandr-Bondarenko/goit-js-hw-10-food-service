import menu from '../menu.json';
import menuItemTpl from '../templates/menu-item.hbs';

const menuRender = function () {
  const menuListEl = document.querySelector('.js-menu');

  const createMenuMarkup = function (menu) {
    return menu.map(menuItemTpl).join('');
  };

  menuListEl.insertAdjacentHTML('beforeend', createMenuMarkup(menu));
};

export default menuRender();
