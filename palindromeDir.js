angular
  .module('serviceModule') //getter

  .directive('wordresult', function(){
    return {
      restrict: 'EA',
      template: '<h1>{{word}} is {{not}} a palindrome</h1>',
      replace: false
    };
  });
