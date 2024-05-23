const prendas = [
    { id: 1, nombre: "Buzo", precio: 35000, imagen: "../recursos/ropaPS/buzo-adelante1.png" },
    { id: 2, nombre: "Short", precio: 11000, imagen: "../recursos/ropaPS/short1.png" },
    { id: 3, nombre: "Gorra", precio: 4500, imagen: "../recursos/ropaPS/gorra.png" },
    { id: 4, nombre: "Mochila", precio: 18000, imagen: "../recursos/ropaPS/mochila.png" },
    { id: 5, nombre: "Musculosa", precio: 7000, imagen: "../recursos/ropaPS/musculosa.png" },
    { id: 6, nombre: "Campera", precio: 29000, imagen: "../recursos/ropaPS/campera-adelante.png" },
];
const container = document.getElementById("containerTV");
const busquedas = document.getElementById("busquedas");
const carritoElement = document.getElementById("carrito");


let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];


if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}


function mostrarPrendas(prendasAMostrar) {
    container.innerHTML = "";
    prendasAMostrar.forEach((element) => {
        const prenda = document.createElement("div");
        prenda.className = "prenda";

        const nombre = document.createElement("h3");
        nombre.innerText = element.nombre;

        const precio = document.createElement("p");
        precio.innerText = "$" + element.precio;

        const imagen = document.createElement("img");
        imagen.src = element.imagen;
        imagen.alt = "Imagen no disponible";

        const agregarBtn = document.createElement("button");
        agregarBtn.innerText = "Agregar al carrito";

        agregarBtn.addEventListener("click", () => agregarAlCarrito(element));

        prenda.appendChild(imagen);
        prenda.appendChild(nombre);
        prenda.appendChild(precio);
        prenda.appendChild(agregarBtn);

        container.appendChild(prenda);
    });
}



function agregarAlCarrito(prenda) {
    carrito.push(prenda);
    actualizarLocalStorage();
    actualizarCarrito();
  }
  
  function eliminarDelCarrito(index) {
    if (index >= 0 && index < carrito.length) {
        carrito.splice(index, 1);
        actualizarLocalStorage();
        actualizarCarrito();
    }
}  
  function actualizarLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function actualizarCarrito() {
    carritoElement.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const prenda = carrito[i];
        if (prenda) {
            const item = document.createElement("div");
            item.className = "item-carrito";

            const nombre = document.createElement("h4");
            nombre.innerText = prenda.nombre;

            const precio = document.createElement("p");
            precio.innerText = "$" + prenda.precio;

            const eliminarBtn = document.createElement("button");
            eliminarBtn.innerText = "Eliminar";
            eliminarBtn.addEventListener("click", () => eliminarDelCarrito(i));

            item.appendChild(nombre);
            item.appendChild(precio);
            item.appendChild(eliminarBtn);

            carritoElement.appendChild(item);
        }
    }
}

function presupuesto() {
    const valor = document.getElementById("presupuestoInput").value;
    const mayorQue = prendas.filter((element) => element.precio < valor);
    mostrarPrendas(mayorQue);
}


function busqueda() {
    const palabra = document.getElementById("busquedaInput").value.toLowerCase();
    const resultado = prendas.filter((element) => element.nombre.toLowerCase().includes(palabra));
    resultado.length > 0 ? mostrarPrendas(resultado) : mostrarMensajeNoEncontrado();
}


function mostrarMensajeNoEncontrado() {
    container.innerHTML = "<p>No se encontraron prendas que coincidan con la búsqueda.</p>";
}


actualizarCarrito();
mostrarPrendas(prendas);
