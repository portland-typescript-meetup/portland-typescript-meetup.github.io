var sidebarElements = ['.navbar', '.sidebar'];

fitHeight(document, sidebarElements, 3000);

$(window).on('resize', () => {
	fitHeight(document, ['.navbar', '.sidebar'], 500);
	setTimeout(function () {
		$('.twitter-timeline').css('width', $('.twitter-timeline').parent().css('width'));
	}, 500);
});

fitHeight(document, '.twitter-timeline', 1000);