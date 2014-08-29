function start() {
	console.log('Request: start().');
	return 'Hello Start.';
}

function upload() {
	console.log('Request: upload().');
	return 'Hello Upload.';
}

exports.start = start;
exports.upload = upload;

