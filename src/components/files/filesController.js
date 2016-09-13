angular.module('bookApp').controller('filesController', function($scope, service) {

  $scope.files = service.returnFiles();

  $scope.loadThisFile = service.loadThisFile;

  $scope.saveFile = service.saveFile;

  $scope.spliceFile = service.spliceFile;

  $scope.loadLastFile = service.loadLastFile;
  // $scope.loadLastFile();

});
