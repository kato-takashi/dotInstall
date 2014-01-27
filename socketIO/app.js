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
		//console.log(data);
		//
		//emit 接続しているソケットのみ
		//broadcast.emit 接続しているソケット以外全部
		//io.sockets.emit 接続しているソケットすべて
		//
		io.sockets.emit('emit_from_server', '['+ socket.id +']: '+ data);

	});
});
