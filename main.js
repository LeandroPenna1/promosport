let intentos = 0;


function login() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');

    if (usuario !== password) {
        intentos++;
        if (intentos === 3) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "ERROR! Has ingresado incorrectamente 3 veces.",
                footer: '<a href="#">Has olvidado la contraseña?</a>',
              });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Usuario o contraseña incorrectos. Intenta nuevamente.",
                footer: '<a href="#">Has olvidado la contraseña?</a>',
                showConfirmButton: false,
                timer: 1500,
              });
        }
    } else {
        mensajeError.textContent = "";
        window.location.href = "tienda-virtual.html";
    }
}

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById('reviews-container');
        let reviewsHTML = '';

        data.reviews.forEach(review => {
            reviewsHTML += `
                <div class="review">
                    <h3>${review.producto}</h3>
                    <p><strong>Usuario:</strong> ${review.usuario}</p>
                    <p><strong>Puntaje:</strong> ${review.puntaje} / 5</p>
                    <p>${review.comentario}</p>
                </div>
            `;
        });

        reviewsContainer.innerHTML = reviewsHTML;
    })
    .catch(error => console.error('Error del fetch:', error));