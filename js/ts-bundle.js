function fitHeight(target, locator, minWidth) {
    if (minWidth === void 0) { minWidth = 640; }
    var minHeight = $(target).innerHeight();
    var winWidth = $(target).innerWidth();
    if (winWidth >= minWidth) {
        $(locator).css('minHeight', minHeight);
    }
    else {
        $(locator).css('minHeight', '');
    }
}
fitHeight(document, '.navbar');
setInterval(function () {
    fitHeight(document, '.navbar');
}, 500);
$('a').filter(function (i, element) {
    return element['hostname'] && element['hostname'] !== location.hostname;
}).attr("target", "_blank");
//# sourceMappingURL=ts-bundle.js.map