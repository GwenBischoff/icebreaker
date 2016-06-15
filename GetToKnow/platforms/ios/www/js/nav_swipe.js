$(document).on("ready", function(e) {
	$(document).on("swipeleft swiperight", 
	function(e) {
		var sidenav = document.getElementById("sideNav");
		if ( sidenav.style.width !== "0") {
			if ( e.type === "swiperight") {
				sidenav.style.width = "20em";
			} else if ( e.type === "swipeleft" ) {
				sidenav.style.width = "0";
			}
		}
	});
});