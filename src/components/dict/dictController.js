angular.module('bookApp').controller('dictController', function($scope, service) {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Focuses on input box when state loads
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  document.getElementById("defbox").focus();


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Takes user input and sends to service function, which makes Wordnik request
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $scope.getWord = function(input) {
    service.getWord(input).then(function(response) {
      $scope.theWord = response;
    });
  };
  // The function is called by the form's ng-submit in the dict.html template

});
