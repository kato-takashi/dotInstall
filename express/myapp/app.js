var express = require('express'),
	app = express();
	//middleware
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.param('id', function(req, res, next, id){
	var users = ['kato', 'takashi', 'Chiharu'];
	req.params.name = users[id];
	next();
});

app.get('/hello/:id', function(req, res){
	res.send('hello ' + req.params.name);
});

app.get('/bye/:id', function(req, res){
	res.send('bye ' + req.params.name);
});

app.listen(3000);
console.log("server starting...http://127.0.0.1:3000/");