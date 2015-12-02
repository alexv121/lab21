var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){

  $routeProvider
    .when('/',{
    })

    .when('/palindromeView',{
      controller: 'palindromeCtrl',
      templateUrl: "palindromeView.html"
    })

    .when('/view2',{
    // controller: 'ctrlDisplay',
    controller: 'controllerView2',
    templateUrl: "view2.html"
    });

  $routeProvider.otherwise({redirectTo:"/palindromeView"})

});



