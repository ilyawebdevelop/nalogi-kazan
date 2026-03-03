import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./modules/jquery-ui.js";
import { Fancybox } from "./modules/fancybox.esm.js";

import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// accordion
$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера newsSlider
const newsSlider = document.querySelector('.newsSlider');
var mySwiperNews = new Swiper(newsSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: newsSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: newsSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера includeSlider
const includeSlider = document.querySelector('.includeSlider');
var mySwiperInclude = new Swiper(includeSlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: includeSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: includeSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
});

// Инициализация слайдера resultSlider
const resultSlider = document.querySelector('.resultSlider');
var mySwiperResult = new Swiper(resultSlider, {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: resultSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: resultSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  pagination: {
    el: document.querySelector('.resultSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});

const mediaQueryMax767 = window.matchMedia('(max-width: 767px)');

if (mediaQueryMax767.matches) {
  // Инициализация слайдера servicesSlider
  const servicesSlider = document.querySelector('.servicesSlider');
  var mySwiperServices = new Swiper(servicesSlider, {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 10,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: document.querySelector('.servicesSlider .swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });
}

// Инициализация слайдера teamThumbSlider
const teamSliderThumb = document.querySelector('.teamThumbSlider');
var mySwiperTeamThumb = new Swiper(teamSliderThumb, {
  slidesPerView: 'auto',
  spaceBetween: 5,
  direction: "vertical",
  speed: 600,
  freeMode: true,
  watchSlidesProgress: true,
  mousewheel: true,
});

// Инициализация слайдера teamSlider
const teamSlider = document.querySelector('.teamSlider');
var mySwiperTeam = new Swiper(teamSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  freeMode: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: { // указываем на превью слайдер
    swiper: mySwiperTeamThumb // указываем имя превью слайдера
  },
  navigation: {
    prevEl: teamSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: teamSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
});

// Инициализация слайдера docSlider
const docSlider = document.querySelector('.docSlider');
var mySwiperDoc = new Swiper(docSlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    prevEl: docSlider?.closest('.sliderW').querySelector('.navArrowPrev'),
    nextEl: docSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  pagination: {
    el: docSlider?.closest('.sliderW').querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// Инициализация слайдера galSlider
const galSlider = document.querySelector('.galSlider');
var mySwiperGal = new Swiper(galSlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: galSlider?.closest('.sliderW').querySelector('.navArrowNext'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  },
});

function map() {
  const contactsMap = document.querySelector(".maps__map");
  if (contactsMap) {
    const center = JSON.parse(contactsMap.dataset.center);
    const zoom = Number(contactsMap.dataset.zoom);
    function init() {
      const htmlMap = new ymaps.Map(contactsMap, {
        center,
        zoom
      });
      const placemark = new ymaps.Placemark(center, {}, {
        iconLayout: "default#image",
        iconImageHref: "./img/icons/marker.png",
        iconImageSize: [50, 64],
        iconImageOffset: [-35, -55]
      });
      htmlMap.controls.remove("geolocationControl");
      htmlMap.controls.remove("searchControl");
      htmlMap.controls.remove("trafficControl");
      htmlMap.controls.remove("typeSelector");
      htmlMap.controls.remove("fullscreenControl");
      htmlMap.controls.remove("rulerControl");
      htmlMap.behaviors.disable(["scrollZoom"]);
      htmlMap.geoObjects.add(placemark);
    }
    ymaps.ready(init);
  }
}

map();

$('.vacItemHead').click(function () {
  $(this).toggleClass('active');
  $(this).siblings('.vacItemBody').slideToggle();
});


if (document.querySelector('.copyBtn')) {
  let clipboard = new ClipboardJS('.copyBtn');
  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let parent = e.trigger.closest('.copyBtnW');
    let copyText = parent.querySelector('.copyText');
    console.log(copyText);
    copyText.classList.add('active');
    setTimeout(function () {
      copyText.classList.remove('active');
    }, 2000);
    e.clearSelection();
  });

  let reqItemsBtn = document.querySelectorAll('.reqItemBtn');
  reqItemsBtn.forEach(el => {
    let clibEl = new ClipboardJS(el);
    clibEl.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      let parent = e.trigger.closest('li');
      let copyText = parent.querySelector('.copyTextOfItem');
      console.log(copyText);
      copyText.classList.add('active');
      setTimeout(function () {
        copyText.classList.remove('active');
      }, 2000);
      e.clearSelection();
    });
  });
}

// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerTNav');
const bodyEl = document.querySelector('body');


const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}


btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});


document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('main .sect');
  const header = document.querySelector('.headerC');
  const headerB = document.querySelector('.headerB');

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight;

    if (scrollTop >= heroCenter) {
      header.classList.add('fixed');
      headerB.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
      headerB.classList.remove('fixed');
    }
  };

  headerFixed();

  window.addEventListener('scroll', () => {
    headerFixed();
  });
});