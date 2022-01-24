document.addEventListener('DOMContentLoaded', function() {
  // menu-nav
  let navToggle = document.querySelector('.main-nav__toggle');
  navToggle.classList.remove('main-nav__toggle--no-js');
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('main-nav__toggle--closed');
  });

  // form
  let modalToggle = function() {
    document.querySelector('.modal-container').classList.toggle('modal-container--close');
  }
  document.getElementById('button-error').onclick = modalToggle;
  document.getElementById('button-success').onclick = modalToggle;

  document.querySelector('.form__form').onsubmit = function() {
    /* do what you want with the form */
    let valid = true;
    if(document.getElementById('input__surname').value.length == 0) {
      valid = false;
    }
    if(document.getElementById('input__first-name').value.length == 0) {
      valid = false;
    }
    let r = /^\w+@\w+\.\w{2,4}$/i;
    if (!r.test(document.getElementById('input__email').value)) {
      valid = false;
    }

    let windowModal = document.querySelector('.modal');
    windowModal.classList.toggle('modal--success', valid);
    modalToggle();

    // You must return false to prevent the default form behavior
    return false;
    //return valid;
  }

  // map
  let center = [59.938635, 30.323122];
  let navMain = document.querySelector('.contacts__map');
  navMain.classList.remove('contacts__map--no-js');

  function init() {
    let map = new ymaps.Map('map-contacts', {
      center: center,
      zoom: 16
    });
    map.geoObjects
      .add(new ymaps.Placemark([59.938635, 30.323122], {
        balloonContent: '<strong>html Academy</strong>',
        iconCaption: ''
      }, {
        preset: 'islands#redCircleDotIconWithCaption',
        iconCaptionMaxWidth: '50'
      }));
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
})
