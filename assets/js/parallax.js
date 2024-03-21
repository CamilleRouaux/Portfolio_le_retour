let space = document.getElementById('space');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	console.log(value);
	space.style.left = value * 0.25 + 'px';
	mountains_behind.style.top = value * 0.3 + 'px';
	mountains_front.style.top = value * 0 + 'px';
})