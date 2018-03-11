var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '#mountain',
	triggerHook: 0.8,
	duration: 791,
});

controller.addScene(scene);

var timeline = new TimelineMax();
var tween1 = TweenMax.set('#mountain', {perspective: 1500, perspectiveOrigin: '100% 100%'});
var tween2 = TweenMax.from('.background', 3, {z: 300 });
var tween3 = TweenMax.from('.middle', 3, {z: 450});
var tween4 = TweenMax.from('.foreground', 3, {z: 700});
var tween5 = TweenMax.from('.mountain_content', 1, {x: 400});

timeline
		.add(tween1)
		.add(tween2, 0)
		.add(tween3, .2)
		.add(tween4, .2)
		.add(tween5, 1);

scene.setTween(timeline);