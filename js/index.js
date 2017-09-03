$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.m2_btn a img').each(function(index){
		$(this).click(function(){
			for(var i=0;i<4;i++){
				$('.m2_btn a img').eq(i).attr('src','images/btn'+(i+1)+'.png');
				$('.show_box').hide()
			};
			$(this).attr('src','images/btn'+(index+1)+'_2.png');
			$('.show_box').eq(index).show()
		})
	})
	$('.m6_btn li').click(function(){
		$('.m6_btn li').removeClass('active').eq($(this).index()).addClass('active');
		$('.m6_show').hide().eq($(this).index()).show()
	})
})