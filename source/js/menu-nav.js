document.addEventListener('DOMContentLoaded', function() {
  var navMain = document.querySelector('.main-nav__list');
  var navToggle = document.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav__list--hidden')) {
      navMain.classList.remove('main-nav__list--hidden');
    } else {
      navMain.classList.add('main-nav__list--hidden');
    }
  });
})

