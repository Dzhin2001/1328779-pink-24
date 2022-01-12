document.addEventListener('DOMContentLoaded', function() {
  let navToggle = document.querySelector('.main-nav__toggle');
  navToggle.classList.remove('main-nav__toggle--no-js');

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('main-nav__toggle--closed');
  });

})
