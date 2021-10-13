
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
    /* ------- A2 ------- */
    "Dirección ejecutiva",
    "Juan Carlos Villatoro",
    "41101",
    
    /* ------- A4 ------- */
    "Jefe de cómputo",
    "Gerson René Pérez Martínez",
    "41301",

    /* ------- B1 ------- */
    "Ayuda financiera",
    "Registro académico",
    "Administración",
    "Asistente de administración",
    
];

