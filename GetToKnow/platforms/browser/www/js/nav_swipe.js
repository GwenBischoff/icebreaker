$(document).on("ready", function(e) {
	$(document).on("swipeleft swiperight", 
	function(e) {
		var sidenavs = document.getElementsByClassName("sideNav");
	    Array.prototype.forEach.call(sidenavs, function(sidenav) {
				if ( e.type === "swiperight") {
					console.log("open");
					sidenav.style.width = "20em";
				} 
				else if ( e.type === "swipeleft" ) {
					sidenav.style.width = "0em";
					console.log("close");
				}
		});		
	});
});