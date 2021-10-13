import * as modulos from './modulos.js'
let btn_buscar = document.getElementById("btn_busq");


function clean(){
    let text_value = document.getElementById("text_user").value = "";
}
function buscar(){
    let text_value = document.getElementById("text_user").value;
    
    if(text_value==="Dirección ejecutiva"||text_value==="Juan Carlos Villatoro"||text_value==="41101"){
        modulos.arrow(65,10,-53);
        modulos.center_camera(65,0,-53);
        modulos.show("btn_a2");
        clean();
    }
    else if(text_value==="Jefe de cómputo"||text_value==="Gerson René Pérez Martínez"||text_value==="41301"){
        modulos.arrow(65,10,-92);
        modulos.center_camera(65,0,-92);
        modulos.show("btn_a4");
        clean();
    }
    else if(text_value==="Ayuda financiera"||text_value==="Registro académico"||text_value==="Administración"||text_value==="Asistente de administración"){
        modulos.arrow(23,10,0);
        modulos.center_camera(23,10,0);
        modulos.show("btn_b1");
        clean();
    }

}
btn_buscar.addEventListener('click', buscar);


