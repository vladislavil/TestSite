window.onload = function() {
  var nav = document.querySelectorAll('.header .header__link');
  var link = document.querySelector('.item');
  var item = document.querySelector('.list');
  var arrow = document.querySelector('.header__link .header__arrow');
  link.addEventListener('click', function(e) {
    isOpen(e, item, arrow);
  })
  menuActive(nav);
}
