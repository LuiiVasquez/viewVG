/* Bloque de codigo para clickear los modelos en 3D */


let div = document.getElementById("myDIV");
import {model, camera, renderer} from './script.js';
var domEvents = new THREEx.DomEvents(camera, renderer.domElement)
let clicked = false;




function mostrar(){
    let div = document.getElementById("myDIV");
    div.style.display = 'none';
    if(div.style.display === 'none'){
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}
 


/* -------------event listener-------------*/
domEvents.addEventListener(cube, 'click', function(event) {
    if (!clicked) {
        console.log('click 1')
        cube.position.x = 50;
        clicked = true;
    } else {
        console.log('click 2')
        cube.position.x = 25;
        clicked = false;
    }
  });


// /* ------------------Hover---------------*/
// domEvents.addEventListener(cube2, 'mouseover', event => {
//     cube2.scale.set(5,5,5);
// });
// domEvents.addEventListener(cube2, 'mouseout', event => {
//     cube2.scale.set(1,1,1);
// });



// /* ------------------------DIV--------------------------*/
// domEvents.addEventListener(cube3, 'click', function(event) {
//     div.style.display = 'none';
//     if (!clicked) {
//         console.log('mostrado');
//         if(div.style.display === 'none'){
//             div.style.display = 'block';
//         }
//         clicked = true;
//     } else {
//         console.log('ocultado');
//         if(div.style.display === 'block'){
//             div.style.display = 'none';
//         }
//         clicked = false;
//     }
//   });

 




