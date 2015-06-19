function fitHeight(target: Window|Document|HTMLElement, locator: string, minWidth: number = 640) {
	var minHeight = $(target).innerHeight();
	var winWidth = $(target).innerWidth();
	if(winWidth >= minWidth) {
		$(locator).css('minHeight', minHeight);
	} else {
		$(locator).css('minHeight', '');
	}
}