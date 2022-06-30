/* Este script controla el botón modulos de la barra superior
para mostrar pop up y resaltar el modulo en cuestion*/
import * as THREE from "./threejs/three.module.js";
import { camera, scene, renderer, controls, loader } from "./script.js";

// importar variables de módulo del html
let btn_moda1 = document.getElementById("btn_moda1");
let btn_moda2 = document.getElementById("btn_moda2");
let btn_moda3 = document.getElementById("btn_moda3");
let btn_moda4 = document.getElementById("btn_moda4");
let btn_moda5 = document.getElementById("btn_moda5");

let btn_modb1 = document.getElementById("btn_modb1");
let btn_modb2 = document.getElementById("btn_modb2");
let btn_modb3 = document.getElementById("btn_modb3");
let btn_modb4 = document.getElementById("btn_modb4");
let btn_modb5 = document.getElementById("btn_modb5");
let btn_modb6 = document.getElementById("btn_modb6");
let btn_modb7 = document.getElementById("btn_modb7");
let btn_modb8 = document.getElementById("btn_modb8");

let btn_modc1 = document.getElementById("btn_modc1");
let btn_modc2 = document.getElementById("btn_modc2");
let btn_modc3 = document.getElementById("btn_modc3");
let btn_modc4 = document.getElementById("btn_modc4");
let btn_modc5 = document.getElementById("btn_modc5");

let btn_k = document.getElementById("btn_k");
let btn_cafe = document.getElementById("btn_cafete");
let btn_mayor = document.getElementById("btn_sama");
let btn_n = document.getElementById("btn_n");
let btn_m1 = document.getElementById("btn_m1");
let btn_m2 = document.getElementById("btn_m2");
let btn_f = document.getElementById("btn_f");
let btn_e = document.getElementById("btn_e");
let btn_ñ = document.getElementById("btn_ñ");
let btn_caja = document.getElementById("btn_caja");
let btn_garita = document.getElementById("btn_gari");
let btn_salalti = document.getElementById("btn_l");
let btn_hospital = document.getElementById("btn_hospi");

let btn_intecap = document.getElementById("btn_inte");

let btn_canchas = document.getElementById("btn_canchas");
let btn_campo1 = document.getElementById("btn_campo1");
let btn_campo2 = document.getElementById("btn_campo2");
let btn_area1 = document.getElementById("btn_area1");
let btn_area2 = document.getElementById("btn_area2");
let btn_area3 = document.getElementById("btn_area3");
let btn_area4 = document.getElementById("btn_area4");

// variables para flecha
let geometry = new THREE.BoxGeometry(3, 3, 3);
let material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); //wareframe es para los mallas
let flech = new THREE.Mesh(geometry, material);
flech.scale.set(0.5, 0.5, 0.5);

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

/*----------------------- busqueda de cada elemento y ocultarlo antes de mostrar el necesario ----------------------- */
function toggle(className, displayState) {
  var elements = document.getElementsByClassName(className);

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = displayState;
  }
}

/*----------------------- Mostrar botones modal segun id ----------------------- */
function mostrar(btn) {
  let float = document.getElementById("div-btnFloat"); // importar div de botones
  let img = document.getElementById(btn); // importar boton seleccionado
  toggle("btn-float", "none"); // esconder todos los botones
  float.style.display = "none";
  img.style.display = "none";
  if (float.style.display === "none") {
    float.style.display = "block";
    img.style.display = "block";
  } else {
    float.style.display = "none";
    img.style.display = "none";
  }
}

/*----------------------- Crear flecha ----------------------- */
function flecha(x, y, z) {
  flech.position.set(x, y, z);
  scene.add(flech);
  scene.add(directionalLight);
}

/*----------------------- funcion para centrar la cámara en todos los modulos ----------------------- */
function centrar_camara(x, y, z) {
  // resetear los controles
  controls.reset();
  // cambiar de posicion la camara
  controls.target.set(x, y, z);
  // cambiar la rotación de la camara
  camera.rotation.set(-1, -2, -3);
  // actualizar la posición de la camara y orbit controls
  controls.update();
}

