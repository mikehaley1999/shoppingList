$(document).ready(function() {
	$('#shopping-list').on('click', '.delete', function(event) {
		event.preventDefault();
	$(this).closest('li').remove();
	})

