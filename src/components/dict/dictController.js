angular.module('bookApp').controller('dictController', function($scope, bookService) {


  $scope.getWord = function(input) {
      bookService.getWord(input).then(function(response) {
        $scope.theWord = response;
      });
    };
    // $scope.getWord();





});
