$(document).ready(function () {
  // Show/hide content according to button click
  $('#header-work').click(function () {
    $('#content-work').slideToggle('slow');
    $('#header-work').children('i').toggleClass('rotate-180deg');
  });
  
  $('#header-design').click(function () {
    $('#content-design').slideToggle('slow');
    $('#header-design').children('i').toggleClass('rotate-180deg');
  });
  
  $('#header-drawings').click(function () {
    $('#content-drawings').slideToggle('slow');
    $('#header-drawings').children('i').toggleClass('rotate-180deg');
  });
});

// Slider
var slideIndex = 1;

function slideShow(n) {
  var slideNum = $('#slider-design div').length - 1;
  
  if (n > slideNum)
    slideIndex = 1;

  if (n < 1)
    slideIndex = slideNum;

  for (var i = 0; i < slideNum; i++)
    $('#slider-design div')[i].style.display = 'none';
  
  $('#slider-design div')[slideIndex-1].style.display = 'flex';
}

slideShow(slideIndex);

function slideSwitch(i) {
  slideShow(slideIndex += i);
}