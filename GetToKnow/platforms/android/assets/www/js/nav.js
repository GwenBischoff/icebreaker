$( document ).ready(function() {
	var sidenav
	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
	$(".sideNavIcon").click(function() {
	    sidenav = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenav, function(el) {
	    	console.log("open");
	    	el.style.width = "20em";	    	
		});
	});

	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
	$(".closeBtn").click(function() {
	    sidenav = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenav, function(el) {
	    	console.log("close");
	    	el.style.width = "0em";	    	
		});
	});
});