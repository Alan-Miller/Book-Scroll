angular.module('bookApp')
.directive('bmarker', function() {
  return {
    restrict: 'AE',
    scope: {
      test: '='
    },
    template: '<ng-include src="./src/components/bmarks/bmarks.html" />', // WTH
    controller: function($scope, service) {
      // $scope.look = 'okay then';
      // alert('Directive might not be working');
    }
  };
});





// angular.module('bookApp')
// .directive('bmarker', function() {
//   return {
//     restrict: 'AE',
//     scope: {
//       test: '='
//     },
//     link: function(scope, element, attrs) {
//       element.on('click', function(event) {
//         // scope.foo({msg: 'Keep on fighting!'}); // Angular takes key value pairs and retrieves value
//         // var newColor = getColor();
//         var targetElement = element.find('section');
//         // console.log(targetElement);
//         targetElement.css('background-color', newColor);
//         scope.callback();
//       });
//     },
//     template: '<ng-include src="./src/components/bmarks/bmarks.html" />', // WTH
//     // templateUrl: '/src/components/bmarks/bmarks.html',
//     controller: function($scope, service) {
//     }
//   };
//
// });
