$(document).ready(function(){
	$('.page').hide();
		$('.page1').show();
	$('.nav-item').click(function(){
		var show = $(this).attr('name');
		switch(show) {
			case 'button1':
				$('.page').hide();
				$('.page1').fadeIn();
				break;
			case 'button2':
				$('.page').hide();
				$('.page2').fadeIn();
				break;
			case 'button3':
			$('.page').hide();
				$('.page3').fadeIn();
				break;
			case 'button4':
				$('.page').hide();
				$('.page4').fadeIn();
				break;
			default:
				$('.page').hide();
				$('.page2').fadeIn();
		}
	});
});
