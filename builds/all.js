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

// <div onmouseover="document.body.style.overflow='hidden';" onmouseout="document.body.style.overflow='auto';"></div>


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
//
// $("#the-book").change(function() {
//     uploadBook(this);
// });


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
//           console.log(contents);
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

angular.module('bookApp').service('bookService', function ($http) {

  this.getWord = function (input) {
    return $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/word.json/' + input + '/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', //Wordnik
      // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/'+input+'?key=9bfc270a-2520-4eac-87fe-49577b7e0414',   //Merriam-Webster
      dataType: 'JSONP' // Merriam-Webster
    }).then(function (response) {
      console.log(response);
      return response.data; // Merriam-Webster
      // return response.data.def[0].tr; // Yandex
    });
  };
});

angular.module('bookApp').controller('bmarksController', function ($scope, bookService) {});

angular.module('bookApp').controller('dictController', function ($scope, bookService) {

  $scope.getWord = function (input) {
    bookService.getWord(input).then(function (response) {
      $scope.theWord = response;
    });
  };
  // $scope.getWord();

});

angular.module('bookApp').controller('readerController', function ($scope, bookService) {

  // $scope.file = htmlFile.files[0];

});

angular.module('bookApp').controller('loaderController', function ($scope, bookService) {

  function uploadBook(htmlFile) {
    if (htmlFile.files && htmlFile.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#book-appears-here').html(e.target.result);
      };
      reader.readAsText(htmlFile.files[0]);
      return htmlFile.files[0];
    }
  }

  $("#the-book").change(function () {
    uploadBook(this);
  });
});

angular.module('bookApp').controller('chaptersController', function ($scope, bookService) {});