$(document).on("ready", function(e) {
	$(document).on("swipeleft swiperight", 
	function(e) {
		var sidenavs = document.getElementsByClassName("sideNav");
    
	    Array.prototype.forEach.call(sidenavs, function(sidenav) {
			if ( sidenav.style.width !== "0") {
				if ( e.type === "swiperight") {
					sidenav.style.width = "20em";
					$('.gameBtns').button('disable'); 
				} else if ( e.type === "swipeleft" ) {
					sidenav.style.width = "0";
					$('.gameBtns').button('enable');
				}
			}
		});		
	});
});