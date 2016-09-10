angular.module('bookApp').service('service', function($http) {

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  THIS FUNCTION PULLS WORD DEFINITIONS FROM THE WORDNIK API
  Merriam-Webster and Yandex gave data that was less immediately helpful
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.getWord = function(input) {
    return $http({
      method: 'GET',
      url: 'http://api.wordnik.com:80/v4/word.json/'+input+'/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',    //Wordnik
      // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/'+input+'?key=9bfc270a-2520-4eac-87fe-49577b7e0414',   //Merriam-Webster
      dataType: 'JSONP' // Merriam-Webster (and Wordnik(?))
    }).then(function(response) {
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


  this.uploadBook = function(inputElement) {
      theFile = inputElement.files[0];
      if (inputElement.files && theFile) {
          var reader = new FileReader();
          reader.onload = function(e) {
            $('#book-appears-here').html(e.target.result);
            // console.log(e.target.result);
          };
          reader.readAsText(theFile);
          return theFile;
      }
  };

  this.shareTheFile = function() {
    theFile = theFile;
    return theFile;
  };


  this.loadSavedBook = function() {
      theFile = theFile;
      if (theFile instanceof Blob) { // Check to see if theFile variable contains a blob object
          var reader = new FileReader();
          reader.onload = function(e) {
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
