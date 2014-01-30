var express = require('express'),
	app = express();

	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');

	//middleware
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('index.ejs', {title:'title'});	
	
});

app.listen(3000);
console.log("server starting...http://127.0.0.1:3000/");