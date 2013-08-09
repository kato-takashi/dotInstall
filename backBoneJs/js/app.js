(function(){
	var Task = Backbone.Model.extend({
	 defaults:{
	 	title:'do it!',
			completed: false
		}, 
		toggle:function(){
			this.set('completed', !this.get('completed'));
		}
	});
	var task1 = new Task({
		completed: true
	});
	//task1.set('title', 'newTitle');
	console.log(task1.toJSON());
	task1.toggle();
	console.log(task1.toJSON());
	
})();