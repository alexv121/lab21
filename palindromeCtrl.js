var app = angular.module('serviceModule');

app.controller('palindromeCtrl', function($scope, palindromeService) {

  var storedWord = palindromeService.get() // storing input
  $scope.store =  function(word){

    function reverse(word){
    return word.split('').reverse().join('');

  }

  function isPalindrome(word){
    word = word.split(' ').join('').toLowerCase();

    if (word === reverse(word)){
        $scope.not="";
        return 'Yay, its true';
        }
        $scope.not="not";
        return 'Nope, false';

  }
    console.log(isPalindrome(word));
    palindromeService.save(word)

  };

  $scope.showPopup = [];


    var wordCheck = palindromeService.get() //display ctrl
    $scope.word =  wordCheck.word;

  });
