/*---------index page---------*/

$(document).ready(function(){
		
$('.complete').hide();
		
$('#add').on('click',function(){
	$('.myList').val('');
});

$('.con').on('click',function(){
  $('.todo-wrapper').hide();
  $('.complete').show();
});

$('.cross, .to').on('click',function(){
  $('.todo-wrapper').show();
  $('.complete').hide();
}); 

});

/*--------------Login Page--------**/

$(".log-in").click(function(){
	$(".signIn").addClass("active-dx");
	$(".signUp").addClass("inactive-sx");
	$(".signUp").removeClass("active-sx");
	$(".signIn").removeClass("inactive-dx");
});

$(".back").click(function(){
	$(".signUp").addClass("active-sx");
	$(".signIn").addClass("inactive-dx");
	$(".signIn").removeClass("active-dx");
	$(".signUp").removeClass("inactive-sx");
});

/*$('.checkIt').on('change',function(){
	$('.item').css('text-decoration','line-through');*/