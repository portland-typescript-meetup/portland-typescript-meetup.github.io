function fitHeight(target: Window|Document|string, locator: string|string[], minWidth: number = 640) {
	var locators: string[] = [];
	if (typeof locator === 'string') {
		locators = [locator];
	} else {
		locators = locator;
	}
	for (var i = 0; i < locators.length; i++) {
		var el = $(locators[i]),
			minHeight = $(target).innerHeight(),
			locatorHeight = el.outerHeight(),
			winWidth = $(window).innerWidth(),
			winHeight = $(window).innerHeight();

			if (minHeight < winHeight) {
				minHeight = winHeight;
			}

			if (winWidth >= minWidth) {
				if (locatorHeight <= minHeight) {
					el.css('minHeight', minHeight);
				} else {
					el.css('minHeight', '');
					fitHeight(target, locator, minWidth);
				}
			} else {
				el.css('minHeight', '');
			}

		// if (winWidth >= minWidth && locatorHeight <= minHeight) {
		// 	el.css('minHeight', minHeight);
		// } else {
		// 	el.css('minHeight', '');
		// }
	}
}