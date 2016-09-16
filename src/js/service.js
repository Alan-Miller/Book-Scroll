angular.module('bookApp').service('service', function($http, $state) {


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
DATA ARRAYS AND OBJECTS
  Arrays stored in variables and used by nav div components.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var files = [];
this.bookmarks = [];
var theFile = {title: 'Dummy Title', text: 'Go to the Load screen to read files here'};
// var highlighterStyles = '<a style="color: black; background-color: rgb(254, 209, 76); border-radius: 10px">';




/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
UPLOADER
  Uploads text file from hard drive.
    ~ inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
    ~ inputElement.files is the array with the uploaded file
    ~ inputElement.files[0] contains the desired file data
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.uploadBook = function(inputElement) {
      theFile = inputElement.files[0];
      theFile.title = theFile.name;
      if (inputElement.files && theFile) {
          var reader = new FileReader();
          $state.go('reader');
          reader.onload = function(e) {
            $('#book-appears-here').html(e.target.result);
            theFile.text = e.target.result;
          };
          setTimeout(function() {
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
  this.saveFile = function(inputTitle) {
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
  this.loadThisFile = function(file) {
    $state.go('files');
    theFile.title = file.title;
    theFile.text = file.text;
    $('#book-appears-here').html(theFile.text);
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  LOAD LAST
    Loads most recent file stored in variable theFile.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.loadLastFile = function() {
    $('#book-appears-here').html(theFile.text);
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  SPLICE FILE
    Splices deleted files from files list.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.spliceFile = function(file) {
    theFile.title = file.title;
    theFile.text = file.text;
    files.splice(files.indexOf(file), 1);
    return files;
    // alert('corn');
  };



  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  RETURN FILES
    Grants controller access to files array.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.returnFiles = function() {
    return files;
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  RETURN CURRENT FILE
    Makes theFile available to the mainController
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.returnTheFile = function() {
    return theFile;
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  HIGHLIGHTER
    Highlights selected text
    Searches input and highlights all instances within the reader div text
    Adds list item to highlights list showing search term and number of instances found in the text
    Displays error in input box if search term is not found
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.highlightText = function(searchInput) {
    // var loadedText = document.getElementById("book-appears-here");
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
  this.spliceBmark = function(bmark) {
    this.bookmarks.splice(this.bookmarks.indexOf(bmark), 1);
    // alert('corn');
    this.unhighlight(bmark.selection, bmark.input);
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  UNHIGHLIGHTER
    Unhighlights text.
    Removes highlights from text.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  this.unhighlight = function(selection, input) {
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
    this.getWord = function(input) {
      return $http({
        method: 'GET',
        url: 'http://api.wordnik.com:80/v4/word.json/'+input+'/definitions?&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',    //Wordnik
        // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/'+input+'?key=9bfc270a-2520-4eac-87fe-49577b7e0414',   //Merriam-Webster
        dataType: 'JSONP' // Merriam-Webster (and Wordnik(?))
      }).then(function(response) {
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
