let currentForms, nextForm, previousForm;  
let left, opacity, scale; 
let animating = false; 

$(".next").click(function() {
  animating ? false : true;
	
	currentForms = $(this).parent();
	nextForm = $(this).parent().next();
	
	$("#progress-bar li").eq($("fieldset").index(nextForm)).addClass("progress-bar__active");
	nextForm.show(); 

	currentForms.animate({
    opacity: 0
  }, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			currentForms.css({'transform': 'scale('+scale+')'});
			nextForm.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function() {
			currentForms.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	animating ? false : true;
	
	currentForms = $(this).parent();
	previousForm = $(this).parent().prev();

	$("#progress-bar li").eq($("fieldset").index(currentForms)).removeClass("progress-bar__active");
	
	previousForm.show(); 
	currentForms.animate({
    opacity: 0
  }, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1 - now) * 50)+"%";
			opacity = 1 - now;
			currentForms.css({'left': left});
			previousForm.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			currentForms.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".submit").click(() => {
	return true;
});
