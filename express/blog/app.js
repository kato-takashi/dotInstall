//app.js
var express = require('express'),
    app = express();
    post = require('./routes/post');
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');

        //middleware
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());

        app.use(express.logger('dev'));
        app.use(app.router);

        //routiong
        app.get('/', post.index );
        app.get('/posts/:id([0-9]+)', post.show);
        app.get('/posts/new', post.new);
        app.post('/posts/create', post.create); 
        // app.get('/posts/:id', post.show);
        // app.get('/posts/:id/edit', post.edit);
        // app.put('/posts/:id', post.update);
        // app.delete('/posts/:id', post.destroy);
        
        app.listen(3000);
        console.log("server starting...http://127.0.0.1:3000/");
