
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");


//if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            // filtro de valores de matriz y cambio a lowercase, y retornar solo las palabras que empiezan con lo que escribe el ususario 
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<option value="'+data+'"></option>';
            // return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // mostrar autocompletado
        showSuggeseitons(emptyArray);
        let allList = suggBox.querySelectorAll("option");
        for (let i = 0; i < allList.length; i++) {
            // añadir atributo onclick in cada elemento li
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else{
        searchWrapper.classList.remove("active"); // ocultar autocompletado 
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; // pasar la seleccion del usuario a la barra de busqueda
    searchWrapper.classList.remove("active"); // ocultar autocompletado 
}

function showSuggeseitons(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<option value="'+userValue+'"></option>';
        // listData = '<li>'+userValue+'</li>';
    } else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}




let suggestions = [
    /* ------- A1 ------- */
    "A1",

    /* ------- A2 ------- */
    "A2", "Dirección ITEC", "Misael Antonio Esquina Quinom", "41208 ",
    "Asistente de dirección ITEC", "Lesvia Elena Gonzales Ajpixila ", "41202",
    "Consejería estudiantil", "Vilma Anabela Caxaj Papa", "41114",
    "Recursos humanos", "Lidia Albertina Perez Toc", "41102",
    "Dirección ejecutiva", "Juan Carlos Villatoro", "41101 ",
    "Salón de usos múltiples",

    /* ------- A3 ------- */
    "A3",
    
    /* ------- A4 ------- */
    "A4", "Laboratorio de computación 1", "Laboratorio de computación 2","Jefe de cómputo", "Gerson René Pérez Martínez", "41301",
    "Asistente 1 jefatura de cómputo", "Luis Ottoniel López Camey", "41302", 

    /* ------- A5 ------- */
    "A5",

    /* ------- B1 ------- */
    "B1","Ayuda financiera", "Susana Talé Pech", "41117",
    "Registro académico", "Gloria Macario Tecum", "41118",
    "Administración", "Cesar Ramos Funes", "41104",
    "Asistente de administración", "Josué David Minchez Monzón", "41105",

    /* ------- B2 ------- */
    "B2",

    /* ------- B3 ------- */
    "B3", "Secretaria facultad de ingeniería", "Rosa Marleny Us Can", "41203",
    "Secretaria facultad de educación", "Susely Marlene Mendez Tzoc", "41207",
    "Asistente facultad de eduación", "Lisbeth Maritza Cuy Chom", "41215",
    "Encargado de laboratorios", "Iván",
    "Dirección departamento de turismo", "Karla Tobias Lopez", "41205",
    "Dirección departamento de informática y administración", "Omar Arreaga Lopez", "41213",
    "Dirección departamento agroforestal", "Armando José Cutz Tax", "41214",
    "Dirección departamento de educación", "Celso Saloj Pos", "41216",
    "Dirección departamento de educación física, deporte y recreación", "Danilo Ponciano Nuñez", "41206",

    /* ------- B4 ------- */
    "B4", "Web master", "Luis Lopez", "41308",
    "Diseño gráfico", "Henry SIlvestre Felipe Cojtin",
    "Fejatura de comunicación social y marketing", "Axel René Ávila Monzón", "41305",
    "Asistente de cursos libres (Centro de Idiomas)", "Kevin Ronaldo Pocop Ramos", "41307",
    "Asistente de proyectos (Centro de Idiomas)", "Adriana Marisol Bixcul Quisquiná", "41307",
    "Asistente de cursos internos (Centro de Idiomas)", "Gloria María Bocel Cumes", "41306", "Centro de idiomas", "CEI",

    /* ------- B5 ------- */
    "B5",

    /* ------- B6 ------- */
    "B6", "Enfermería", "Meliza Arminda Godínez Orozco", "41116",
    "Encargado de Maker Space Naojilal", "Jeremias", "456789",

    /* ------- B7 ------- */
    "B7", "Biblioteca", "Fotocopiadora",

    /* ------- B8 ------- */
    "B8", "Aula virtual", "Laboratorio de computación 3",

    /* ------- C1 ------- */
    "C1",

    /* ------- C2 ------- */
    "C2", "Librería", "Mini librería",

    /* ------- C3 ------- */
    "C3",

    /* ------- C4 ------- */
    "C4", "Dormitorio estudiantes 1",

    /* ------- C5 ------- */
    "C5", "Dormitorio estudiantes 2",

    /* ------- K ------- */
    "K",

    /* ------- Cafeteria ------- */
    "Q", "Cafeteria", 

    /* ------- Salón mayor ------- */
    "P", "Salón mayor",

    /* ------- lab musica ------- */
    "N", "Laboratorio de música 1",

    /* ------- m1 ------- */
    "M1", "Residencia catedráticos 1", "Dormitorio catedráticos 1",

    /* ------- m2 ------- */
    "M2", "Residencia catedráticos 2", "Dormitorio catedráticos 2",

    /* ------- F ------- */
    "F", "Centro de estudios Atitlán", "Salón de reuniones",

    /* ------- E ------- */
    "E", "EDUCON", "Dirección EDUCON", "Nely Amparo Elena Can Saquic", "41401",
    "Asistente 1 dirección EDUCON", "Dany Enrique Queché Martínez", "41401",

    /* ------- Ñ ------- */
    "Ñ", "Laboratorio de música 2",

    /* ------- D ------- */
    "D", "Caja", "Edwin ALexis Hom Quisquiná", "41111",
    "Jefatura de cuentas por cobrar", "Rigoberto Tepaz Jiatz", "41108",
    "Asistente de cuentas por cobrar", "Gessenia Anakaren Tzunun", "41109",
    "Contabilidad", "Ester Jackeline Yuliana Julajuj Antonio", "41110",
    "Cuentas por cobrar y activos fijos", "Yolanda Ambriocio Solis", "41107",
    "Dirección financiera", "Hector Hugo Ramos Xalcut", "41106",

    /* ------- Garita ------- */
    "G", "Garita", "Entrada", "Salida",

    /* ------- L ------- */
    "L", "Salón altiplano",

    /* ------- hospital ojos ------- */
    "H", "Hospital de ojos", "Oftalmología", "Ojos",

    /* ------- intecap ------- */
    "INTECAP"


];

