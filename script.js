function scrollToTop() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


window.onload = function() {
	const backToTopButton = document.getElementById("backToTopButton");

	window.onscroll = function() {
		backToTopButton.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
			? "block"
			: "none";
	};
}
