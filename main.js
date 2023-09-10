
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';


const swiperAlpha = new Swiper('.sw1', {
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    768: {
      autoplay: {
        enabled: false,
      }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const swiper1 = new Swiper('.sw2', {
  slidesPerView: "auto",
  slidesPerView: 1,
  spaceBetween: 10,
  noSwiping: true,
  // Responsive breakpoints
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, //拖曳
  },
  mousewheel: true, // 滑鼠滾動
});

// product
const swiperProduct = new Swiper('.sw3', {
  slidesPerView: "auto",
  slidesPerView: 1,
  spaceBetween: 10,
  noSwiping: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, //拖曳
  },
  mousewheel: true, // 滑鼠滾動
});

//AOS
AOS.init();