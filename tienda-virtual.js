/* 
function precios(prenda) {

    switch(prenda) {
        case "buzo":
            return"$30";
            break;
        case "short":
            return "$20";
            break;
        case "gorra":
            return "$15";
            break;
        case "mochila":
            return "$15";
            break;
        case "musculosa":
            return "$25";
            break;
    }
}

function comprar() {
    let prenda = prompt("Escribe: buzo, short, gorra, mochila o musculosa");
    if (prenda === "buzo" || prenda === "short" || prenda === "gorra" || prenda === "mochila" || prenda === "musculosa") {
        console.log("El precio es: " + precios(prenda));
    } else {
        console.log("Opción inválida. Intente nuevamente");
    }
} */

/* 
PRIMER PRE-ENTREGA:
En este caso, realicé en principio una funcion que utiliza switch para obtener los precios de cada prenda
En segundo lugar una funcion que, al apretar un botón, aparezca un prompt para consultar precio de la prenda que interese
*/

/* LA SEGUNDA PRE-ENTREGA CONSTARÁ EN LO QUE ESCRIBDO DE AQUÍ PARA ABAJO */

const prendas = [
    {
        id: 1,
        nombre: "Buzo",
        precio: 35000,
        imagen: "../recursos/ropaPS/buzo-adelante1.png",
    },
    {
        id: 2,
        nombre: "Short",
        precio: 11000,
        imagen: "../recursos/ropaPS/short1.png",
    },
    {
        id: 3,
        nombre: "Gorra",
        precio: 4500,
        imagen: "../recursos/ropaPS/gorra.png",
    },
    {
        id: 4,
        nombre: "Mochila",
        precio: 18000,
        imagen: "../recursos/ropaPS/mochila.png",
    },
    {
        id: 5,
        nombre: "Musculosa",
        precio: 7000,
        imagen: "../recursos/ropaPS/musculosa.png",
    },
    {
        id: 6,
        nombre: "Campera",
        precio: 29000,
        imagen: "../recursos/ropaPS/campera-adelante.png",
    },
]
/* el "containerTV que creamos en el html lo traemos mdiante el getElementByID" */
const container = document.getElementById("containerTV");
/* Hacemos un for each, para crear una publicación con el nombre, precio e imagen. También incorporamos al div la clase que creamos en sass (metodo que utilicé en el curso de desarrollo web) */
prendas.forEach(element => {
    const prenda = document.createElement("div");
    prenda.className = "prenda"

    const nombre = document.createElement("h3");
    nombre.innerText = element.nombre;

    const precio = document.createElement("p");
    precio.innerText = "$" + element.precio;

    const imagen = document.createElement("img");
    imagen.src = element.imagen;
    imagen.alt = "Imagen no disponible"
/* Agregamos los elemenos al doc */
    prenda.append(imagen);
    prenda.appendChild(nombre);
    prenda.appendChild(precio);

    container.appendChild(prenda)
});
/* Hacemos un filter para que la gente pueda filtrar mediante su presupuesto (valor que escriba en el prompt) */
const busquedas = document.getElementById("busquedas");
function presupuesto() {
    const valor = prompt("elige el precio")
    const mayorQue = prendas.filter((element) => element.precio < valor)
    console.log(mayorQue)
}
/* La idea es que luego sólo aparezca la prenda en particular en el DOM. Por ahora, imprime el resultado de la prenda que escriba el usuario(si es que existe) */
function busqueda() {
    const palabra = prompt("escribe la prenda").toLowerCase()
    const resultado = prendas.find((element) => element.nombre.toLowerCase() == palabra);
    if (resultado) {
        console.log(resultado)
    } else {
        console.log("no existe la prenda")
    }
}