angular.module('bookApp').controller('readerController', function($scope, service) {


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Uses a function defined in the service to upload books.
  If there is a change, the function runs.
  The this keyword refers to <input type="file" id="the-book" class="transparent">.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $scope.uploadBook = service.uploadBook;
  //
  $("#the-book").change(function() {
      $scope.uploadBook(this);
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Here we place a function on $scope to allow the reading div to load the blob
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */




  $scope.loadLastFile = service.loadLastFile;
  $scope.loadLastFile();
});



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Test function for showing the blob stored in a variable by the service function
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// $scope.showTheFile = function() {
//   $scope.theFile = service.shareTheFile();
//   // $scope.theFile = service.theFile;
//   alert($scope.theFile);
//   // alert('service.theFile:', service.theFile);
//   // alert($scope.theFile);
// };



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
