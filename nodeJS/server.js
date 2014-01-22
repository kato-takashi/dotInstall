var http =require("http");
var	fs = require('fs');
var settings = require('./settings.js');
console.log(settings);
var msg;

var server = http.createServer();
server.on('request', function(req, res){
	fs.readFile('./public_html/hello.html', 'utf-8', function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('not found');
			return res.end();
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});
server.listen(settings.port, settings.host);
console.log("server listening　http://127.0.0.1:8124....");