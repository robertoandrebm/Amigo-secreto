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
    //Limpiar el campo de entrada
    document.getElementById('amigo').value = ""; // limpia el input
    actualizarLista();
}


