angular.module('bookApp').controller('bmarksController', function($scope, service) {

  $scope.bookmarks = service.bookmarks;

  $scope.highlightText = service.highlightText;

  // $scope.look = 'okay then';
  // $scope.test = 'Why don\'t you work';


});
