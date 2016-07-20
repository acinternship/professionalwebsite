var $ = require('jquery');

$(document).ready(function () {
  $('header-work').click(function () {
    $('content-work').slideToggle('slow');
  });
});