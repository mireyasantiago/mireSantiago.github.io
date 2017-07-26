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

/*
(function(){

var desencadenar = $('.menu');
var cubrir = $('#cubrir');
var altenarElemento = $('.desplazar');
var estaCerrado = false;

var cargarPagina = function(){
  desencadenar.click(menu_deslizado);
  altenarElemento.click(alternar);
};

var menu_deslizado = function(){

  if (estaCerrado == true) {
    cubrir.hide();/*esconde*/
  /*} else {
    cubrir.show();/*muestra*/
/*  }
};

var alternar = function(){
  $('#wrapper').toggleClass('cambiado');
/*toogleClass: alterna entre agregar y quitar uno o más nombres de clase de los elementos seleccionados.*/
/*}

$(document).ready(cargarPagina);

})();
*/
