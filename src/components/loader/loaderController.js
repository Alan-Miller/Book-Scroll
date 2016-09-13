angular.module('bookApp').controller('loaderController', function($scope, service) {

  // function uploadBook(htmlFile) {
  //     if (htmlFile.files && htmlFile.files[0]) {
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //           $('#book-appears-here').html(e.target.result);
  //         };
  //         reader.readAsText(htmlFile.files[0]);
  //         return htmlFile.files[0];
  //     }
  // }
  //
  // $("#the-book").change(function() {
  //     uploadBook(this);
  //     $state.go('bmarks');
  // });




  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  UPLOAD
    Uses a function defined in the service to upload books.
      ~ If there is a change, the function runs.
      ~ The this keyword refers to <input type="file" id="the-book" class="transparent">.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  // $scope.uploadBook = service.uploadBook;

  $("#the-book").change(function() {
      service.uploadBook(this);
  });

  $scope.loadArrayFromStorage = service.loadArrayFromStorage;

  $scope.loadLastFile = service.loadLastFile;
  // $scope.loadLastFile();
});
