document.addEventListener('DOMContentLoaded', function() {
  var navMain = document.querySelector('.main-nav__list');
  var navToggle = document.querySelector('.main-nav__toggle');
  navMain.classList.remove('main-nav__list--no-js');
  navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav__list--closed');
    navMain.classList.toggle('main-nav__list--open');
  });
})
