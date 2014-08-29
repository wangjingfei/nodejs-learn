var http = require('http');
var url = require('url');

var start = function(router, handle) {
	http.createServer(function(request, response) {
		var postData = '';
		var pathname = url.parse(request.url).pathname;
		console.log('Request for: ' + pathname);

		//request.setEncoding('utf8');
		//request.addListener('data', function(postDataChunk) {
		//postData += postDataChunk;
		//console.log('post data trunk received: ' + postDataChunk);
		//});
		//request.addListener('end', function() {
		router.route(pathname, handle, response, request);
		//});
	}).listen(8888);
}

exports.start = start;

console.log('Server Started');
