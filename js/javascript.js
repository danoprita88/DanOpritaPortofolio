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

//Image slider
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
    var prevImg = currentImg.prev(); //prev() este o functie jQuery
    if(prevImg.length) {
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
    }
  });
});

//Easy Tabs
function hobby(evt, hobbyName) { //functia se exectua la click pe link
  var i, tabcontent, tablinks; // declaram variabilele
  tabcontent = document.getElementsByClassName("tabcontent"); //definim variabila tabcontent ca fiind egala cu class tabcontent.
  for (i = 0; i < tabcontent.length; i++) {
    console.log(tabcontent.length);//tabcontent.length = 3 (adica avem 3 taburi cu clasa tabcontent)
    tabcontent[i].style.display = "none"; //ascundem toate taburile
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", ""); //dezactivam toate link-urile acive
  }
  document.getElementById(hobbyName).style.display = "block"; //afisam hobby-ul selectat, rezultat din parametru al functiei activate de click
  evt.currentTarget.className += " active"; //ii dam clasa activa evenimentului curent.
}
