if (location.host === 'typescriptpdx.com') {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-65174915-1', 'auto');
    ga('send', 'pageview');
}
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
$('.post-content').fitVids();
//# sourceMappingURL=ts-bundle.js.map