// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declara el array para recolectar los amigos ingresados.
let amigos = [];
 //Obtiene el elemento lista del html.
let lista=document.getElementById('listaAmigos');
 //Obtiene el elemento resultado del html.
let resultado=document.getElementById('resultado');

function agregarAmigo(){
//Captura el valor del campo de entrada Input del html correspondiente al nombre de un amigo.
let valor =document.getElementById('amigo').value;
if (amigos.length == 0){
      //Limpiar resultado porque se trata de un nuevo juego
      resultado.innerHTML = "";
}
//Valida la entrada.Si es igual a una cadena vacía o contiene números o caracteres distintos a letras ..
if(valor=="" || soloLetrasConAcentos(valor)==false){
    alert("Por favor, ingrese un nombre válido");
}else{
    //Actualiza el array de amigos.
    amigos.push(valor);
    lista.innerHTML="";
     //Actualiza la lista de amigos.
    actualizarLista(); 
}
 //Limpia el campo de entrada.
 document.getElementById('amigo').value="";
}

function actualizarLista(){ 
    // Iteramos sobre los datos y creamos elementos li
    amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);    
    }); 
}

//Expresión regular que evalúa una cadena y retorna verdadero si solo contiene letras
function soloLetrasConAcentos(cadena) {
    return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(cadena);
}

//elige un amigo de entre los ingresados
function sortearAmigo(){
    //Comprueba que haya ingresado al menos un amigo
    if (amigos.length>0){
        let amigoSorteado = Math.floor(Math.random()*amigos.length);
        lista.innerHTML="";
        resultado.innerHTML='El amigo secreto sorteado es ' + amigos[amigoSorteado];
    }else{
        alert("Debes ingresar como mínimo un amigo");
    }
   //vaciar el array para un nuevo juego
   amigos=[];
}
