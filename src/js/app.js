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
      templateUrl: 'src/components/loader/loader.html'
    }
  }
})
.state('reader', {
  url: '/reader',
  views: {
    'textDiv': {
      controller: 'readerController',
      templateUrl: 'src/components/reader/reader.html'
    }
  }
})
.state('dict', {
  url: '/dict',
  views: {
    'wordDiv': {
      controller: 'dictController',
      templateUrl: 'src/components/dict/dict.html'
    }
  }
})
.state('bmarks', {
  url: '/bmarks',
  views: {
    'navDiv': {
      controller: 'bmarksController',
      templateUrl: 'src/components/bmarks/bmarks.html'
    }
  }
})
.state('chapters', {
  url: '/chapters',
  views: {
    'navDiv': {
      controller: 'chaptersController',
      templateUrl: 'src/components/chapters/chapters.html'
    }
  }

});


});
