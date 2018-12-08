$(document).ready (function() {
	
	
	$(".header__burger-nav").on("click", function(){
        
        $(".header ul").toggleClass("open");
        
    });
	
    
   $('.js-wp-2').waypoint(function(direction) {
       
       $('.js-wp-2').addClass('opacity--one animated slideInUp');
       
   }, {
		offset: '70%'
	});
    
    $('.js-wp-3').waypoint(function(direction) {
       
       $('.js-wp-3').addClass('opacity-one animated  fadeIn');
       
   }, {
		offset: '70%'
	});    
    
    
    
    $(".hero__iphone-btn").delay(2300).animate( {bottom: "+=-3"}, 300);
    $(".hero__iphone-btn").delay(300).animate( {top: "+=-3"}, 100);  
	
	
	    
    $('.js-wp-4').waypoint(function(direction) {
       
       $('.js-wp-4').addClass('opacity--one animated slideInLeft');
       
   }, {
		offset: '70%'
	}); 
	
	
	$('.js-wp-5').waypoint(function(direction) {
       
       $('.js-wp-5').addClass('opacity--one animated slideInDown');
       
   }, {
		offset: '70%'
	}); 
	
	
	    $('.js-wp-6').waypoint(function(direction) {
       
       $('.js-wp-6').addClass('opacity--one animated slideInRight');
       
   }, {
		offset: '70%'
	}); 
    
    
    
});