$(window).scroll(function() {

  var winScroll = $(this).scrollTop();

  $('.book-scroll-title').css({'transform' :'translate(0px, ' + winScroll * -0.3 + '%)'});




  // $('.book-scroll-title').css({'transform': 'rotate(-' + winScroll / 40 + 'deg)'});

  // $('.book-scroll-title').css({'transform': 'translate(-' + winScroll / 80 + '%, 0px)'});


  // $('.bo').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ok').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.sc').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ro').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});
  // $('.ll').css({'position': 'absolute', 'transform': 'rotate(-' + winScroll / 2 + 'deg)'});

  // $('.book-scroll-title').css({'transform': 'rotate(-' + winScroll / 2 + 'deg)'});

  // $('.book-scroll-title').css({'position': 'absolute', 'opacity': 100 / (2 * winScroll)});

  // $('.book-scroll-title').css({'position': 'absolute', 'transform' :'translateY(' + winScroll / 3 + '%, 0px)'});


});
