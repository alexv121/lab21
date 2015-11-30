var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/palindromeView',{
    controller: 'palindromeCtrl',
    templateUrl: "palindromeView.html"
  });

  $routeProvider.otherwise({redirectTo:"/palindromeView"})

});
