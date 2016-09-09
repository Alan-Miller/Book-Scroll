// <div onmouseover="document.body.style.overflow='hidden';" onmouseout="document.body.style.overflow='auto';"></div>


function uploadBook(htmlFile) {
    if (htmlFile.files && htmlFile.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          $('#book-goes-here').html(e.target.result);
        };

        reader.readAsText(htmlFile.files[0]);
    }
}

$("#the-book").change(function(){
    uploadBook(this);
});
