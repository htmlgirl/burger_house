
$(document).ready(function(){
	$('.fn_slick_slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		prevArrow: false,
		nextArrow: false
	});
});

window.addEventListener('DOMContentLoaded', function() {
	let burger = document.querySelector('.header_burger');
	burger.addEventListener('click', function () {
		this.classList.toggle("open");
	});
});