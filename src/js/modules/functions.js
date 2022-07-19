export function isWebp() {
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebp(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}

export function setBurgerMenu(btn, menu) {
  const burgerBtn = document.querySelector(btn)
  const navMenu   = document.querySelector(menu)

  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active')

    if (navMenu.classList.contains('menu--hidden')) {
      navMenu.classList.remove('menu--hidden')
      navMenu.classList.add('show')
    } else {
      navMenu.classList.remove('show')
      navMenu.classList.add('menu--hidden')
    }
  })
}

export function filterTabs() {
  const tabsBtn = document.querySelectorAll('.portfolio-filter__btn')
  const tabsItems = document.querySelectorAll('.portfolio-filter__item')

  const setFilter = (category, items) => {
    items.forEach((item) => {
      const isItemFiltered = item.dataset.category !== category
      const isShowAll = category.toLowerCase() === 'all'

      if (isItemFiltered && !isShowAll) {
        item.classList.add('hide')
        setTimeout(() => {
          item.style.display = 'none'
        }, 300)
      } else {
        item.classList.remove('hide')
        setTimeout(() => {
          item.style.display = ''
        }, 300)
      }
    })
  }

  tabsBtn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', () => {
      const currentCategory = currentBtn.dataset.filter

      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach((btn) => btn.classList.remove('active'))
        currentBtn.classList.add('active')
        setFilter(currentCategory, tabsItems)
      }
    })
  })
}