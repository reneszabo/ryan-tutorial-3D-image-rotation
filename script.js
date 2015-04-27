//Waiting till DOM is ready
$(function() {
	var $dots = $('.dot');

	$dots.on('click', function() {
		var index = $dots.index($(this));
		$('.image-rotator').css({
			transform : 'rotateX('+  index * 90 + 'deg)'
		});
	});

});