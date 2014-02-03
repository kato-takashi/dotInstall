//post.js
var posts = [
	{title: 'title0',body: 'body0'},
	{title: 'title1',body: 'body1'},
	{title: 'title2',body: 'body2'},
	{title: 'title3',body: 'body3'},
]
exports.index = function(req, res){
	res.render('posts/index.ejs');
}