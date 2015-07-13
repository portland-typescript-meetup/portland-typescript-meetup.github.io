var sidebarElements = ['.navbar', '.sidebar'];

fitHeight(document, sidebarElements, 3000);

$(window).bind('resize', () => {
	fitHeight(document, ['.navbar', '.sidebar'], 500);
});

fitHeight(window, '.twitter-timeline', 1000);