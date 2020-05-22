function menuActive(nav) {
  var parent = searchLink(nav);
  for(var i = 0; i < nav.length; i++) {
    var location = window.location.pathname.split('/');
    location = location[location.length - 1];
    var link = nav[i].getAttribute('href');
    if(location == link) {
      if(location == "portfolio-photo.html" || location == "portfolio-adobe.html") {
        nav[i].classList.add('active');
        parent.classList.add('active');
      } else {
        nav[i].classList.add('active');
      }
    }
  }
}

function searchLink(nav) {
  for(var i = 0; i < nav.length; i ++) {
    if(nav[i].getAttribute('href') == "#") {
      return nav[i];
    }
  }
}

function isOpen(e, item, arrow) {
  e.stopImmediatePropagation();
  item.classList.toggle('open');
  arrow.classList.toggle('rotate')
}
