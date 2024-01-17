$(document).ready(function(){
	// set var to root domain
	var is_root = location.pathname == "/";

	// check if current page is root domain
	if (is_root) {
		var homeContent = document.querySelector("#content");
		var contentClasses = homeContent.classList;

		// add new css class to content div to add bg image and styling
		contentClasses.add("landing");

		// add photo credit to bottom of page
		$(".panel-footer").append("<p class='photoCaption'>Mike Kelley\'s art studio, 2009. \&nbsp\; Photo by\: Gautier Deblonde</p>");
	}
});
