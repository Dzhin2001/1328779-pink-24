document.addEventListener('DOMContentLoaded', function() {
  // menu-nav
  let navToggle = document.querySelector('.main-nav__toggle');
  navToggle.classList.remove('main-nav__toggle--no-js');
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('main-nav__toggle--closed');
  });

  // form
  let form = document.querySelector('.form__form');
  if(typeof(form) != 'undefined' && form != null) {
    let modalToggle = function() {
      let modalContainer = document.querySelector('.modal-container');
      modalContainer.classList.toggle('modal-container--close');
    };
    let buttonError = document.getElementById('button-error');
    let buttonSuccess = document.getElementById('button-success');
    buttonError.onclick = modalToggle;
    buttonSuccess.onclick = modalToggle;

    form.onsubmit = function() {
      let windowModal = document.querySelector('.modal');
      let inputSurname = document.getElementById('input__surname');
      let inputFirstname = document.getElementById('input__first-name');
      let inputEmail = document.getElementById('input__email');
      let r = /^\w+@\w+\.\w{2,4}$/i;
      let valid = true;

      if( inputSurname.value.length == 0
          || inputFirstname.value.length == 0
          || !r.test(inputEmail.value)
        ) {
        valid = false;
      }
      windowModal.classList.toggle('modal--success', valid);
      modalToggle();

      // You must return false to prevent the default form behavior
      return false;
      //return valid;
    }
  }

  // map
  let center = [59.938635, 30.323122];
  let navMain = document.querySelector('.contacts__map');
  if(typeof(navMain) != 'undefined' && navMain != null) {
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
  }

})
