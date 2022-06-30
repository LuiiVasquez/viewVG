/* Importación de elementos de modulos.js y boton de busqueda como variable*/

import * as modulos from "./modulos.js";
let btn_buscar = document.getElementById("btn_busq");

/* Función de limpieza de cuadro de búsqueda */
function clean() {
  let text_value = (document.getElementById("text_user").value = "");
  // cerrar menu de opciones al buscar
  let button = document.getElementById("togglermovil");
  button.click();
}

/* Función de búsqueda por sugerencias del archivo autowords.js*/
function buscar() {
  // texto que el usuario introduce
  let text_value = document.getElementById("text_user").value;

  /* Condiciones para el botón de información*/
  // Funcionamiento parecido al de modulos.js
  // Validación según listado de sugerencias

  if (text_value === "A1") {
    modulos.arrow(65, 10, -40); // colocación de "flecha" sobre el módulo
    modulos.center_camera(65, 0, -40); // Colocación de cámara sobre el módulo
    modulos.show("btn_a1"); // visualización de botón de información
    clean(); // llamada a la función de limpieza
  } else if (
    text_value === "A2" ||
    text_value === "Dirección ITEC" ||
    text_value === "Misael Antonio Esquina Quinom" ||
    text_value === "41208" ||
    text_value === "Asistente de dirección ITEC" ||
    text_value === "Lesvia Elena Gonzales Ajpixila" ||
    text_value === "41202" ||
    text_value === "Consejería estudiantil" ||
    text_value === "Vilma Anabela Caxaj Papa" ||
    text_value === "41114" ||
    text_value === "Recursos humanos" ||
    text_value === "Lidia Albertina Perez Toc" ||
    text_value === "41102" ||
    text_value === "Dirección ejecutiva" ||
    text_value === "Juan Carlos Villatoro" ||
    text_value === "41101 " ||
    text_value === "Salón de usos múltiples"
  ) {
    modulos.arrow(65, 10, -53);
    modulos.center_camera(65, 0, -53);
    modulos.show("btn_a2");
    clean();
  } else if (text_value === "A3") {
    modulos.arrow(65, 10, -66);
    modulos.center_camera(65, 0, -66);
    modulos.show("btn_a3");
    clean();
  } else if (
    text_value === "A4" ||
    text_value === "Laboratorio de computación 1" ||
    text_value === "Laboratorio de computación 2" ||
    text_value === "Jefe de cómputo" ||
    text_value === "Gerson René Pérez Martínez" ||
    text_value === "41301" ||
    text_value === "Asistente 1 jefatura de cómputo" ||
    text_value === "Luis Ottoniel López Camey" ||
    text_value === "41302"
  ) {
    modulos.arrow(65, 10, -92);
    modulos.center_camera(65, 0, -92);
    modulos.show("btn_a4");
    clean();
  } else if (text_value === "A5") {
    modulos.arrow(65, 10, -105);
    modulos.center_camera(65, 0, -105);
    modulos.show("btn_a5");
    clean();
  } else if (
    text_value === "B1" ||
    text_value === "Ayuda financiera" ||
    text_value === "Susana Talé Pech" ||
    text_value === "41117" ||
    text_value === "Registro académico" ||
    text_value === "Gloria Macario Tecum" ||
    text_value === "41118" ||
    text_value === "Administración" ||
    text_value === "Cesar Ramos Funes" ||
    text_value === "41104" ||
    text_value === "Asistente de administración" ||
    text_value === "Josué David Minchez Monzón" ||
    text_value === "41105" ||
    text_value === "Especialista en asuntos estudiantiles" ||
    text_value === "Lidia Ofelia Xocop Roquel" ||
    text_value === "Director administrativo" ||
    text_value === "Erick Estuardo Rodas Ericastilla" ||
    text_value === "41103" ||
    text_value === "Director de calidad académica" ||
    text_value === "José Antonio López Rodríquez" ||
    text_value === "41113"
  ) {
    modulos.arrow(23, 10, 0);
    modulos.center_camera(23, 0, 0);
    modulos.show("btn_b1");
    clean();
  } else if (text_value === "B2") {
    modulos.arrow(20, 10, -30);
    modulos.center_camera(20, 0, -30);
    modulos.show("btn_b2");
    clean();
  } else if (
    text_value === "B3" ||
    text_value === "Secretaria facultad de ingeniería" ||
    text_value === "Rosa Marleny Us Can" ||
    text_value === "41203" ||
    text_value === "Secretaria facultad de educación" ||
    text_value === "Susely Marlene Mendez Tzoc" ||
    text_value === "41207" ||
    text_value === "Asistente facultad de eduación" ||
    text_value === "Lisbeth Maritza Cuy Chom" ||
    text_value === "41215" ||
    text_value === "Iván" ||
    text_value === "Encargado de laboratorios" ||
    text_value === "Oscar Iván Yac Chávez" ||
    text_value === "Dirección departamento de turismo" ||
    text_value === "Karla Tobias Lopez" ||
    text_value === "41205" ||
    text_value === "Dirección departamento de informática y administración" ||
    text_value === "Omar Arreaga Lopez" ||
    text_value === "41213" ||
    text_value === "Dirección departamento agroforestal" ||
    text_value === "Armando José Cutz Tax" ||
    text_value === "41214" ||
    text_value === "Dirección departamento de educación" ||
    text_value === "Celso Saloj Pos" ||
    text_value === "41216" ||
    text_value ===
      "Dirección departamento de educación física, deporte y recreación" ||
    text_value === "Danilo Ponciano Nuñez" ||
    text_value === "41206"
  ) {
    modulos.arrow(20, 10, -43);
    modulos.center_camera(20, 0, -43);
    modulos.show("btn_b3");
    clean();
  } else if (
    text_value === "B4" ||
    text_value === "Web master" ||
    text_value === "Luis Alberto Lopez García" ||
    text_value === "41308" ||
    text_value === "Diseño gráfico" ||
    text_value === "Henry SIlvestre Felipe Cojtin" ||
    text_value === "Fejatura de comunicación social y marketing" ||
    text_value === "Axel René Ávila Monzón" ||
    text_value === "41305" ||
    text_value === "Asistente de cursos libres (Centro de Idiomas)" ||
    text_value === "Kevin Ronaldo Pocop Ramos" ||
    text_value === "41307" ||
    text_value === "Asistente de proyectos (Centro de Idiomas)" ||
    text_value === "Adriana Marisol Bixcul Quisquiná" ||
    text_value === "41307" ||
    text_value === "Asistente de cursos internos (Centro de Idiomas)" ||
    text_value === "Gloria María Bocel Cumes" ||
    text_value === "41306" ||
    text_value === "Centro de idiomas" ||
    text_value === "CEI"
  ) {
    modulos.arrow(20, 10, -56);
    modulos.center_camera(20, 0, -56);
    modulos.show("btn_b4");
    clean();
  } else if (text_value === "B5") {
    modulos.arrow(20, 10, -69);
    modulos.center_camera(20, 0, -69);
    modulos.show("btn_b5");
    clean();
  } else if (
    text_value === "B6" ||
    text_value === "Enfermería" ||
    text_value === "Meliza Arminda Godínez Orozco" ||
    text_value === "41116" ||
    text_value === "Coordinador de Maker Space Na'ojilal" ||
    text_value === "Jeremias Ezequiel Morales García" ||
    text_value === "41309" ||
    text_value === "Maker space"
  ) {
    modulos.arrow(20, 10, -82);
    modulos.center_camera(20, 0, -82);
    modulos.show("btn_b6");
    clean();
  } else if (
    text_value === "B7" ||
    text_value === "Biblioteca" ||
    text_value === "Servicio de reproducción" ||
    text_value === "41303" ||
    text_value === "Fotocopiadora"
  ) {
    modulos.arrow(20, 10, -95);
    modulos.center_camera(20, 0, -95);
    modulos.show("btn_b7");
    clean();
  } else if (
    text_value === "B8" ||
    text_value === "Aula virtual" ||
    text_value === "Laboratorio de computación 3"
  ) {
    modulos.arrow(20, 10, -108);
    modulos.center_camera(20, 0, -108);
    modulos.show("btn_b8");
    clean();
  } else if (text_value === "C1") {
    modulos.arrow(-58, 10, -58);
    modulos.center_camera(-58, 0, -58);
    modulos.show("btn_c1");
    clean();
  } else if (
    text_value === "C2" ||
    text_value === "Librería" ||
    text_value === "Mini librería"
  ) {
    modulos.arrow(-50, 10, -73);
    modulos.center_camera(-50, 0, -73);
    modulos.show("btn_c2");
    clean();
  } else if (text_value === "C3") {
    modulos.arrow(-50, 10, -86);
    modulos.center_camera(-50, 0, -86);
    modulos.show("btn_c3");
    clean();
  } else if (text_value === "C4" || text_value === "Dormitorio estudiantes 1") {
    modulos.arrow(-50, 10, -99);
    modulos.center_camera(-50, 0, -99);
    modulos.show("btn_c4");
    clean();
  } else if (text_value === "C5" || text_value === "Dormitorio estudiantes 2") {
    modulos.arrow(-50, 10, -112);
    modulos.center_camera(-50, 0, -112);
    modulos.show("btn_c5");
    clean();
  } else if (text_value === "K") {
    modulos.arrow(-37, 10, -40);
    modulos.center_camera(-37, 0, -40);
    modulos.show("btn_kk");
    clean();
  } else if (text_value === "Q" || text_value === "Cafeteria") {
    modulos.arrow(-5, 10, -165);
    modulos.center_camera(-5, 0, -165);
    modulos.show("btn_cafe");
    clean();
  } else if (text_value === "P" || text_value === "Salón mayor") {
    modulos.arrow(-35, 15, -165);
    modulos.center_camera(-35, 0, -165);
    modulos.show("btn_mayor");
    clean();
  } else if (text_value === "N" || text_value === "Laboratorio de música 1") {
    modulos.arrow(-116, 10, 60);
    modulos.center_camera(-116, 0, 60);
    modulos.show("btn_nn");
    clean();
  } else if (
    text_value === "M1" ||
    text_value === "Residencia catedráticos 1" ||
    text_value === "Dormitorio catedráticos 1"
  ) {
    modulos.arrow(-92, 10, 60);
    modulos.center_camera(-92, 0, 60);
    modulos.show("btn_mm1");
    clean();
  } else if (
    text_value === "M2" ||
    text_value === "Residencia catedráticos 2" ||
    text_value === "Dormitorio catedráticos 2"
  ) {
    modulos.arrow(-105, 10, 60);
    modulos.center_camera(-105, 0, 60);
    modulos.show("btn_mm2");
    clean();
  } else if (
    text_value === "F" ||
    text_value === "Centro de estudios Atitlán" ||
    text_value === "Salón de reuniones" ||
    text_value === "Técnico de laboratorio CEA0" ||
    text_value === "Juan Estuardo Bocel Pocop" ||
    text_value === "41502" ||
    text_value === "Investigador asistente" ||
    text_value === "Mónica María Martínez Fausto" ||
    text_value === "41502" ||
    text_value === "Jefe de educación ambiental CEA" ||
    text_value === "Brenda María Noriega Fernandez" ||
    text_value === "41503" ||
    text_value === "Técnico de campo" ||
    text_value === "Santos Rodrigo Chumil Bixcul" ||
    text_value === "41503" ||
    text_value === "Jefe de inveestigación" ||
    text_value === "Jorge José García Polo" ||
    text_value === "Director CEA" ||
    text_value === "Jorge Luis Galindo Arébalo" ||
    text_value === "41501"
  ) {
    modulos.arrow(-70, 10, 60);
    modulos.center_camera(-70, 0, 60);
    modulos.show("btn_ff");
    clean();
  } else if (
    text_value === "E" ||
    text_value === "EDUCON" ||
    text_value === "Dirección EDUCON" ||
    text_value === "Nely Amparo Elena Can Saquic" ||
    text_value === "41401" ||
    text_value === "Asistente 1 dirección EDUCON" ||
    text_value === "Dany Enrique Queché Martínez" ||
    text_value === "41401" ||
    text_value === "Dirección finca agrícola" ||
    text_value === "Investigador centro de estudios agrícolas y alimentarios" ||
    text_value === "Edwin Baudilio de León" ||
    text_value === "41112" ||
    text_value === "Asistente de producción" ||
    text_value === "Gilberto de León" ||
    text_value === "Investigador asistente" ||
    text_value === "Josué Isaías Bocel"
  ) {
    modulos.arrow(-40, 10, 80);
    modulos.center_camera(-40, 0, 80);
    modulos.show("btn_ee");
    clean();
  } else if (text_value === "Ñ" || text_value === "Laboratorio de música 2") {
    modulos.arrow(-90, 10, 100);
    modulos.center_camera(-90, 0, 100);
    modulos.show("btn_ññ");
    clean();
  } else if (
    text_value === "D" ||
    text_value === "Caja" ||
    text_value === "Edwin ALexis Hom Quisquiná" ||
    text_value === "41111" ||
    text_value === "Jefatura de cuentas por cobrar" ||
    text_value === "Rigoberto Tepaz Jiatz" ||
    text_value === "41108" ||
    text_value === "Asistente de cuentas por cobrar" ||
    text_value === "Gessenia Anakaren Tzunun" ||
    text_value === "41109" ||
    text_value === "Contabilidad" ||
    text_value === "Ester Jackeline Yuliana Julajuj Antonio" ||
    text_value === "41110" ||
    text_value === "Cuentas por cobrar y activos fijos" ||
    text_value === "Yolanda Ambriocio Solis" ||
    text_value === "41107" ||
    text_value === "Dirección financiera" ||
    text_value === "Hector Hugo Ramos Xalcut" ||
    text_value === "41106"
  ) {
    modulos.arrow(-60, 10, 140);
    modulos.center_camera(-60, 0, 140);
    modulos.show("btn_cajaa");
    clean();
  } else if (
    text_value === "G" ||
    text_value === "Garita" ||
    text_value === "Entrada" ||
    text_value === "Salida"
  ) {
    modulos.arrow(0, 10, 160);
    modulos.center_camera(0, 0, 160);
    modulos.show("btn_garita");
    clean();
  } else if (text_value === "L" || text_value === "Salón altiplano") {
    modulos.arrow(25, 10, 140);
    modulos.center_camera(25, 0, 140);
    modulos.show("btn_ll");
    clean();
  } else if (
    text_value === "H" ||
    text_value === "Hospital de ojos" ||
    text_value === "Oftalmología" ||
    text_value === "Ojos"
  ) {
    modulos.arrow(60, 10, 15);
    modulos.center_camera(60, 0, 15);
    modulos.show("btn_hospital");
    clean();
  } else if (text_value === "INTECAP") {
    modulos.arrow(-123, 15, -35);
    modulos.center_camera(-123, 0, -35);
    clean();
  } else {

  /*  else if(){
        modulos.arrow();
        modulos.center_camera();
        modulos.show("btn_");
        clean();
    }   */
    // alerta por si el texto introducido no coincide con las sugerencias
    // Restricción: tiene que coincidir cada palabra, mayúsucula o tílde para funcionar
    alert(
      text_value +
        " no se encuentra en la Universidad. Intenta usar las sugerencias."
    );
  }
}
// Añadir la función onClick al botón buscar del encabezado de la página, y añadir el código de búsqueda por sugerencias.
btn_buscar.addEventListener("click", buscar);
