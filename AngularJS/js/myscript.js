var mainCtrl = function($scope){
	$scope.users = [
		{
			"name":"kato",
			"score":52.22
		},

		{
			"name":"sonoko",
			"score":43.22
		},

		{
			"name":"chiharu",
			"score":25.22
		},
		{
			"name":"sonoko2",
			"score":41.22
		},
		{
			"name":"kimiko",
			"score":23.22
		},
		{
			"name":"emiko",
			"score":33.22
		},
		{
			"name":"kuniyoshi",
			"score":43.22
		},
		{
			"name":"mikio",
			"score":90.22
		}

	];


}

var userItemController = function($scope){
	$scope.increment = function(){
		$scope.user.score++;
	}
}