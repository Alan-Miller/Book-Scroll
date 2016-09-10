angular.module('bookApp').controller('bmarksController', function($scope, bookService) {

  $scope.bookmarks = [
    {'id': 'here'},
    {'id': 'there'}
  ];

  // $scope.look = 'okay then';
  $scope.test = 'Why don\'t you work';

});
