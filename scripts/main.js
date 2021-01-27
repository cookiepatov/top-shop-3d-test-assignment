const navButton = document.querySelector('.mobile-menu__show-navigation');
const servButton = document.querySelector('.mobile-menu__show-services');
const navMenu = document.querySelector('.navigation');
const servMenu = document.querySelector('.services');

function init() {
  navButton.addEventListener('click',function(){
    navMenu.classList.toggle('navigation_show');
    if(servMenu.classList.contains('services_show'))
    {
      servMenu.classList.toggle('services_show');
    }
  })
  servButton.addEventListener('click',function(){
    servMenu.classList.toggle('services_show');
    if(navMenu.classList.contains('navigation_show'))
    {
      navMenu.classList.toggle('navigation_show');
    }
  })
}

init();
