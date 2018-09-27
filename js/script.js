(function () {
  // cache DOM element
  const nav = document.querySelector('.navigation')
  const navCheck = nav.querySelector('#navi-toggle')
  const navLinks = nav.querySelectorAll('.navigation__link')

  // on link click, toggle checkbox 'checked' state
  navLinks.forEach(link =>
      link.addEventListener('click', _ => navCheck.checked = false))
})()
