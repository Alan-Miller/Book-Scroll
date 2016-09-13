angular.module('bookApp')
.directive('showFileName', function() {
    return {
      restrict: 'AE',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          elem.parent().remove();
        });
      }
    };
});
