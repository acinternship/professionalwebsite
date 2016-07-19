function headerSlider (el) {
  var hide = true;
  var elem = document.getElementById(el);
  console.log(el);
  elem.style.top = 0;
//  elem.style.transition = "top 1.5s linear 0s";
//  elem.style.top = "0";
}

function headerSlideOut (el) {
  var elem = document.getElementById(el);
  elem.style.transition = "left 1.5s linear 0s";
  elem.style.left = "-200px";
}