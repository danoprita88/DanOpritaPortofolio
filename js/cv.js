
$(document).ready(function () {

  //expandare detalii
    $('#expandDetails').click(function () {
      $('#detailedSkills').show();
      $('#expandDetails').hide();
    });
  //ascunde detaliile
    $('#hideDetails').click(function () {
      $('#detailedSkills').hide();
      $('#expandDetails').show();
    });

  //scoate div-ul in fata
    $('.zonaInfo').click(function() {
      console.log('test');
      $('.zonaDate').hide();
      $('.detaliiModal').addClass('detaliiModalStyleSkills');
      $('.detaliiModal').show('slow');
    });
  // ascunde div-ul cu detaliile
    $('.detaliiModal').click(function() {
      $('.detaliiModal').hide();
      $('.zonaDate').show();
    });
    //scoate div-ul 2 in fata
      $('.zonaExperienta').click(function() {
        $('.zonaDate').hide();
        $('.detaliiModal2').addClass('detaliiModalStyleSkills');
        $('.detaliiModal2').show('slow');
      });
    // ascunde div-ul cu detaliile
      $('.detaliiModal2').click(function() {
        $('.detaliiModal2').hide();
        $('.zonaDate').show();
      });
  });
