fitHeight(document, ['.navbar', '.sidebar']);

$(window).bind('resize', () => {
	setTimeout(() => {
		fitHeight(document, ['.navbar', '.sidebar']);
	}, 500);
	});