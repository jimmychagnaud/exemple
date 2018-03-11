//Change menu after scroll
window.addEventListener('scroll', function(e) {
	var menu = document.querySelector('#menu');
	var nav = document.querySelector('.navbar.navbar-default');

	var height = menu.clientHeight;
	
	if (window.scrollY > height) {
		nav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
	}
});

var downArrow = document.querySelector('#down');

downArrow.addEventListener('click', function(e) {
	$('html, body').animate({
		scrollTop: $('.article').first().offset().top
	}, 1000);
});
