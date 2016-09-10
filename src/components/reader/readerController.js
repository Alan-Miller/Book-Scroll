angular.module('bookApp').controller('readerController', function($scope, service) {

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Uses a function defined in the service to upload books
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


  $scope.uploadBook = service.uploadBook;
  // If there is a change, the function runs
  $("#the-book").change(function() {
      $scope.uploadBook(this);
      // this refers to the element <input type="file" id="the-book" class="transparent">
      // $scope.theFile = service.uploadBook(this);
      // return $scope.theFile;
  });

  $scope.showTheFile = function() {
    $scope.theFile = service.shareTheFile();
    // $scope.theFile = service.theFile;
    alert($scope.theFile);
    // alert('service.theFile:', service.theFile);
    // alert($scope.theFile);
  };

  $scope.loadSavedBook = service.loadSavedBook;

});





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  THIS UPLOAD FUNCTION WORKS, BUT I MOVED TO THE SERVICE
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  // function uploadBook(htmlFile) {
  //     if (htmlFile.files && htmlFile.files[0]) {
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //           $('#book-appears-here').html(e.target.result);
  //           // console.log(e.target.result);
  //           // var bookData = e.target.result;
  //           localStorage.setItem("bookData", e.target.result);
  //           // $scope.getIt = localStorage.getItem('bookData');
  //         };
  //         reader.readAsText(htmlFile.files[0]);
  //         return htmlFile.files[0];
  //     }
  // }
  //
  // $("#the-book").change(function() {
  //     uploadBook(this);
  // });





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  THE CODE BELOW PROBABLY DOESN'T WORK
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  // function reloadBook() {
  //   var reader = new FileReader();
  //   localStorage.getItem('bookData');
  //   reader.readAsText('bookData');
  // }
  // $scope.reloadBook = reloadBook;


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
