angular.module('bookApp')
.directive('removeDad', function() {
    return {
      restrict: 'AE',
      // scope: {
        // lesson: '=',
        // name: '=',
        // unicorn: '='
      // },
      // controller: function($scope, service) {
        // $scope.getSchedule = lessonService.getSchedule();
      // },
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          elem.parent().remove();
        });
      }
    };
});
