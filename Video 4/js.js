//variables globales
const btnBoton = document.querySelector('#btnBoton');
const boton = document.querySelector('#boton');
const fondo = document.querySelector('#fondo');

(()=>{
    btnBoton.addEventListener('click', agregarbotones);
    boton.addEventListener('click', delegacion);
})();

function agregarbotones(e){
e.preventDefault();
boton.innerHTML=`<button class="btn btn-primary">primary</button>
<button class="btn btn-secondary">secondary</button>
<button class="btn btn-success">success</button>
<button class="btn btn-danger">danger</button>
<button class="btn btn-warning">warning</button>`;
}   
function delegacion(e){
    e.preventDefault();
   //console.log (e.target.classList[1]);
   const colorBoton= e.target.classList[1];

switch(colorBoton) {

    case ('btn-primary'):
        fondo.className='bg-primary';
        break;

        case ('btn-secondary'):
            fondo.className='bg-secondary';
            break;
             
            case ('btn-success'):
               fondo.className='bg-success';
                 break;
               
                 case ('btn-danger'):
                    fondo.className='bg-danger';
                      break;

                      case ('btn-warning'):
                        fondo.className='bg-warning';
                          break;

            
}

}