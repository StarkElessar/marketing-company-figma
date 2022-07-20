import * as flsFunctions from './modules/functions.js'
import Swiper, { Navigation, Grid } from 'swiper'

flsFunctions.isWebp()
flsFunctions.setBurgerMenu('.burger-menu', '.menu')
flsFunctions.filterTabs()

const ourClientSwiper = new Swiper('.client-slider__wrapper', {
  modules: [Navigation],
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

const ourBlogPost = new Swiper('.posts-swiper', {
  modules: [Navigation, Grid],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    1050: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 23
})