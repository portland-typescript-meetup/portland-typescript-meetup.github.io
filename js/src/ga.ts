declare function ga(a: string, b: string, c?: string): void;

if (location.host === 'typescriptpdx.com') {
	(function(i: any, s: any, o: string, g: string, r: string, a?: any, m?: any) {
	i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * <any> new Date(); a = s.createElement(o),
	m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-65174915-1', 'auto');
	ga('send', 'pageview');
}
