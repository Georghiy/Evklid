window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.burger__btn').forEach(function(el){
    el.addEventListener('click',function() {
      let HeaderHeight=document.querySelector('.header__container').clientHeight;
      let HeroHeight=document.querySelector('.hero__container').clientHeight;
      let HeightBurger = HeaderHeight + HeroHeight;
      document.querySelector('.header__nav-menu-wrapper').style.height = HeightBurger + 'px';
      document.querySelector('.header__nav-menu-wrapper').classList.toggle('activate-burger');
    })
  })

  document.querySelector('.burger__close-btn').addEventListener('click', function(){
    setTimeout(function(){document.querySelector('.header__nav-menu-wrapper').style.height = 100 + '%'}, 700);
  })

  document.querySelectorAll('.nav-menu__items').forEach(function(item){
    item.addEventListener('click', function(){
      document.querySelector('.header__nav-menu-wrapper').classList.remove('activate-burger');
      setTimeout(function(){document.querySelector('.header__nav-menu-wrapper').style.height = 100 + '%'}, 700);
    })
  })

  document.querySelectorAll('.search-form__btn').forEach(function(elem){
    elem.addEventListener('click', function() {
      document.querySelector('.header__search-form').classList.toggle('activate-block');
    })
  })

  window.addEventListener('resize', function (){
    if (window.visualViewport.width >= 1024 - 14) {
      document.querySelector('.header__nav-menu-wrapper').style.height = 100 + '%';
      document.querySelector('.header__nav-menu-wrapper').classList.remove('activate-burger');
    }
  })


  // swiper
  window.addEventListener('resize', function(){
    let heroContentHeight = document.querySelector('.hero__content').clientHeight

    document.querySelectorAll('.swiper-slide').forEach(function(elem){
      elem.style.minHeight = heroContentHeight + 'px'
    })

    document.querySelectorAll('.hero__container').forEach(function(elem){
      elem.style.minHeight = heroContentHeight + 'px'
    })
  })

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
    },
    disableOnInteraction: false,
    updateOnWindowResize: true,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
      bulletClass: 'bullity-cont__bullit',
      bulletActiveClass: 'swiper-pagination-active',
      // bulletElement: 'div'
      // renderBullet: function(index, className) {
      //  return '<svg class="' + className + '" width="15" height="15" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="7.5" cy="7.5" r="7.5" fill="white" fill-opacity="0.4"/> </svg>';
      // } с пагинацией агенерированной через рендер не работает accessebility.
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false
    },

    //Accessibility
    a11y: {
      id:null,
      enabled: true,
      firstSlideMessage: 'Текущий слайд',
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    }
  })

  // how-work tabs
  document.querySelectorAll('.how-work__step-btn').forEach(function(tabBtn){
    tabBtn.addEventListener('click', function(event){
      const DataPath = event.currentTarget.dataset.path
      document.querySelector('.how-work__step-active').classList.remove('how-work__step-active');
      document.querySelector('.how-work__step-btn-active').classList.remove('how-work__step-btn-active');
      document.querySelector(`[data-target="${DataPath}"]`).classList.add('how-work__step-active');
      event.currentTarget.classList.add('how-work__step-btn-active')
    })
  })

  // Аккордион вариант 2 (не подключал стандартные библиотеки css мешают)

  $('.faq_list').accordion ({
      header:'.faq__item .faq__text',
      heightStyle: 'content',
      collapsible: true,
      animate: 500,
      active: true,
      // написал что бы отключить стандартные иконки
      icons: { "header": "faq__btn-default", "activeHeader": "faq__btn-active" }
    },
  )

  // в переменную записываю код html кастомной иконки включая стили
  elem = '<button class="btn faq__btn" aria-label = "Развернуть"> <svg class="faq__icon" width="50" height="50" viewbox="0 0 50 50" fill="none" > <ellipse cx="25" cy="25" rx="25" ry="25" fill="#ECECEC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z" fill="#666666"/></svg> </button>'; // наша иконка
  // селектором выбираю создаваемый Jquery span иконки и вписываю в него соответствующие классы
  $(".ui-icon").html(elem)

})
