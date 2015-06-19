interface Element {
	[key: string]: string|Function|Object
}
$('a').filter((i, element) => {
	return element['hostname'] && element['hostname'] !== location.hostname;
}).attr("target","_blank");