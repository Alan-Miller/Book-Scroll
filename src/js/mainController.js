angular.module('bookApp').controller('mainController', function($scope, service) {

  $scope.bookBump = function() {
    $('.book-wrapper').hover(function() {
      $(this).css({'top': '-13px', 'position': 'relative'});
    }, function() {
      $(this).css({'top': '0px', 'position': 'relative'});
    });
  };
  // $scope.bookBump();




});
