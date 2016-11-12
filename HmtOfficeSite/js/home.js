$(document).ready(function () {
	// body...
	$(".work_post").each(function() {
		 /* iterate through array or object */
		 $(this).hover(function() {
		 	$(".mask",this).stop().animate({opacity: 0.5,top: 0},{queue:false,duration:300});
		 },function() {
		 	/* Stuff to do when the mouse leaves the element */
		 	$(".mask",this).stop().animate({opacity: 0,top: "50%"},{queue:false,duration:300});

		 });
	});
});