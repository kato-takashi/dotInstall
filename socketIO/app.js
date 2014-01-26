//app.js
var app = require('http').createServer(handler), 
	io = require('socket.io').listen(app),
	fs = require('fs');
io.set( "log level", 3);
app.listen(8124);
io.set('log level', 1);
function handler(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		if(err){
			res.writeHead(500);
			return res.end('Error');
		}
		res.writeHead(200);
		res.write(data);
		res.end();
	});
}
io.sockets.on('connection', function(socket){
	socket.on('emit_from_client', function(data) {
		console.log(data);
	});
});
