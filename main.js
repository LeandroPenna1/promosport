function saludar() {
    //Mediante un bucle do-while, la idea es hacer que el usuario escriba su nombre y, en caso
    //que evite hacerlo, se volverá a insitir con un nuevo alert.
    let nombreUsuario;
    do {
        nombreUsuario = prompt("Para comenzar, ingrese tu nombre. Presiona 'ESC' para cancelar.");
        if (nombreUsuario === null) {
            alert("Debes ingresar tu nombre");
        } else if (nombreUsuario !== "") {
            alert("Bienvenido a nuestro sitio " + nombreUsuario + "! Te estábamos esperando.");
        }
    } while (nombreUsuario === null || nombreUsuario === "");
}

saludar();

let intentos = 0;
function login() {
    //Con la variable "intentos" definida globalmente, en caso que el usuario intente 3 veces
    //de manera incrrecta, saldra un mensaje de ERROR. (Como el tipico caso que hay un máximo de intentos)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== password) {
        intentos++;
        if (intentos === 3) {
            alert("ERROR! Has ingresado incorrectamente 3 veces.");
        } else {
            alert("intente nuevamente");
        }
    } else {
        alert("BIENVENIDO");
        window.location.href = "tienda-virtual.html";
    }
}