$(document).ready(function () {
   /*console.log('Funcionando');

   $('h1').html('Cambio el texto de la etiqueta h1');
   $('.display-4').html('Es una clase');
   $('#texto').html('Esto era un lorem');
   document.querySelector('h1').innerHTML='etiqueta h1';
   document.querySelector('.display-4').innerHTML='clase';
   document.querySelector('#texto').innerHTML='Lorem';
*/
$('.container h1').html('Hola mundo xD');
$('.container h1:first').html('excelente');
$('.container h1:last').html('siguiente texto :p');

$('#texto').addClass('text-danger'); 
$('.container h1:last').addClass('text-center'); 
$('#texto').removeClass('display-4');

$('#contenedor').append('<h3>Elemento agregado con jquery al final</h3>'); 
$('#contenedor').prepend('<h2>Elemento agregado con jquery al inicio</h2>'); 

$('.color-blue').css('color', 'blue'); 
$('.color-blue').css({color: 'blue', background:'salmon', padding:'20px'});

//$('.color-blue').remove(); 
$('.color-blue').hide(); 

$('img').attr('src', 'icono.jpg');
$('img:last').attr("width","100");

   

});