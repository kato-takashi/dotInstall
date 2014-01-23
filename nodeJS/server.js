var http =require("http");
var	fs = require('fs');
var ejs = require('ejs');
var settings = require('./settings.js');
var server = http.createServer();
var template = fs.readFileSync('./public_html/hello.ejs', 'utf-8');
var n = 0;

server.on('request', function(req, res){
		n=n+1;
		var data = ejs.render(template, {
			title: "hello",
			content: "<strong>World!</strong>",
			n: n
		});
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening　http://127.0.0.1:8124....");