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
      'centerDiv': {
        controller: 'readerController',
        templateUrl: 'src/components/reader/reader.html'
      },
      'navDiv': {
        controller: 'bmarksController',
        templateUrl: 'src/components/bmarks/bmarks.html'
      },
      'wordDiv': {
        controller: 'dictController',
        templateUrl: 'src/components/dict/dict.html'
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

angular.module('bookApp').directive('highlighter', function () {
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
    link: function link(scope, elem, attrs) {
      elem.bind('click', function () {
        elem.parent().remove();
      });
    }
  };
});

angular.module('bookApp').controller('mainController', function ($scope, service) {

  $scope.bookBump = function () {
    $('.book-wrapper').hover(function () {
      $(this).css({ 'top': '-16px', 'position': 'relative' });
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

$(window).scroll(function () {

  var winScroll = $(this).scrollTop();

  $('.book-scroll-title').css({ 'transform': 'translate(0px, ' + winScroll * -0.3 + '%)' });

  // $('.book-scroll-title').css({'transform': 'rotate(-' + winScroll / 40 + 'deg)'});

  // $('.book-scroll-title').css({'transform': 'translate(-' + winScroll / 80 + '%, 0px)'});


  // $('.bo').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ok').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.sc').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ro').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ll').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});

  // $('.book-scroll-title').css({'transform': 'rotate(-' + winScroll / 2 + 'deg)'});

  // $('.book-scroll-title').css({'position': 'absolute', 'opacity': 100 / (2 * winScroll)});

  // $('.book-scroll-title').css({'position': 'absolute', 'transform' :'translateY(' + winScroll / 3 + '%, 0px)'});

});

angular.module('bookApp').directive('removeDad', function () {
  return {
    restrict: 'AE',
    // scope: {
    // lesson: '=',
    // name: '=',
    // unicorn: '='
    // },
    // controller: function($scope, service) {
    // $scope.getSchedule = lessonService.getSchedule();
    // },
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
  DATA ARRAYS AND OBJECTS
    Arrays stored in variables and used by nav div components.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var files = [];
  this.bookmarks = [];
  var theFile = { title: 'Dummy Title', text: 'Go to the Load screen to read files here' };
  // var highlighterStyles = '<a style="color: black; background-color: rgb(254, 209, 76); border-radius: 10px">';


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  UPLOADER
    Uploads text file from hard drive.
      ~ inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
      ~ inputElement.files is the array with the uploaded file
      ~ inputElement.files[0] contains the desired file data
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.uploadBook = function (inputElement) {
    theFile = inputElement.files[0];
    theFile.title = theFile.name;
    if (inputElement.files && theFile) {
      var reader = new FileReader();
      $state.go('reader');
      reader.onload = function (e) {
        $('#book-appears-here').html(e.target.result);
        theFile.text = e.target.result;
      };
      setTimeout(function () {
        theFile.text = $('#book-appears-here').html();
      }, 1000);
      reader.readAsText(theFile);
      $state.go('files');
      // this.saveFile();  // Auto-saves incoming files. Tends to negate manual save option. And it's not correctly adding the text.
      return theFile;
    }
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  SAVE FILE
    Saves loaded file to file list.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.saveFile = function (inputTitle) {
    var newFile = {};
    if (inputTitle) {
      newFile.title = inputTitle;
      newFile.text = $('#book-appears-here').html().toString();
    } else if (theFile.title) {
      newFile.title = theFile.title;
      newFile.text = theFile.text;
    } else {
      newFile.title = theFile.name;
      newFile.text = $('#book-appears-here').html().toString();
    }
    // localStorage.setItem(newFile.title, newFile.text);
    files.push(newFile);
    return files;
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  LOAD THIS
    Loads file into the reader from file list.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.loadThisFile = function (file) {
    $state.go('files');
    theFile.title = file.title;
    theFile.text = file.text;
    $('#book-appears-here').html(theFile.text);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  LOAD LAST
    Loads most recent file stored in variable theFile.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.loadLastFile = function () {
    $('#book-appears-here').html(theFile.text);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  SPLICE FILE
    Splices deleted files from files list.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.spliceFile = function (file) {
    // console.log(files);
    theFile.title = file.title;
    theFile.text = file.text;
    console.log(theFile.text);
    console.log(theFile.title);
    files.splice(files.indexOf(file), 1);
    return files;
    // alert('corn');
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  RETURN FILES
    Grants controller access to files array.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.returnFiles = function () {
    return files;
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  RETURN CURRENT FILE
    Makes theFile available to the mainController
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.returnTheFile = function () {
    return theFile;
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  HIGHLIGHTER
    Highlights selected text.
    Finds and highlights text from input form.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.highlightText = function (searchInput) {
    // var loadedText = document.getElementById("book-appears-here");
    console.log(searchInput);
    var selectedText = '';
    var newBmark = {};
    if (searchInput) {
      if (theFile.text.indexOf(searchInput) !== -1) {
        newBmark.input = searchInput;
        newBmark.id = searchInput + ' ( x' + (theFile.text.split(searchInput).length - 1) + ' )'; // Count number of instances of the search term
        this.bookmarks.push(newBmark);
        var re = new RegExp(searchInput, 'g'); // Add highlights to text
        theFile.text = theFile.text.replace(re, '<highlighter>' + searchInput + '</highlighter>');
      } else {
        $('#finder').val('\"' + searchInput + '\"' + ' not found'); // Error message
      }
    } else {
      selectedText = window.getSelection();
      newBmark.selection = selectedText.toString();
      newBmark.id = newBmark.selection.split(' ').slice(0, 7).join(' ');
      if (newBmark.id !== '') {
        this.bookmarks.push(newBmark);
        selectedText = selectedText.toString();
        theFile.text = theFile.text.replace(selectedText, '<highlighter>' + selectedText + '</highlighter>');
      }
      // theFile.text = theFile.text.replace(highlighterStyles + highlighterStyles + selectedText + '</a></a>', highlighterStyles + selectedText + '</a>');
    }
    $('#book-appears-here').html(theFile.text);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  SPLICE HIGHLIGHT
    Splices deleted highlights from highlights list.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.spliceBmark = function (bmark) {
    this.bookmarks.splice(this.bookmarks.indexOf(bmark), 1);
    // alert('corn');
    this.unhighlight(bmark.selection, bmark.input);
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  UNHIGHLIGHTER
    Unhighlights text.
    Removes highlights from text.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.unhighlight = function (selection, input) {
    if (input) {
      var wrappedText = '<highlighter>' + input + '</highlighter>';
      while (theFile.text.indexOf(wrappedText) !== -1) {
        theFile.text = theFile.text.replace(wrappedText, input);
      }
      $('#book-appears-here').html(theFile.text);
    } else if (selection) {
      theFile.text = theFile.text.replace('<highlighter>' + selection + '</highlighter>', selection);
      $('#book-appears-here').html(theFile.text);
    }
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  DICTIONARY
    Pulls word definitions from Wordnik API.
     ~ Merriam-Webster and Yandex gave data that was less immediately helpful
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
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
† † CODE GRAVEYARD † †
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// This snippet resides in loaderController now
// console.log(theFile);
// $("#the-book").change(function() {
//     uploadBook(this);
// });


// Test function
// this.shareTheFile = function() {
//   theFile = theFile;
//   return theFile;
// };


// Original loadLastFile function
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


// Original loadThisFile function// this.loadThisFile = function(fileText) {
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


// Original saveFile functions

// this.saveFile = function() {
//   var newFile = {};
//   if (theFile.title) {
//     newFile.title = theFile.title;
//     newFile.text = theFile.text;
//   } else {
//     newFile.title = theFile.name;
//     newFile.text = $('#book-appears-here').html().toString();
//   }
//   files.push(newFile);
//   console.log(newFile);
//   // console.log(newFile.title);
// };

// this.saveFile = function() {
//   var newFile = {};
//   var arrayItem;
//   for (var i = 0; i < files.length; i++) {
//     var noRepeats = true;
//     arrayItem = files[i];
//     if (arrayItem.indexOf(theFile.name) !== -1) {
//       noRepeats = false;
//     }
//     if (noRepeats) {
//       newFile.title = theFile.name;
//       newFile.text = theFile;
//       files.push(newFile);
//     }
//   }
//   // console.log(newFile.title);
// };
//   var newFile = {};
//   newFile.title = theFile.name;
//   newFile.text = document.getElementById("book-appears-here").innerHTML;
//   files.push(newFile);
//   // console.log(newFile.title);
// };


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Intended to repopulate files array with items in LocalStorage
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*
  this.loadArrayFromStorage = function() {
    var tempObj = {};
    for (var key in localStorage) {
      // localStorage.getItem(key);
      // console.log(localStorage.getItem(key));
      console.log(key);
      open lS
      for every item
      push item to files
      tempObj.title = key;
      tempObj.text = localStorage[key];
      files.push(tempObj);
      // console.log(localStorage[key]);
    }
    return files;
  };

  // console.log(files)
*/

angular.module('bookApp').controller('bmarksController', function ($scope, service) {

  $scope.bookmarks = service.bookmarks;

  $scope.highlightText = service.highlightText;

  $scope.unhighlight = service.unhighlight;

  $scope.spliceBmark = service.spliceBmark;

  $scope.loadLastFile = service.loadLastFile;
  // console.log($scope.loadLastFile());
  // $scope.loadLastFile();

  // $scope.look = 'okay then';
  // $scope.test = 'Why don\'t you work';

});

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

  $scope.files = service.returnFiles();

  $scope.loadThisFile = service.loadThisFile;

  $scope.saveFile = service.saveFile;

  $scope.spliceFile = service.spliceFile;

  $scope.loadLastFile = service.loadLastFile;
  // $scope.loadLastFile();
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


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  UPLOAD
    Uses a function defined in the service to upload books.
      ~ If there is a change, the function runs.
      ~ The this keyword refers to <input type="file" id="the-book" class="transparent">.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  // $scope.uploadBook = service.uploadBook;

  $("#the-book").change(function () {
    service.uploadBook(this);
  });

  $scope.loadArrayFromStorage = service.loadArrayFromStorage;

  $scope.loadLastFile = service.loadLastFile;
  // $scope.loadLastFile();
});

angular.module('bookApp').controller('readerController', function ($scope, service) {

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

  // $scope.showFileName = function() {
  $scope.fileName = service.returnTheFile().title; //Grabs document title from service
  // };
  // $scope.showFileName();


  service.loadLastFile();
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