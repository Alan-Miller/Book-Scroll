'use strict';

angular.module('bookApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('loader', {
    url: '/',
    views: {
      'centerDiv': {
        controller: 'loaderController',
        templateUrl: 'src/components/loader/loader.html'
      },
      // 'navDiv': {
      //   controller: 'bmarksController',
      //   templateUrl: 'src/components/bmarks/bmarks.html'
      // },
      'navDiv': {
        controller: 'filesController',
        templateUrl: 'src/components/files/files.html'
      },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      }
    }
  }).state('reader', {
    url: '/reader',
    views: {
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      },
      'navDiv': {
        controller: 'bmarksController',
        templateUrl: 'src/components/bmarks/bmarks.html'
      },
      // 'navDiv': {
      //   controller: 'filesController',
      //   templateUrl: 'src/components/files/files.html'
      // },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      }
    }
  }).state('dict', {
    url: '/dict',
    views: {
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      },
      'navDiv': {
        controller: 'bmarksController',
        templateUrl: 'src/components/bmarks/bmarks.html'
      },
      // 'navDiv': {
      //   controller: 'filesController',
      //   templateUrl: 'src/components/files/files.html'
      // },
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      }
    }
  }).state('bmarks', {
    url: '/bmarks',
    views: {
      'navDiv': {
        controller: 'bmarksController',
        templateUrl: 'src/components/bmarks/bmarks.html'
      },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      },
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      }
    }
  }).state('chapters', {
    url: '/chapters',
    views: {
      // 'navDiv': {
      //   controller: 'bmarksController',
      //   templateUrl: 'src/components/bmarks/bmarks.html'
      // },
      // 'navDiv': {
      //   controller: 'filesController',
      //   templateUrl: 'src/components/files/files.html'
      // },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      },
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      }
    }
  }).state('files', {
    url: '/files',
    views: {
      'navDiv': {
        controller: 'filesController',
        templateUrl: 'src/components/files/files.html'
      },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
      },
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
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

  $scope.oK = function () {
    var isOkay = confirm('Are you really okay?');
    if (isOkay) {
      alert('I am glad you are okay.');
    } else {
      alert('I know a place that might help.');
      window.location.replace('http://okay.org/');
    }
  };
});

