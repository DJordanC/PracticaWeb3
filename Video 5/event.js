$(document).ready(function () {


    var parrafo = $('#resultado p');

    
    $('.btn-primary').click(function(){
         parrafo.addClass('display-4');
     });

     $('.btn-danger').click(function(){
        parrafo.removeClass('display-4');
     });

    $('.btn-warning').click(function(){
        parrafo.toggleClass('text-danger');
     });


    /* validacion de formulario
           $('#formulario').submit(function(e) { 
           e.preventDefault();
           var nombre = $('#nombre').val();
           console.log(nombre);
       });
   */
    /*Animaciones configuradas

    // var resultado = $('#resultado');
    
    // $('.btn-primary').click(function(){
    //     // resultado.show(1000);
    //     resultado.fadeIn('fast');
    // });
    */
    
    // $('.btn-danger').click(function(){
    //     // resultado.hide(1000);
    //     resultado.fadeOut('slow');

    // });

    // $('.btn-warning').click(function(){
    //     resultado.toggle(1000);
    // });

    //para crear animaciones 
    // $('.btn-primary').click(function(){
    //     resultado.animate({left:"250px",
    //     opacity:'0.5',
    //     height:'+=150px',
    //     width:'+=150px'},3000,function(){
    //         resultado.animate({
    //             left:"30px",
    //             opacity:'1',
    //             height:'-=150px',
    //             width:'-=150px'
    //         },1000)
    //     });
    // });

    
});
//  keyup()
// $(document).ready(function() {
//     //Declarar variables reutilizables
//     var input = $("#nombre");
//     var contenido = $("#contenido2");
  
//     //Evento keyup
//     input.keyup(function() {
//       console.log(input.val()); //verificamos en consola
//       contenido.html(input.val()); //agregamos en contenido
  
//       //Podemos verificar si está vacio el input
//       if (input.val() === "") {
//         contenido.html("Estoy esperando...");
//       }
//     });
//   });

 });