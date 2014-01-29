var express = require('express'),
	app = express();
	//middleware
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
	console.log('my custom middleware nodemon!');
	next();
});
app.get('/hello.txt', function(req, res){
	res.send('hello from app.js');	
	
});

app.listen(3000);
console.log("server starting...http://127.0.0.1:3000/");