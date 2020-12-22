/**
 * Funcion tooltip
 */
$(function () {
    $('[data-toggle="tooltip"]').tooltip();

/**
 * Alerta enviar correo
 */
  $('#enviarCorreo').click(function(){
    alert("el correo se envio satisfactoriamente")
});

$('body').on('dblclick', 'h4', function(){
  $(this).css("color","red");
});
$('.card-title').click(function(){
  $('.card-text').toogle()
});

});