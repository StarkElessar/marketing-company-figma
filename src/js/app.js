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
  slidesPerView: 4,
  spaceBetween: 20,
  setWrapperSize: true,
})