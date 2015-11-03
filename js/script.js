$(document).ready(function(){

	$('.picbox').hover(function() {
		$(this).fadeTo('slow',1);
	}, function() {
		$(this).fadeTo('slow',.5);
	}
	);

	// $('.picbox').click(function() {
	// 	$(this).toggle('slow');
	// });

	// $('.btn').click(function() {
	// 	$('.box').fadeIn('fast');
	// });
});