angular.module('bookApp').directive('removeDad', function () {
  return {
    restrict: 'AE',
    // scope: {
    // lesson: '=',
    // name: '=',
    // unicorn: '='
    // },
    controller: function controller($scope, service) {
      // $scope.getSchedule = lessonService.getSchedule();
    },
    link: function link(scope, elem, attrs) {
      elem.bind('click', function () {
        elem.parent().remove();
      });
    }
  };
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

angular.module('bookApp').service('service', function ($http, $state) {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    This function pulls word definitions from the Wordnik API.
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
    Uploads the text file.
    - inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
    - inputElement.files is the array with the uploaded file
    - inputElement.files[0] contains the desired file data
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var theFile = { title: 'About Steve', text: 'Steve sucks.' };

  this.uploadBook = function (inputElement) {
    theFile = inputElement.files[0];
    if (inputElement.files && theFile) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#book-appears-here').html(e.target.result);
        console.log(e.target.result);
      };
      // console.log(theFile);
      reader.readAsText(theFile);
      $state.go('files');
      // this.saveFile();
      return theFile;
    }
  };

  // this.uploadBook = function(inputElement) {
  //     theFile = inputElement.files[0];
  //     if (inputElement.files && theFile) {
  //
  //         var reader = new FileReader();
  //         var placeForText = $('#book-appears-here');
  //
  //         reader.onload = function(e) {
  //           placeForText.html(e.target.result);
  //           // console.log(placeForText.html());
  //           // console.log(e.target.result);
  //         };
  //         // console.log(theFile);
  //         theFile.text = placeForText.html().toString();
  //         reader.readAsText(theFile);
  //         console.log('title and text');
  //         // console.log(theFile);
  //         theFile.title = theFile.name;
  //         console.log(theFile.title);
  //         console.log(theFile.text);
  //         // theFile.text = placeForText.html();
  //         // console.log(theFile.text);
  //         return theFile;
  //     }
  // };

  // this.shareTheFile = function() {
  //   theFile = theFile;
  //   return theFile;
  // };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Loads blob files stored in variables.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.loadLastFile = function () {
    console.log(theFile);
    $('#book-appears-here').html(theFile.text);
  };

  // this.loadLastFile = function() {
  //     // if (theFile instanceof Blob) { // Check to see if theFile variable contains a blob object
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //           $('#book-appears-here').html(e.target.result);
  //           // console.log(e.target.result);
  //         };
  //         console.log(theFile);
  //         reader.readAsText(theFile);
  //         return theFile;
  //     // }
  // };

  // this.loadLastFile = function() {
  //     if (theFile instanceof Blob) { // Check to see if theFile variable contains a blob object
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //           $('#book-appears-here').html(e.target.result);
  //           // console.log(e.target.result);
  //         };
  //         console.log(theFile);
  //         reader.readAsText(theFile);
  //         return theFile;
  //     }
  // };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Loads the file you click into the reader.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.loadThisFile = function (file) {
    theFile.title = file.title;
    theFile.text = file.text;
    console.log(theFile);
    $('#book-appears-here').html(theFile.text);
  };

  // this.loadThisFile = function(fileText) {
  //     if (fileText instanceof Blob) { // Check to see if theFile variable contains a blob object
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //           $('#book-appears-here').html(e.target.result);
  //           // console.log(e.target.result);
  //         };
  //         console.log(fileText);
  //         reader.readAsText(fileText);
  //         return fileText;
  //     }
  // };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Saves the blob as a new file
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.saveFile = function () {
    var newFile = {};
    newFile.title = theFile.name;
    newFile.text = $('#book-appears-here').html().toString();
    this.files.push(newFile);
    console.log(newFile);
    // console.log(newFile.title);
  };

  // this.saveFile = function() {
  //   var newFile = {};
  //   var arrayItem;
  //   for (var i = 0; i < this.files.length; i++) {
  //     var noRepeats = true;
  //     arrayItem = this.files[i];
  //     if (arrayItem.indexOf(theFile.name) !== -1) {
  //       noRepeats = false;
  //     }
  //     if (noRepeats) {
  //       newFile.title = theFile.name;
  //       newFile.text = theFile;
  //       this.files.push(newFile);
  //     }
  //   }
  //   // console.log(newFile.title);
  // };


  // this.saveFile = function() {
  //   var newFile = {};
  //   newFile.title = theFile.name;
  //   newFile.text = document.getElementById("book-appears-here").innerHTML;
  //   this.files.push(newFile);
  //   // console.log(newFile.title);
  // };


  this.highlightText = function () {
    var loadedText = document.getElementById("book-appears-here");
    var selectedText = '';
    var newBmark = {};
    var highlighterStyles = '<a id="codeword" style="color: white; background-color: rgb(217, 56, 46)">';
    // console.log(loadedText.innerHTML);
    // if (loadedText.getSelection) {
    // loadedText.getSelection().toString();
    selectedText = window.getSelection().toString();
    newBmark.id = selectedText;
    this.bookmarks.push(newBmark);
    theFile.text = theFile.text.replace(selectedText, highlighterStyles + selectedText + '</a>');
    theFile.text = theFile.text.replace('<a id="codeword" style="color: white; background-color: rgb(217, 56, 46)"><a id="codeword" style="color: white; background-color: rgb(217, 56, 46)">' + selectedText + '</a></a>', '<a id="codeword" style="color: white; background-color: rgb(217, 56, 46)">' + selectedText + '</a>');
    // console.log(document.getElementById('codeword'));
    console.log(theFile.text);
    // console.log(window.getSelection().toString());
    // }
    $('#book-appears-here').html(theFile.text);
    // console.log(newFile.title);
  };

  this.unhighlight = function (bmark) {
    theFile.text = theFile.text.replace('<a id="codeword" style="color: white; background-color: rgb(217, 56, 46)">' + bmark + '</a>', bmark);
    console.log(theFile.text);
    $('#book-appears-here').html(theFile.text);
  };

  this.spliceBmark = function (bmark) {
    // console.log(this.bookmarks);
    this.bookmarks.splice(this.bookmarks.indexOf(bmark), 1);
    // console.log(this.bookmarks);
    // alert('corn');
    this.unhighlight(bmark.id);
  };

  this.spliceFile = function (file) {
    console.log(this.files);
    this.files.splice(this.files.indexOf(file), 1);
    console.log(this.files);
    // alert('corn');
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Arrays stored in variables and used by nav div components.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.files = [{
    'title': 'Dummy File',
    'text': 'Dummy text'
  }, {
    'title': 'Another Dummy',
    'text': 'Another text'
  }];
  this.bookmarks = [{ 'id': 'here' }, { 'id': 'there' }];
});

// console.log(theFile);
// $("#the-book").change(function() {
//     uploadBook(this);
// });

angular.module('bookApp').controller('bmarksController', function ($scope, service) {

  $scope.bookmarks = service.bookmarks;

  $scope.highlightText = service.highlightText;

  $scope.unhighlight = service.unhighlight;

  $scope.spliceBmark = service.spliceBmark;

  // $scope.look = 'okay then';
  // $scope.test = 'Why don\'t you work';

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
    Takes user input and sends to service function, which makes Wordnik request.
    The function is called by the form's ng-submit in the dict.html template.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $scope.getWord = function (input) {
    if (input === '') {
      $scope.theWord = { partOfSpeech: 'emptiness', text: 'void' };
    } else {
      service.getWord(input).then(function (response) {
        $scope.theWord = response;
      });
    }
  };
});

angular.module('bookApp').controller('filesController', function ($scope, service) {

  $scope.files = service.files;

  $scope.loadLastFile = service.loadLastFile;

  $scope.loadThisFile = service.loadThisFile;

  $scope.saveFile = service.saveFile;

  $scope.spliceFile = service.spliceFile;
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

  $scope.loadLastFile = service.loadLastFile;
  $scope.loadLastFile();

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Uses a function defined in the service to upload books.
    If there is a change, the function runs.
    The this keyword refers to <input type="file" id="the-book" class="transparent">.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  $scope.uploadBook = service.uploadBook;
  //
  $("#the-book").change(function () {
    $scope.uploadBook(this);
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Here we place a function on $scope to allow the reading div to load the blob
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
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