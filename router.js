function route(pathname, handle) {
	console.log('About to route for: ' + pathname);
	if(typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		return '404 Not Found!';
	}
}

exports.route = route;

