(function() {
	var isSSl = window.location.protocol;
	if(isSSl == 'http:') window.location.href = 'https://' + window.location.host + window.location.pathname + window.location.search;
})();
