angular.module('bookApp')
.directive('highlighter', function() {
    return {
      // template: '<highlighter>YAY</highlighter>',
      restrict: 'E',
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
