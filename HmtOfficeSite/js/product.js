var nav_ul = document.getElementsByTagName("ul");
var nav_li = nav_ul[1].getElementsByTagName("li");
var index = 0;
var left_arrow = document.getElementById("left_arrow");
var right_arrow = document.getElementById("right_arrow");
left_arrow.onclick = function () {

	nav_li[index].style.opacity = 0;
	index--;
	if(index == -1){
		index = nav_li.length - 1;
	}
	nav_li[index].style.opacity = 1;
}

right_arrow.onclick = function () {
	
	nav_li[index].style.opacity = 0;
	index ++;
	if(index == nav_li.length){
		index = 0;
	}
	nav_li[index].style.opacity = 1;
}

$(".page_nav>ul>li>a").each(function() {
	$(this).hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".page_nav>ul>li>a").removeClass('active');
		$(this).addClass('active');
	});
});
