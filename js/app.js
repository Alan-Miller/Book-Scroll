angular.module('bookApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider
.otherwise('/');

$stateProvider
.state('loader', {
  url: '/',
  views: {
    'textDiv': {
      controller: 'loaderController',
      templateUrl: 'loader/loader.html'
    }
  }
})
.state('reader', {
  url: '/reader',
  views: {
    'textDiv': {
      controller: 'readerController',
      templateUrl: 'reader/reader.html'
    }
  }
})
.state('dict', {
  url: '/dict',
  views: {
    'wordDiv': {
      controller: 'dictController',
      templateUrl: 'dict/dict.html'
    }
  }
})
.state('bmarks', {
  url: '/bmarks',
  views: {
    'navDiv': {
      controller: 'bmarksController',
      templateUrl: 'bmarks/bmarks.html'
    }
  }
})
.state('chapters', {
  url: '/chapters',
  views: {
    'navDiv': {
      controller: 'chaptersController',
      templateUrl: 'chapters/chapters.html'
    }
  }

});


});
