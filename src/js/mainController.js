angular.module('bookApp').controller('mainController', function($scope, service) {

  $scope.bookBump = function() {
    $('.book-wrapper').hover(function() {
      $(this).css({'top': '-13px', 'position': 'relative'});
    }, function() {
      $(this).css({'top': '0px', 'position': 'relative'});
    });
  };
  // $scope.bookBump();

  $scope.oK = function() {
    var isOkay = confirm('Are you really okay?');
    if (isOkay) {
      alert('I am glad you are okay.');
    } else {
      alert('I know a place that might help.');
      window.location.replace('http://okay.org/');
    }
  };


});
