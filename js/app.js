$(document).ready(function() {
	$('#shopping-list').on('click', '.delete', function(event) {
		event.preventDefault();
		$(this).closest('li').remove();
	})
	$('#shopping-list').on('change','.check-box', function() {
		var input = $(this).closet('li').find('.new-item');
		if ($('.check-box').is(':checked')) {
			$(input).css('textDecoration', 'line-through').css('color', '#ff6666').css('font-style', 'italic');
		}else{
			$(input).css('textDecoration', 'none').css('color', '#000000').css('font-style', 'normal');
		}
	})
	$(document).keydown(function(e) {
		if (e.keyCode == 13) {
		$('#shopping-list').append('<li class="list"><input class="check-box" type="checkbox"><span class="new-item">' + $('input').val() + '</span><a href="#" class="delete">X</a></li>');
			$('#new-list').val($('input').attr(''));
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 27) {
			$('li').remove();
		}
	})
	});
	