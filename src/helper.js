export function calcularTotal(cantidad, plazo) {
    // Cantidades 0-1000 = 25%, 1001-5000 = 20%, 5001-10000 = 15%, +10000 = 10% 
    let totalCantidad;
    if(cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if(cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * .2;
    } else if(cantidad > 5000 && cantidad <= 10000) {
        totalCantidad = cantidad * .15;
    } else if(cantidad > 10000) {
        totalCantidad = cantidad * .1;
    }

    // plazo 3 = 5%, 6 = 10%, 12 = 15%, 24 = 20% 
    let totalPlazo = 0;
    if(plazo === 3) {
        totalPlazo = cantidad * .05;
    } else if(plazo === 6) {
        totalPlazo = cantidad * .1;
    } else if(plazo === 12) {
        totalPlazo = cantidad * .15;
    } else if(plazo === 24) {
        totalPlazo = cantidad * .2;
    }

    return totalCantidad + totalPlazo + cantidad
}