angular.module('bookApp').controller('mainController', function($scope, bookService) {

  $scope.bookBump = function() {
    $('.book-letters').hover(function() {
      $(this).css({'top': '-12px', 'position': 'relative', 'margin-bottom': '100px'});
    }, function() {
      $(this).css({'top': '0px', 'position': 'relative'});
    });
  };
  // $scope.bookBump();

});
