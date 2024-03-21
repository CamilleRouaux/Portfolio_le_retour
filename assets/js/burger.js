let burger = document.querySelector('.burger');
let hideMenu = document.querySelector('.nav-links');

burger.addEventListener('click', function(e){
	e.preventDefault();
	document.querySelector('.burger').classList.toggle('clicked');
	document.querySelector('.overlay').classList.toggle('show');
	document.querySelector('nav').classList.toggle('show');
	document.querySelector('body').classList.toggle('overflow');
})

hideMenu.addEventListener('click', function(){
	document.querySelector('.burger').classList.remove('clicked');
	document.querySelector('.overlay').classList.remove('show');
	document.querySelector('nav').classList.remove('show');
	document.querySelector('body').classList.remove('overflow');
})