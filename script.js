$('.menu-button').on('click', function() {
  $(this).removeClass('show-menu-button');
  $('.overlay').slideDown('slow');
});

$('.close-button').on('click', function() {
  $('.overlay').slideUp('fast');
  $('.menu-button').addClass('show-menu-button');
});