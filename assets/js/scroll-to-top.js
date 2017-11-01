$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
		$('.scroll-to-top').fadeIn();
	} else {
	  $('.scroll-to-top').fadeOut();
	}
});

$('.scroll-to-top').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 800);
});
