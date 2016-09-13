angular.module('bookApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider
.otherwise('/');

$stateProvider
.state('loader', {
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
})
.state('reader', {
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
})
.state('dict', {
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
})
.state('bmarks', {
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
})
.state('chapters', {
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
})
.state('files', {
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
