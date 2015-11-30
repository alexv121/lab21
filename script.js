var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/palindromeView',{
    controller: 'palindromeCtrl',
    templateUrl: "palindromeView.html"
  });
  $routeProvider.when('/view2',{
  // controller: 'ctrlDisplay',
  templateUrl: "view2.html"
});

  $routeProvider.otherwise({redirectTo:"/palindromeView"})

});
