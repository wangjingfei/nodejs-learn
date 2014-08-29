var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(response) {
	console.log('Request: start().');
	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; '+
		'charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload">' +
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request) {
	console.log('Request: upload().');

	var form = formidable.IncomingForm();
	form.parse(request, function(error, fields, files){
		console.log('File path: ' + files.upload);
		fs.renameSync(files.upload.path, '/tmp/pic.jpg');
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write('Received Img: <br>');
		response.write('<img src="/show"/>');
		response.end();
	});
}
function show(response, request) {
	console.log("Request handler 'show' was called.");
	fs.readFile("/tmp/pic.jpg", "binary", function(error, file) {
		if(error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "image/png"});
			response.write(file, "binary");
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;

