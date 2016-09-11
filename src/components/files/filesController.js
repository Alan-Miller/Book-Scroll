angular.module('bookApp').controller('filesController', function($scope, service) {

  $scope.files = service.files;

  $scope.loadLastFile = service.loadLastFile;

  $scope.loadThisFile = service.loadThisFile;

  $scope.saveFile = service.saveFile;

  $scope.spliceFile = service.spliceFile;

});
