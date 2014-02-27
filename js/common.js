$(document).ready(function() {

function slider () {
	var el = $('.slider'),
			next = el.find('.slider__next'),
			prev = el.find('.slider__prev'),
			item = el.find('.slider__item');
	next.on('click', function(){
		var current = el.find('.slider__item.is-active');
		current.removeClass('is-active');
		if (current.next().length) {current.next().addClass('is-active');}
		else{item.first().addClass('is-active');}
	});
	prev.on('click', function(){
		var current = el.find('.slider__item.is-active');
		current.removeClass('is-active');
		if (current.prev().length) {current.prev().addClass('is-active');}
		else{item.last().addClass('is-active');}
	});
}
slider();

});