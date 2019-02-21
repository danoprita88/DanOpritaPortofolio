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
