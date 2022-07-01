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