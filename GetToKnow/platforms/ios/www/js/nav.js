
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    var sidenav = document.getElementsByClassName("sideNav");
    Array.prototype.forEach.call(sidenav, function(el) {
    	el.style.width = "20em";
    	console.log(el);
	});
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    var sidenav = document.getElementsByClassName("sideNav");
    Array.prototype.forEach.call(sidenav, function(el) {
    	el.style.width = "0";
	});
}

