function slideIn (el) {
  var elem = document.getElementById(el);
  console.log(el);
//  elem.style.transition = "top 1.5s linear 0s";
//  elem.style.top = "0";
}

function slideOut (el) {
    var elem = document.getElementById(el);
    elem.style.transition = "left 1.5s linear 0s";
    elem.style.left = "-200px";
}