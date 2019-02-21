// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Header behavior
$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
        $('header').addClass('behavior-header');
    } else {
        $('header').removeClass('behavior-header');
    }
});

//https://www.youtube.com/watch?v=J2HLW4A40X8

$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next(); //next() este o functie jQuery
    if(nextImg.length) {
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    }
  });
  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev(); //next() este o functie jQuery
    if(prevImg.length) {
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
    }
  });
});

$(document).ready(function() {
  $('#linkHike').on('click', function() {
    console.log('hola');
    $('#MTB').hide();
    $('#linkHike').show();
  });

});
