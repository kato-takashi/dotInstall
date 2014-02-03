var express = require('express'),
	app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

	//middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/new', function(req, res){
	res.render('new');
});

app.post('/create', function(req, res){
	res.send(req.body.name);	
});


app.listen(3000);
console.log("server starting...http://127.0.0.1:3000/");