var app =  angular.module('serviceModule');

app.factory('instagram', ["$http",function($http){

	return {
		fetchPics: function(callback){

			var endPoint = "https://api.instagram.com/v1/media/popular?client_id=e220e1d0806b425586c33caf7cb3f4aa&callback=JSON_CALLBACK";
			
			$http.jsonp(endPoint).success(function(response){
				callback(response.data);
			});
		}
	}
}]);