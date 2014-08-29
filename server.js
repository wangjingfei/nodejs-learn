var http = require('http');
var url = require('url');

var start = function(router) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('Request for: ' + pathname);
		router.route(pathname);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}).listen(8888);
}

exports.start = start;

console.log('Server Started');
