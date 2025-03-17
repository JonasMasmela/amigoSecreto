// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; // Almacena los nombres de los amigos.

function agregarAmigo() {
    // Obtiene el valor del campo de entrada.
    let nombre = document.getElementById('amigo').value.trim();

    // Validar que el nombre no esté vacío.
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que el nombre no esté duplicado.
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista.
    listaAmigos.push(nombre);

    // Actualizar la lista visual en el HTML.
    actualizarListaAmigos();

    // Limpiar el campo de entrada.
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizar.

    // Recorrer la lista de amigos y agregar cada uno como un elemento <li>.
    listaAmigos.forEach(function(amigo) {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista.
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    }

    // Seleccionar un nombre aleatorio de la lista.
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado del sorteo.
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

function reiniciarJuego() {
    listaAmigos = []; // Vacía la lista de amigos.
    actualizarListaAmigos(); // Limpia la lista visual.
    document.getElementById('resultado').innerHTML = ""; // Limpia el resultado del sorteo.
}