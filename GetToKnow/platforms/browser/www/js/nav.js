$( document ).ready(function() {
	var sidenav
	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	$(".sideNavIcon").click(function() {
	    sidenav = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenav, function(el) {
	    	el.style.width = "20em";	    	
		});
	});

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	$(".closeBtn").click(function() {
	    sidenav = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenav, function(el) {
	    	el.style.width = "0em";	    	
		});
	});

	$(".sideNavItem").click(function() {
		sidenav = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenav, function(el) {
	    	el.style.width = "0em";	    	
		});
	});	

	$(".menuItem").click(function(){
		var clickedPanel = jQuery(this);
		clickedPanel.addClass(" clickResponse");
		setTimeout(function(){
			clickedPanel.removeClass(" clickResponse");}, 500);
	});
});