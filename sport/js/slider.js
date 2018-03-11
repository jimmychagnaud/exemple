var slides = document.querySelectorAll('.slide');

if (slides.length) {
	var current = document.querySelector('.current');
	var currIndex = Array.prototype.indexOf.call(slides, current);

	var last = slides.length - 1;

	var baseInterval = setInterval(moveSlideRight, 8000);
}

var right = document.querySelector('#moveRight');
var left = document.querySelector('#moveLeft');

left.addEventListener('click', function(e) {
	// clearInterval(baseInterval);
	moveSlideLeft();
});

right.addEventListener('click', function(e) {
	// clearInterval(baseInterval);
	moveSlideRight();
});

function moveSlideRight() {
	if (document.querySelector('.left.inferior')) {
		document.querySelector('.left.inferior').classList.remove('inferior');
	}

	var nextCurrent = (currIndex >= last) ? 0 : currIndex + 1;
	var next = (currIndex == last - 1) ? 0 : nextCurrent + 1;
	var prev = ((currIndex - 1) < 0) ? last : currIndex - 1;

	slides[prev].classList.remove('left');

	slides[currIndex].classList.remove('current');
	slides[currIndex].classList.add('left');

	slides[nextCurrent].classList.remove('right')
	slides[nextCurrent].classList.remove('inferior');
	slides[nextCurrent].classList.add('current');

	slides[next].classList.add('right');
	slides[next].classList.add('inferior');

	currIndex = ((currIndex + 1) > last) ? 0 : currIndex + 1;
}

function moveSlideLeft() {
	if (document.querySelector('.right.inferior')) {
		document.querySelector('.right.inferior').classList.remove('inferior');
	}

	var nextCurrent = (currIndex <= 0) ? last : currIndex - 1;
	var next = (currIndex == 1) ? last : nextCurrent - 1;
	var prev = ((currIndex + 1) > last) ? 0 : currIndex + 1;

	slides[prev].classList.remove('right');

	slides[currIndex].classList.remove('current');
	slides[currIndex].classList.add('right');

	slides[nextCurrent].classList.remove('left');
	slides[nextCurrent].classList.remove('inferior');
	slides[nextCurrent].classList.add('current');

	slides[next].classList.add('left');
	slides[next].classList.add('inferior');

	currIndex = ((currIndex - 1 ) < 0) ? last : currIndex - 1;
}