import renderHomeTab from './homeTab';
import renderMenuTab from './menuTab';
import renderContactTab from './contactTab'

// write main code as IIFE to not polute global scope
(function () {
  renderHomeTab();

  const homeTabMenuItem = document.querySelector('#home');
  const menuTabMenuItem = document.querySelector('#menu');
  const contactTabMenuItem = document.querySelector('#contact');

  const switchTabs = function(tabRender) {
    const contentDiv = document.querySelector('#content');
    contentDiv.remove();

    homeTabMenuItem.style.background = 'mistyrose';
    menuTabMenuItem.style.background = 'mistyrose';
    contactTabMenuItem.style.background = 'mistyrose';
    tabRender();
  }

  homeTabMenuItem.addEventListener('click', () => {
    switchTabs(renderHomeTab)
  });
  menuTabMenuItem.addEventListener('click', () => {
    switchTabs(renderMenuTab)
  });
  contactTabMenuItem.addEventListener('click', () => {
    switchTabs(renderContactTab)
  });
})();
