var http = require('http');
var url = require('url');

var start = function(router, handle) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for: ' + pathname);
		router.route(pathname, handle, response);
	}).listen(8888);
}

exports.start = start;

console.log('Server Started');
