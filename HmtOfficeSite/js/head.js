$(document).ready(function () {
	// body...
	//hover change the style of nav.li
	$(".navigation>li").each(function () {
		// body...
		$(this).hover(function () {
			// body...
			$(".navigation>li").removeClass('diff_li');
			$(this).addClass('diff_li');
		});
	});
	
});