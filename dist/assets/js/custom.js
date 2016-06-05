$(document).ready(function() {
	
	$('.modal-trigger').on('click', function(event) {

		var targetModal = $(this).data('target');
		var a = $(targetModal).hasClass('active');
		if(a){			
			$(targetModal).addClass('animated fadeOutDown')
						  .one(
							'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
						   	function(){
						   		$(targetModal).removeClass('animated fadeOutDown');
						   		$(targetModal).removeClass('active');
						   	});
			
		}else{
			$(targetModal).addClass('active');
			$(targetModal).addClass('animated fadeInUp')
						  .one(
							'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
						   	function(){
						   		$(targetModal).removeClass('animated fadeInUp');
						   	});
			var active_tab = $(this).data('tab-target');
			$('.am-tab.am-tab-containt').removeClass('active');
			$('.am-tab.am-tab-containt[data-tab='+active_tab+']').addClass('active');

			$('.am-tab .item').removeClass('active');
			$('.am-tab .item[data-tab-target='+active_tab+']').addClass('active'); 
		}
	});

	$('.close-tab').on('click', function(event) {
		var targetModal = $(this).data('target');		
		$(targetModal).addClass('animated fadeOutDown')
					  .one(
						'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					   	function(){
					   		$(targetModal).removeClass('animated fadeOutDown');
					   		$(targetModal).removeClass('active');
					   	});
	});

	$('.am-tab .item').on('click', function(event) {
		$('.am-tab .item').removeClass('active');
		$(this).addClass('active');
		var active_tab = $(this).data('tab-target');
		$('.am-tab.am-tab-containt').removeClass('active');
		$('.am-tab.am-tab-containt[data-tab='+active_tab+']').addClass('active');
	});

	$('#trigger-att').on('click', function(event) {
		$('#attachment').trigger('click')
	});

});