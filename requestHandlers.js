var exec = require('child_process').exec;

function start(response) {
	console.log('Request: start().');
	exec('ls -lah /tmp', function(error, stdout, stderr){
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function upload(response) {
	console.log('Request: upload().');
}

exports.start = start;
exports.upload = upload;

