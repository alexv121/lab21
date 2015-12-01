app.controller('serviceModule', ['$scope', 'instagram', function($scope, instagram){

	$scope.pics = [];
	instagram.fetchPics(function(data){

		$scope.pictures = data;
	});
}]);