let intentos = 0;


function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');

    if (username !== password) {
        intentos++;
        if (intentos === 3) {
            mensajeError.textContent = "ERROR! Has ingresado incorrectamente 3 veces.";
        } else {
            mensajeError.textContent = "Usuario o contraseña incorrectos. Intenta nuevamente.";
        }
    } else {
        mensajeError.textContent = "";
        window.location.href = "tienda-virtual.html";
    }
}