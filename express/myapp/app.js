var express = require('express'),
	app = express();
app.use(app.router);
app.get('/users/:name?', function(req, res){
	if(req.params.name){
		res.send("hello!　"+req.params.name);
	}else{
		res.send("hello!　nobady");
	}
	
});
app.get('/items/:id([0-9]+)', function(req, res){
	res.send('item no: '+ req.params.id);
});

app.listen(3000);
console.log("server starting...http://127.0.0.1:3000/");