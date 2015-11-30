var app = angular.module('serviceModule');

app.controller('palindromeCtrl', function($scope, palindromeService) {
  palindromeService.then(function(response){
    $scope.display = hi;
  });

});
