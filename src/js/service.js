angular.module('bookApp').service('service', function($http, $state) {

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  This function pulls word definitions from the Wordnik API.
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
  Uploads the text file.
  - inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
  - inputElement.files is the array with the uploaded file
  - inputElement.files[0] contains the desired file data
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var theFile = {title: 'About Steve', text: 'Steve sucks.'};


  this.uploadBook = function(inputElement) {
      theFile = inputElement.files[0];
      if (inputElement.files && theFile) {
          var reader = new FileReader();
          reader.onload = function(e) {
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
  this.loadLastFile = function() {
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
  this.loadThisFile = function(file) {
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
  this.saveFile = function() {
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


  this.highlightText = function() {
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

  this.unhighlight = function(bmark) {
    theFile.text = theFile.text.replace('<a id="codeword" style="color: white; background-color: rgb(217, 56, 46)">' + bmark + '</a>', bmark);
    console.log(theFile.text);
    $('#book-appears-here').html(theFile.text);
  };



  this.spliceBmark = function(bmark) {
    // console.log(this.bookmarks);
    this.bookmarks.splice(this.bookmarks.indexOf(bmark), 1);
    // console.log(this.bookmarks);
    // alert('corn');
    this.unhighlight(bmark.id);
  };

  this.spliceFile = function(file) {
    console.log(this.files);
    this.files.splice(this.files.indexOf(file), 1);
    console.log(this.files);
    // alert('corn');
  };




  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Arrays stored in variables and used by nav div components.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.files = [
    {
      'title': 'Dummy File',
      'text': 'Dummy text'
  },
    {
      'title': 'Another Dummy',
      'text': 'Another text'
    }
  ];
  this.bookmarks = [
    {'id': 'here'},
    {'id': 'there'}
  ];


});





// console.log(theFile);
// $("#the-book").change(function() {
//     uploadBook(this);
// });
