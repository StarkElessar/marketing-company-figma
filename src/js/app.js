import * as flsFunctions from './modules/functions.js'
import Swiper, { Navigation } from 'swiper'

flsFunctions.isWebp()
flsFunctions.setBurgerMenu('.burger-menu', '.menu')

const ourClientSwiper = new Swiper('.swiper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  setWrapperSize: true,
})