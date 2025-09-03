//Fucionalidades:
//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
//variable que almacenará los nombres de los amigos ingresados:
const amigos = [];
//función que agrega amigos
function agregarAmigo() {
//Capturar el valor del campo de entrada:
    let nombreAmigo = document.getElementById('amigo').value.trim();
    //Validar la entrada:
    if (nombreAmigo === "") {
        //  alert con un mensaje de error: "Por favor, inserte un nombre."    
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreAmigo); // lo agrega al arreglo
    console.log("Lista de amigos:", amigos);
    //Limpiar el campo de entrada
    document.getElementById('amigo').value = ""; // limpia el input
    actualizarLista();
}
function actualizarLista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar cada nombre como un <li>
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
function sortearAmigo() {
    // 1. Validar que haya amigos en el array
    if (amigos.length < 2) {
        alert("No hay suficientes amigos para hacer un sorteo.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es: ${amigoSorteado}</li>`;
}