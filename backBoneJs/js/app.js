(function(){
	var Task = Backbone.Model.extend({
	 defaults:{
	 	title:'do it!',
		completed: false
		}
	});
	var task1 = new Task({
		completed: true
	});
	var task2 = new Task({
		title:'do it yourself!',
		completed: true
	});
	
	console.log(task1.toJSON(), task2.toJSON());
})();