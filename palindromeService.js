var app = angular.module('serviceModule')

app.factory('palindromeService', function(){
  var storedWord = '';

  return {
    save: function(word){ //this is an object - key value pair
      storedWord = word;
    },
      get: function(){
        return {
                word:storedWord,
              };
          }
    };
});
