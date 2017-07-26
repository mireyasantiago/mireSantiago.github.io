$(document).ready(function(){


    $('.show-menu').on('click', function(){

        $('.content-menu').slideToggle();
    })
/*El método resize () desencadena el evento
redimensionar o asigna una función para ejecutarse cuando
se produce un evento de cambio de tamaño.*/
    $(window).resize(function(){
        /*el metodo heigth:establece o devuelve la altura de los
        elementos seleccionados.*/


        if($(window).width() > 983){
            $('.content-menu').show();

        }else{
            $('.content-menu').hide();
        }

    })

})
