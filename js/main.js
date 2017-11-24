$(document).ready(function(){
    $('.show-menu').on('click', function(){
        $('.content-menu').slideToggle();
    })

    $(window).resize(function(){
      
        if($(window).width() > 983){
          $('.content-menu').show();
        }else{
            $('.content-menu').hide();
        }
    })
})
// funcion para menu
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
