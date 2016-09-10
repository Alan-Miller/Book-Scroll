angular.module('bookApp').controller('readerController', function($scope, bookService) {





  function uploadBook(htmlFile) {
      if (htmlFile.files && htmlFile.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
            $('#book-appears-here').html(e.target.result);
            // console.log(e.target.result);
            // var bookData = e.target.result;
            localStorage.setItem("bookData", e.target.result);
            // $scope.getIt = localStorage.getItem('bookData');
          };
          reader.readAsText(htmlFile.files[0]);
          return htmlFile.files[0];
      }
  }

  $("#the-book").change(function() {
      uploadBook(this);
  });




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




});
