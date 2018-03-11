TweenMax.from('#header-content', 5, {opacity: 0});

var controller = new ScrollMagic.Controller();

var photos = document.querySelectorAll('.photos');

photos.forEach(function(el) {
	var scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook: 0.9,
		duration: 800,
		tweenChanges: true,
	});

	controller.addScene(scene);

	var timeline = new TimelineMax();

	var tween1 = TweenMax.set(el, {visibility: 'visible'});
	var tween2 = TweenMax.from(el, 5, {y: 150});

	timeline
		.add(tween1)
		.add(tween2);

	scene.setTween(timeline);
});

var descs = document.querySelectorAll('.desc');

descs.forEach(function(el) {
	var scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook: 0.8,
		duration: 100,
		tweenChanges: true,
	});

	controller.addScene(scene);

	var timeline = new TimelineMax();

	var tween1 = TweenMax.to(el, 2, {opacity: 1});

	timeline
		.add(tween1);

	scene.setTween(timeline);
});

var middleScene = new ScrollMagic.Scene({
	triggerElement: '#background',
	triggerHook: 0.8, 
	duration: 500,
	tweenChanges: true,
});

controller.addScene(middleScene);

var middleTimeline = new TimelineMax();

var tween1 = TweenMax.to('#background', 5, {y: 50, x: 100});
var tween2 = TweenMax.to('#middle', 5, {y: -20, x: -45});
var tween3 = TweenMax.to('#foreground', 5, {y: 40, x: 50});

middleTimeline
	.add(tween1, 0)
	.add(tween2, 0)
	.add(tween3, 0);

middleScene.setTween(middleTimeline);

//MENU

var menu_link = document.querySelector('#menu_link');
var overlay = document.querySelector('#overlay');
var menu = document.querySelector('#menu');

var displayed = false;

menu_link.addEventListener('click', function(e) {
	if (displayed) {
		TweenMax.to('#menu', .8, {opacity: 0});
		TweenMax.set('#menu', {visibility: 'hidden', delay: .8});
		TweenMax.to('#overlay', 1, {opacity: 0});
		TweenMax.set('#overlay', {visibility: 'hidden', delay: 1});
		displayed = false;
	} else {
		TweenMax.set('#menu', {visibility: 'visible'});
		TweenMax.to('#menu', .8, {opacity: 1});
		TweenMax.set('#overlay', {visibility: 'visible'});
		TweenMax.to('#overlay', 1, {opacity: 0.7});
		displayed = true;
	}
});

overlay.addEventListener('click', function(e) {
	TweenMax.to('#menu', .8, {opacity: 0});
	TweenMax.set('#menu', {visibility: 'hidden', delay: .8});
	TweenMax.to('#overlay', 1, {opacity: 0});
	TweenMax.set('#overlay', {visibility: 'hidden', delay: 1});
	displayed = false;
});