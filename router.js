function route(pathname, handle, response) {
	console.log('About to route for: ' + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname](response);
	} else {
		var message = '404 Not Found!';
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write(message);
		response.end();
	}
}

exports.route = route;

