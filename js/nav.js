
/* Toggle between adding and removing the "responsive" class 
to #menu when the user clicks on the icon */

function mobileMenu() {
	var x = document.getElementById("menu");

	if (x.className === "mobile_nav") {
		x.className += " responsive";
	} else {
		x.className = "mobile_nav";
	}
	
}

