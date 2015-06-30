
var contador=1;
$(document).ready(function() {
	$(".menu_bar").click(function() {
		/* Act on the event */
		if(contador==1){
			$("nav").animate({
				left: '0'});
			contador=0;
		}else{
			contador=1;
			$("nav").animate({
				left: '-100%'});
		}
	});
	$('.submenu').click(function() {
		/* Act on the event */
		$(this).children('.children').slideToggle();
	});
	
});