/*----------------------- funcion para cerrar el menu de botones en dispositivos moviles ----------------------- */
function autoclick() {
  // id del boton toggler en index
  let button = document.getElementById("togglermovil");
  button.click();
}

/*----------------------- funcion click en el botón modulos A -----------------------*/
function click_modulo_a1() {
  // reseteo de camara y controles
  centrar_camara(65, -5, -40);
  // Colocación de flecha con el modulo
  flecha(65, 10, -40);
  // mostrar boton flotante
  mostrar("btn_a1");
  //showButton('btn1');
  //arrow(65,5,-47);
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_moda1.addEventListener("click", click_modulo_a1);
function click_modulo_a2() {
  // reseteo de camara y controles
  centrar_camara(65, 0, -53);
  // Colocación de flecha con el modulo
  flecha(65, 10, -53);
  //arrow(65,5,-64);
  // mostrar boton flotante
  mostrar("btn_a2");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_moda2.addEventListener("click", click_modulo_a2);
function click_modulo_a3() {
  // reseteo de camara y controles
  centrar_camara(65, 0, -66);
  // Colocación de flecha con el modulo
  flecha(65, 10, -66);
  // mostrar boton flotante
  mostrar("btn_a3");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_moda3.addEventListener("click", click_modulo_a3);
function click_modulo_a4() {
  // reseteo de camara y controles
  centrar_camara(65, 0, -92);
  // Colocación de flecha con el modulo
  flecha(65, 10, -92);
  // mostrar boton flotante
  mostrar("btn_a4");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_moda4.addEventListener("click", click_modulo_a4);
function click_modulo_a5() {
  // reseteo de camara y controles
  centrar_camara(65, 0, -105);
  // Colocación de flecha con el modulo
  flecha(65, 10, -105);
  // mostrar boton flotante
  mostrar("btn_a5");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_moda5.addEventListener("click", click_modulo_a5);

/*----------------------- funcion click en el modulos B ------------------------*/
function click_modulo_b1() {
  // reseteo de camara y controles
  centrar_camara(23, 10, 0);
  // Colocación de flecha con el modulo
  flecha(23, 10, 0);
  // mostrar boton flotante
  mostrar("btn_b1");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb1.addEventListener("click", click_modulo_b1);
function click_modulo_b2() {
  // reseteo de camara y controles
  centrar_camara(20, 10, -30);
  // Colocación de flecha con el modulo
  flecha(20, 10, -30);
  // mostrar boton flotante
  mostrar("btn_b2");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb2.addEventListener("click", click_modulo_b2);
function click_modulo_b3() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -43);
  // Colocación de flecha con el modulo
  flecha(20, 10, -43);
  // mostrar boton flotante
  mostrar("btn_b3");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb3.addEventListener("click", click_modulo_b3);
function click_modulo_b4() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -56);
  // Colocación de flecha con el modulo
  flecha(20, 10, -56);
  // mostrar boton flotante
  mostrar("btn_b4");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb4.addEventListener("click", click_modulo_b4);
function click_modulo_b5() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -69);
  // Colocación de flecha con el modulo
  flecha(20, 10, -69);
  // mostrar boton flotante
  mostrar("btn_b5");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb5.addEventListener("click", click_modulo_b5);
function click_modulo_b6() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -82);
  // Colocación de flecha con el modulo
  flecha(20, 10, -82);
  // mostrar boton flotante
  mostrar("btn_b6");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb6.addEventListener("click", click_modulo_b6);
function click_modulo_b7() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -95);
  // Colocación de flecha con el modulo
  flecha(20, 10, -95);
  // mostrar boton flotante
  mostrar("btn_b7");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb7.addEventListener("click", click_modulo_b7);
function click_modulo_b8() {
  // reseteo de camara y controles
  centrar_camara(20, 0, -108);
  // Colocación de flecha con el modulo
  flecha(20, 10, -108);
  // mostrar boton flotante
  mostrar("btn_b8");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modb8.addEventListener("click", click_modulo_b8);

/*----------------------- funcion click en el modulos C ------------------------*/
function click_modulo_c1() {
  // reseteo de camara y controles
  centrar_camara(-58, 0, -58);
  // Colocación de flecha con el modulo
  flecha(-58, 10, -58);
  // mostrar boton flotante
  mostrar("btn_c1");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modc1.addEventListener("click", click_modulo_c1);
function click_modulo_c2() {
  // reseteo de camara y controles
  centrar_camara(-50, 0, -73);
  // Colocación de flecha con el modulo
  flecha(-50, 10, -73);
  mostrar("btn_c2");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modc2.addEventListener("click", click_modulo_c2);
function click_modulo_c3() {
  // reseteo de camara y controles
  centrar_camara(-50, 0, -86);
  // Colocación de flecha con el modulo
  flecha(-50, 10, -86);
  mostrar("btn_c3");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modc3.addEventListener("click", click_modulo_c3);
function click_modulo_c4() {
  // reseteo de camara y controles
  centrar_camara(-50, 0, -99);
  // Colocación de flecha con el modulo
  flecha(-50, 10, -99);
  mostrar("btn_c4");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modc4.addEventListener("click", click_modulo_c4);
function click_modulo_c5() {
  // reseteo de camara y controles
  centrar_camara(-50, 0, -112);
  // Colocación de flecha con el modulo
  flecha(-50, 10, -112);
  mostrar("btn_c5");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_modc5.addEventListener("click", click_modulo_c5);

/*----------------------- funcion click para varios------------------------*/
function click_varios_k() {
  // reseteo de camara y controles
  centrar_camara(-37, 0, -40);
  // Colocación de flecha con el modulo
  flecha(-37, 10, -40);
  mostrar("btn_kk");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_k.addEventListener("click", click_varios_k);
function click_varios_cafe() {
  // reseteo de camara y controles
  centrar_camara(-5, 0, -165);
  // Colocación de flecha con el modulo
  flecha(-5, 10, -165);
  mostrar("btn_cafe");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_cafe.addEventListener("click", click_varios_cafe);
function click_varios_mayor() {
  // reseteo de camara y controles
  centrar_camara(-35, 0, -165);
  // Colocación de flecha con el modulo
  flecha(-35, 15, -165);
  mostrar("btn_mayor");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_mayor.addEventListener("click", click_varios_mayor);
function click_varios_n() {
  // reseteo de camara y controles
  centrar_camara(-116, 0, 60);
  // Colocación de flecha con el modulo
  flecha(-116, 10, 60);
  mostrar("btn_nn");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_n.addEventListener("click", click_varios_n);
function click_varios_m1() {
  // reseteo de camara y controles
  centrar_camara(-92, 0, 60);
  // Colocación de flecha con el modulo
  flecha(-92, 10, 60);
  mostrar("btn_mm1");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_m1.addEventListener("click", click_varios_m1);
function click_varios_m2() {
  // reseteo de camara y controles
  centrar_camara(-105, 0, 60);
  // Colocación de flecha con el modulo
  flecha(-105, 10, 60);
  mostrar("btn_mm2");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_m2.addEventListener("click", click_varios_m2);
function click_varios_f() {
  // reseteo de camara y controles
  centrar_camara(-70, 0, 60);
  // Colocación de flecha con el modulo
  flecha(-70, 10, 60);
  mostrar("btn_ff");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_f.addEventListener("click", click_varios_f);
function click_varios_e() {
  // reseteo de camara y controles
  centrar_camara(-40, 0, 80);
  // Colocación de flecha con el modulo
  flecha(-40, 10, 80);
  mostrar("btn_ee");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_e.addEventListener("click", click_varios_e);
function click_varios_ñ() {
  // reseteo de camara y controles
  centrar_camara(-90, 0, 100);
  // Colocación de flecha con el modulo
  flecha(-90, 10, 100);
  mostrar("btn_ññ");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_ñ.addEventListener("click", click_varios_ñ);
function click_varios_caja() {
  // reseteo de camara y controles
  centrar_camara(-60, 0, 140);
  // Colocación de flecha con el modulo
  flecha(-60, 10, 140);
  mostrar("btn_cajaa");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_caja.addEventListener("click", click_varios_caja);
function click_varios_garita() {
  // reseteo de camara y controles
  centrar_camara(0, 0, 160);
  // Colocación de flecha con el modulo
  flecha(0, 10, 160);
  mostrar("btn_garita");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_garita.addEventListener("click", click_varios_garita);
function click_varios_salalti() {
  // reseteo de camara y controles
  centrar_camara(25, 0, 140);
  // Colocación de flecha con el modulo
  flecha(25, 10, 140);
  mostrar("btn_ll");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_salalti.addEventListener("click", click_varios_salalti);
function click_varios_hospital() {
  // reseteo de camara y controles
  centrar_camara(60, 0, 15);
  // Colocación de flecha con el modulo
  flecha(60, 10, 15);
  mostrar("btn_hospital");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_hospital.addEventListener("click", click_varios_hospital);

/*----------------------- funcion click para INTECAP ------------------------*/
function click_varios_intecap() {
  // reseteo de camara y controles
  centrar_camara(-123, 0, -35);
  // Colocación de flecha con el modulo
  flecha(-123, 15, -35);
  // mostrar("btn_intecap");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_intecap.addEventListener("click", click_varios_intecap);

/*----------------------- funcion click para areas ------------------------*/
function click_canchas() {
  // reseteo de camara y controles
  centrar_camara(-15, 0, -80);
  // Colocación de flecha con el modulo
  flecha(-15, 10, -80);
  mostrar("btn_canchass");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_canchas.addEventListener("click", click_canchas);
function click_campo1() {
  // reseteo de camara y controles
  centrar_camara(5, 0, 70);
  // Colocación de flecha con el modulo
  flecha(5, 10, 70);
  mostrar("btn_campo11");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_campo1.addEventListener("click", click_campo1);
function click_campo2() {
  // reseteo de camara y controles
  centrar_camara(100, 0, -150);
  // Colocación de flecha con el modulo
  flecha(100, 10, -150);
  mostrar("btn_campo22");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_campo2.addEventListener("click", click_campo2);
function click_area1() {
  // reseteo de camara y controles
  centrar_camara(-8, 0, 125);
  // Colocación de flecha con el modulo
  flecha(-8, 10, 125);
  mostrar("btn_area11");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_area1.addEventListener("click", click_area1);
function click_area2() {
  // reseteo de camara y controles
  centrar_camara(-70, 0, 85);
  // Colocación de flecha con el modulo
  flecha(-70, 10, 85);
  mostrar("btn_area22");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_area2.addEventListener("click", click_area2);
function click_area3() {
  // reseteo de camara y controles
  centrar_camara(-35, 0, -10);
  // Colocación de flecha con el modulo
  flecha(-35, 10, -10);
  mostrar("btn_area33");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_area3.addEventListener("click", click_area3);
function click_area4() {
  // reseteo de camara y controles
  centrar_camara(3, 0, -140);
  // Colocación de flecha con el modulo
  flecha(3, 10, -140);
  mostrar("btn_area44");
  // función para cerrar el menú de opciones en dispositivos moviles
  autoclick();
}
// event Listener
btn_area4.addEventListener("click", click_area4);

/* ---------------- Exportar variables para el archivo search.js ---------------- */
export function arrow(x, y, z) {
  flech.position.set(x, y, z);
  scene.add(flech);
  scene.add(directionalLight);
}

/*----------------------- exportar funcion para centrar la cámara en todos los modulos ----------------------- */
export function center_camera(x, y, z) {
  // resetear los controles
  controls.reset();
  // cambiar de posicion la camara
  controls.target.set(x, y, z);
  // cambiar la rotación de la camara
  camera.rotation.set(-1, -2, -3);
  // actualizar la posición de la camara y orbit controls
  controls.update();
}

/*----------------------- exportar función show ----------------------- */
export function show(btn) {
  let float = document.getElementById("div-btnFloat");
  let img = document.getElementById(btn);
  toggle("btn-float", "none"); // esconder todos los botones
  float.style.display = "none";
  img.style.display = "none";
  if (float.style.display === "none") {
    float.style.display = "block";
    img.style.display = "block";
  } else {
    float.style.display = "none";
    img.style.display = "none";
  }
}
