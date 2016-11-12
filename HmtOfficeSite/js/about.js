$(document).ready(function() {
	$(".member_item").each(function () {
		// body...
		$(this).mouseover(function () {
			// body...
			$(this).children('.member_mask').addClass('diff_mask');
		});
		$(this).mouseout(function() {
			/* Act on the event */
			$(this).children('.member_mask').removeClass('diff_mask');
		});
	});

	 var nodes = $(".item_box");//获取li
	 var styles = [
        {
          transform: 'scale(0.8)',
          left:'5%'
        },
        {
          transform: 'scale(1)',
          left:'35%'
        },
        {
          transform: 'scale(0.8)',
          left:'65%'
        }
      ];
      //对li.item_box分别设置css样式
      function attach() {
        nodes.each(function(i) {
          $(this).css({
            transform: styles[i].transform,
            left: styles[i].left
          });
          $(this).attr('data-index', i);
        });
        for (var i = 0; i < nodes.length; i++) {
        	console.log(nodes[i].className);
        }
        // var dataIndex = $(nodes[1]).attr('class').match(/item\_(\d){1}/)[1];//取处于中间位置的
        // console.log("dataIndex="+dataIndex);
        // $('.intro_box').hide().eq(dataIndex).show();
      }
      attach();
 

     $(".item_box").on('click',function () {
     	// body...
     	var index = +$(this).attr("data-index");
     	console.log("index = "+ index);
     	var flag = index - 1;
        if(index == 1){
        	return true;
        }
        if(flag > 0){
        	(function () {
        		// body...
            //
        		for(var i=0;i<flag;i++){
        			var firstItem = nodes[0];
        			nodes.push(firstItem);
        			[].shift.call(nodes);

        		}
        		attach();
            var dataIndex = $(nodes[1]).attr('class').match(/item\_(\d){1}/)[1];//取处于中间位置的
            console.log("dataIndex="+dataIndex);
            $('.intro_box').hide().eq(dataIndex).show();
            $(".back").css("display","block");
        	}());
        }
        else{
        	(function(){
        		for (var i = 0; i < Math.abs(flag); i++) {
        			var lastItem = nodes[nodes.length-1];
        			[].unshift.call(nodes,lastItem);
        			[].pop.call(nodes);

        		}
        		attach();
            var dataIndex = $(nodes[1]).attr('class').match(/item\_(\d){1}/)[1];//取处于中间位置的
            console.log("dataIndex="+dataIndex);
            $('.intro_box').hide().eq(dataIndex).show();
              $(".back").css("display","block");
        	}());
        }

     });
     $("#more").click(function () {
       // body...
    
      var delta = 2;
      for (var i = 0; i < delta; i++){
          var moreItem = nodes[0];
          nodes.push(moreItem);
          [].shift.call(nodes);
      }
      attach();
            var dataIndex = $(nodes[1]).attr('class').match(/item\_(\d){1}/)[1];//取处于中间位置的
            console.log("dataIndex="+dataIndex);
            $('.intro_box').hide().eq(dataIndex).show();

     });

     $(".back").click(function() {
       // body...
       $(".intro_box").css("display","none");
       $(this).css("display","none");

     });

      var interval = setInterval(function() {
          $("#join_us").animate({
              "bottom": "30px"
          }, 500).animate({
              "bottom": "20px"
          }, 500);
      }, 1000);

     

});

