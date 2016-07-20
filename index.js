$(document).ready(function () {
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