'use strict';

angular.module('bookApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('loader', {
    url: '/',
    views: {
      'textDiv': {
        controller: 'loaderController',
        templateUrl: 'src/components/loader/loader.html'
      }
    }
  }).state('reader', {
    url: '/reader',
    views: {
      'textDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      }
    }
  }).state('dict', {
    url: '/dict',
    views: {
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      }
    }
  }).state('bmarks', {
    url: '/bmarks',
    views: {
      'navDiv': {
        controller: 'bmarksController',
        templateUrl: 'src/components/bmarks/bmarks.html'
      }
    }
  }).state('chapters', {
    url: '/chapters',
    views: {
      'navDiv': {
        controller: 'chaptersController',
        templateUrl: 'src/components/chapters/chapters.html'
      }
    }

  });
});

$(document).ready(function () {

  $('.carousel-container').slick({
    fade: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000
  });
});

angular.module('bookApp').controller('mainController', function ($scope, service) {

  $scope.bookBump = function () {
    $('.book-wrapper').hover(function () {
      $(this).css({ 'top': '-13px', 'position': 'relative' });
    }, function () {
      $(this).css({ 'top': '0px', 'position': 'relative' });
    });
  };
  // $scope.bookBump();

});

// <div onmouseover="document.body.style.overflow='hidden';" onmouseout="document.body.style.overflow='auto';"></div>


// function uploadBook(htmlFile) {
//     if (htmlFile.files && htmlFile.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//           $('#book-appears-here').html(e.target.result);
//           // console.log(e.target.result);
//           // var bookData = e.target.result;
//           localStorage.setItem("bookData", e.target.result);
//           console.log(localStorage.getItem('bookData'));
//         };
//         reader.readAsText(htmlFile.files[0]);
//         return htmlFile.files[0];
//     }
// }
//
//
// $("#the-book").change(function() {
//     uploadBook(this);
// });
//
// function reloadBook = localStorage.getItem('bookData');


// function uploadBook(htmlFile) {
//     if (htmlFile.files && htmlFile.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//           $('#book-appears-here').html(e.target.result);
//         };
//
//         reader.readAsText(htmlFile.files[0]);
//     }
// }
//
// $("#the-book").change(function() {
//     uploadBook(this);
// });


// function uploadBook(htmlFile) {
//     if (htmlFile.files && htmlFile.files[0]) {
//         var reader = new FileReader();
//         var file = htmlFile.files[0];
//         reader.onload = function(e) {
//           $('#book-appears-here').html(e.target.result);
//           var contents = e.target.result;
//           (contents);
//           console.log(typeof contents);
//           // var bodyTag = /<body*>/;
//           var lines = contents.split('\n');
//           // alert(lines);
//           console.log(lines[0]);
//           // var timeChange = contents.replace('midnight', 'noon');
//           // console.log(timeChange);
//         };
//
//         reader.readAsText(file);
//         // console.log(this);
//     }
// }
//
// $("#the-book").change(function() {
//     uploadBook(this);
//     // console.log(this.innerHTML);
// });

angular.module('bookApp').service('service', function ($http) {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    THIS FUNCTION PULLS WORD DEFINITIONS FROM THE WORDNIK API
    Merriam-Webster and Yandex gave data that was less immediately helpful
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.getWord = function (input) {
    return $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/word.json/' + input + '/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', //Wordnik
      // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/'+input+'?key=9bfc270a-2520-4eac-87fe-49577b7e0414',   //Merriam-Webster
      dataType: 'JSONP' // Merriam-Webster (and Wordnik(?))
    }).then(function (response) {
      console.log(response);
      return response.data; // Wordnik, Merriam-Webster
      // return response.data.def[0].tr; // Yandex
    });
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    THIS FUNCTION UPLOADS THE TEXT FILE
    - inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
    - inputElement.files is the array with the uploaded file
    - inputElement.files[0] contains the desired file data
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var theFile = 'bug';

  this.uploadBook = function (inputElement) {
    theFile = inputElement.files[0];
    if (inputElement.files && theFile) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#book-appears-here').html(e.target.result);
        // console.log(e.target.result);
      };
      reader.readAsText(theFile);
      return theFile;
    }
  };

  this.shareTheFile = function () {
    theFile = theFile;
    return theFile;
  };

  this.loadSavedBook = function () {
    theFile = theFile;
    if (theFile instanceof Blob) {
      // Check to see if theFile variable contains a blob object
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#book-appears-here').html(e.target.result);
        // console.log(e.target.result);
      };
      reader.readAsText(theFile);
      return theFile;
    }
  };

  // console.log(theFile);
  // $("#the-book").change(function() {
  //     uploadBook(this);
  // });

});

angular.module('bookApp').controller('bmarksController', function ($scope, service) {

  $scope.bookmarks = [{ 'id': 'here' }, { 'id': 'there' }];

  // $scope.look = 'okay then';
  $scope.test = 'Why don\'t you work';
});

angular.module('bookApp').directive('bmarker', function () {
  return {
    restrict: 'AE',
    scope: {
      test: '='
    },
    template: '<ng-include src="src/components/bmarks/bmarks.html" />', // WTH
    controller: function controller($scope, service) {
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

angular.module('bookApp').controller('chaptersController', function ($scope, service) {});

angular.module('bookApp').controller('dictController', function ($scope, service) {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Focuses on input box when state loads
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  document.getElementById("defbox").focus();

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Takes user input and sends to service function, which makes Wordnik request
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $scope.getWord = function (input) {
    service.getWord(input).then(function (response) {
      $scope.theWord = response;
    });
  };
  // The function is called by the form's ng-submit in the dict.html template
});

angular.module('bookApp').controller('loaderController', function ($scope, service) {

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

angular.module('bookApp').controller('readerController', function ($scope, service) {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Uses a function defined in the service to upload books
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  $scope.uploadBook = service.uploadBook;
  // If there is a change, the function runs
  $("#the-book").change(function () {
    $scope.uploadBook(this);
    // this refers to the element <input type="file" id="the-book" class="transparent">
    // $scope.theFile = service.uploadBook(this);
    // return $scope.theFile;
  });

  $scope.showTheFile = function () {
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