$(document).ready(function() {
	$(".page_nav>ul>li>a").each(function() {
	$(this).hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".page_nav>ul>li>a").removeClass('active');
		$(this).addClass('active');
	});
});
	var nodes = $(".history_garlley");
	var count = 0;
	var some = 0;
	// $(".page_nav>ul>li").each(function(){
	// 	$(this).click(function () {
	// 		// body...
	// 		var dataindex = $(this).attr("data-index");//第data-index个focus
	// 		for(var i = 0; i < nodes.length; i++){
	// 			if($(nodes[i]).hasClass('pt-page-current')){
					
	// 				// }//点击对应的内容直接返回
	// 				if($(nodes[i]).attr("data-index")==dataindex){
						
	// 					 return true;
	// 				}
	// 				else{
	// 					var currentindex = i;	
	// 					break;
	// 				}
					
	// 			}
			
	// 		}
	// 		$(".history_garlley").removeClass('pt-page-rotateFall').eq(currentindex).addClass('pt-page-rotateFall');
	// 		$(nodes[currentindex]).addClass('page-z-index');
	// 		$(nodes[dataindex]).addClass('pt-page-current');
	// 		setTimeout(function(){
	// 			// $(nodes[i]).removeClass('pt-page-current');
	// 			// $(nodes[dataindex]).addClass('pt-page-current');
	// 			$(nodes[currentindex]).removeClass('pt-page-current');
	// 			$(".history_garlley").removeClass('page-z-index');
	// 		},700);
			
	// 	});
	// });
	function dropCut(dataindex){
		for(var i = 0; i < nodes.length; i++){
				if($(nodes[i]).hasClass('pt-page-current')){
					
					// }//点击对应的内容直接返回
					if($(nodes[i]).attr("data-index")==dataindex){
						
						 return true;
					}
					else{
						var currentindex = i;	
						break;
					}
					
				}
			
		}
		$(".history_garlley").removeClass('pt-page-rotateFall').eq(currentindex).addClass('pt-page-rotateFall');
			$(nodes[currentindex]).addClass('page-z-index');
			$(nodes[dataindex]).addClass('pt-page-current');
			setTimeout(function(){
				// $(nodes[i]).removeClass('pt-page-current');
				// $(nodes[dataindex]).addClass('pt-page-current');
				$(nodes[currentindex]).removeClass('pt-page-current');
				$(nodes[currentindex]).children('.txt_mask').removeClass('.txt_mask_style');
				$(nodes[dataindex]).children('.txt_mask').addClass('txt_mask_style');
				$(".history_garlley").removeClass('page-z-index');
			},700);
	}
	$(".page_nav>ul>li").each(function(){
		$(this).click(function(){
			var dataindex = $(this).attr("data-index");//第data-index个focus
			dropCut(dataindex);
		});
	});
	$(".slide-arrow").click(function(){
		var controlIndex;
		for(var i = 0; i < nodes.length;i++){
			if($(nodes[i]).hasClass('pt-page-current')){
				break;
			}
		}
		if($(this).hasClass('left')){
			if(i == 0){
				controlIndex = nodes.length - 1;
			}
			else{
				controlIndex = i - 1;
			} 	
		}
		else if($(this).hasClass('right')){
			if(i == nodes.length - 1){
				controlIndex = 0;
			}
			else{
				controlIndex = i + 1;

			}

		}
	   dropCut(controlIndex);
	   $(".page_nav>ul>li>a").removeClass('active').eq(controlIndex).addClass('active');
	});
	
});