angular.module('bookApp').controller('bmarksController', function($scope, service) {

  $scope.bookmarks = service.bookmarks;

  $scope.highlightText = service.highlightText;

  $scope.unhighlight = service.unhighlight;

  $scope.spliceBmark = service.spliceBmark;

  $scope.loadLastFile = service.loadLastFile;
  // console.log($scope.loadLastFile());
  // $scope.loadLastFile();

  // $scope.look = 'okay then';
  // $scope.test = 'Why don\'t you work';


});
