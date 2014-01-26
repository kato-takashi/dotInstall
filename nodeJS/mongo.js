var MongoClient = require('mongodb').MongoClient,
	settings = require('./settings.js');
MongoClient.connect("mongodb://" + settings.host + "/" + settings.db, function(err, db){
	if(err){
		return console.dir(err);
	}
	console.log("connected to db");
	db.collection("users", function(err, collection){
		var docs = [
		{name : "taguchi", score: 40},
		{name : "kato", score: 80},
		{name : "amano", score: 60},
		];

		// collection.insert(docs, function(err, result){
		// 	console.dir(result);
		// });
		// 
		var stream = collection.find().stream();
		stream.on("data", function(item){
			console.log(item);
		});
		stream.on("end", function(){
			console.log("finished")
		});
	});
});