$(document).foundation();
function fitHeight(target, locator, delay, minWidth) {
    if (delay === void 0) { delay = 500; }
    if (minWidth === void 0) { minWidth = 640; }
    resize();
    setTimeout(resize, delay);
    function resize() {
        var locators = [];
        if (typeof locator === 'string') {
            locators = [locator];
        }
        else {
            locators = locator;
        }
        for (var i = 0; i < locators.length; i++) {
            var el = $(locators[i]), minHeight = $(target).innerHeight(), locatorHeight = el.outerHeight(), winWidth = $(window).innerWidth(), winHeight = $(window).innerHeight();
            if (minHeight < winHeight) {
                minHeight = winHeight;
            }
            if (winWidth >= minWidth) {
                if (locatorHeight <= minHeight) {
                    el.css('minHeight', minHeight);
                }
                else {
                    el.css('minHeight', '');
                    fitHeight(target, locator, minWidth);
                }
            }
            else {
                el.css('minHeight', '');
            }
        }
    }
}
var sidebarElements = ['.navbar', '.sidebar'];
fitHeight(document, sidebarElements, 3000);
$(window).on('resize', function () {
    fitHeight(document, ['.navbar', '.sidebar'], 500);
    setTimeout(function () {
        $('.twitter-timeline').css('width', $('.twitter-timeline').parent().css('width'));
    }, 500);
});
fitHeight(document, '.twitter-timeline', 1000);
$('a').filter(function (i, element) {
    return element['hostname'] && element['hostname'] !== location.hostname;
}).attr("target", "_blank");
//# sourceMappingURL=ts-bundle.js.map