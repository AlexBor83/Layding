'use strict';

const body = document.querySelector('body');
const headerWrap = document.querySelector('.header__wrap');
const buttonTooggleMenu = headerWrap.querySelector('.menu__button');
const menuItems = headerWrap.querySelectorAll('ul>li>.menu__link');

console.log(menuItems);
console.log(buttonTooggleMenu);

const controllMenu = () => {
  if (!headerWrap) {
    return;
  }

  buttonTooggleMenu.addEventListener('click', () =>
    headerWrap.classList.toggle('header__wrap--tablet')
  );

  menuItems.forEach((item) => {
    item.addEventListener('click', () =>
      headerWrap.classList.toggle('header__wrap--tablet')
    );
  });
};

controllMenu();
