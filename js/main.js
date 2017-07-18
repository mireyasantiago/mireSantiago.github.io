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
  } else {
    cubrir.show();/*muestra*/
  }
};

var alternar = function(){
  $('#wrapper').toggleClass('cambiado');
/*toogleClass: alterna entre agregar y quitar uno o más nombres de clase de los elementos seleccionados.*/
}

$(document).ready(cargarPagina);

})();
