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


  this.loadArrayFromStorage = function() {
    var tempObj = {};
    for (var key in localStorage) {
      // localStorage.getItem(key);
      // console.log(localStorage.getItem(key));
      console.log(key);
      tempObj.title = key;
      tempObj.text = localStorage[key];
      files.push(tempObj);
      // console.log(localStorage[key]);
    }
    return files;
  };

  // console.log(files)



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  Uploads the text file.
  - inputElement is my parameter representing the element <input type="file" id="the-book" class="transparent"> (see function in readerController)
  - inputElement.files is the array with the uploaded file
  - inputElement.files[0] contains the desired file data
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var theFile = {title: 'Dummy Title', text: 'Go to the Load Screen to read files here'};


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
          return theFile;
      }
      this.saveFile();
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
    // console.log(theFile.text);
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
    $state.go('reader');
    theFile.title = file.title;
    theFile.text = file.text;
    // console.log(theFile);
    $('#book-appears-here').html(theFile.text);
  };


//   theFile.title = localStorage[file.title];
//   theFile.text = localStorage[file.text];
//   // theFile.text = theFile.text.replace(newFile.title + ' -in-storage- ');
//   console.log(theFile);
//   $('#book-appears-here').html(theFile.text);
// };


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
  this.saveFile = function(inputTitle) {
    var newFile = {};
    var storageTitle;
    var storageText;
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
    localStorage.setItem(newFile.title, newFile.text);
    console.log(newFile.title);
    console.log(localStorage[newFile.title]);
    files.push(newFile);
    console.log(files);
    return files;
    // console.log(newFile.title);
  };

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



  // this.saveFile = function() {
  //   var newFile = {};
  //   newFile.title = theFile.name;
  //   newFile.text = document.getElementById("book-appears-here").innerHTML;
  //   files.push(newFile);
  //   // console.log(newFile.title);
  // };



  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Highlights selected text
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var highlighterStyles = '<a id="bookmark" style="color: black; background-color: rgb(254, 209, 76); border-radius: 10px">';

  this.highlightText = function() {
    // var loadedText = document.getElementById("book-appears-here");
    var selectedText = '';
    var newBmark = {};
    // console.log(loadedText.innerHTML);
    // if (loadedText.getSelection) {
      // loadedText.getSelection().toString();
      selectedText = window.getSelection();
      newBmark.selection = selectedText.toString();
      newBmark.id = newBmark.selection.split(' ').slice(0, 5).join(' ');
      // alert(newBmark.id);
      this.bookmarks.push(newBmark);
      selectedText = selectedText.toString();
      theFile.text = theFile.text.replace(selectedText, highlighterStyles + selectedText + '</a>');
      theFile.text = theFile.text.replace(highlighterStyles + highlighterStyles + selectedText + '</a></a>', highlighterStyles + selectedText + '</a>');
      // console.log(document.getElementById('bookmark'));
      console.log(theFile.text);
      // console.log(window.getSelection().toString());
    // }
    $('#book-appears-here').html(theFile.text);
    // console.log(newFile.title);
  };

  this.unhighlight = function(bmark) {
    theFile.text = theFile.text.replace(highlighterStyles + bmark + '</a>', bmark);
    console.log(theFile.text);
    $('#book-appears-here').html(theFile.text);
  };



  this.spliceBmark = function(bmark) {
    // console.log(this.bookmarks);
    this.bookmarks.splice(this.bookmarks.indexOf(bmark), 1);
    // console.log(this.bookmarks);
    // alert('corn');
    this.unhighlight(bmark.selection);
  };

  this.spliceFile = function(file) {
    // console.log(files);
    theFile.title = file.title;
    theFile.text = file.text;
    console.log(theFile.text);
    console.log(theFile.title);
    return files.splice(files.indexOf(file), 1);
    // alert('corn');
  };

  this.shareFiles = function() {
    return files;
  };


  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Arrays stored in variables and used by nav div components.
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  var files = [
  //   {
  //     'title': 'Dummy File',
  //     'text': 'Dummy text'
  // },
  //   {
  //     'title': 'Another Dummy',
  //     'text': 'Another text'
  //   }
  ];
  this.bookmarks = [
    // {'id': 'here'},
    // {'id': 'there'}
  ];


});





// console.log(theFile);
// $("#the-book").change(function() {
//     uploadBook(this);
// });
