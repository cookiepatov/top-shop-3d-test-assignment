
const navButton = document.querySelector('.mobile-menu__show-navigation');
const servButton = document.querySelector('.mobile-menu__show-services');
const navMenu = document.querySelector('.navigation');
const servMenu = document.querySelector('.services');
const form = document.querySelector('.search-form');

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
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(vw);
    if ((vw<=400)&&(!form.classList.contains('search-form_overlay')))
    {
      console.log('1')
      form.classList.toggle('search-form_overlay');
    }
  })
  document.addEventListener('click',function(e){
    if(form.classList.contains('search-form_overlay')
    &&(!(e.target.classList.contains('search-form__input'))
    ||(e.target.classList.contains('search-form__submit'))))
    {
      form.classList.toggle('search-form_overlay');
    }
  })
}

init();
