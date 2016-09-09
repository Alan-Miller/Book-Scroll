angular.module('bookApp').service('bookService', function($http) {

  this.getWord = function(input) {
    return $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/word.json/'+input+'/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',    //Wordnik
      // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/'+input+'?key=9bfc270a-2520-4eac-87fe-49577b7e0414',   //Merriam-Webster
      dataType: 'JSONP' // Merriam-Webster
    }).then(function(response) {
      console.log(response);
      return response.data; // Merriam-Webster
      // return response.data.def[0].tr; // Yandex
    });
  };


});
