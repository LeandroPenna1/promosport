
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
}

/* 
En este caso, realicé en principio una funcion que utiliza switch para obtener los precios de cada prenda
En segundo lugar una funcion que, al apretar un botón, aparezca un prompt para consultar precio de la prenda que interese
*/