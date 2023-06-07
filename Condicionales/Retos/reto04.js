//Selecciona 1 para consultar saldo, 2 para donar 10 pesitos o 3 para convertir dólares a pesos

function cajeroAutomatico(seleccion){
    if(seleccion===1){
        return "Su saldo es de $xxxxx";
    }else if (seleccion===2){
        return "Gracias por su donación de $10 ";
    }else if(seleccion===3){
        let pesos;
        pesos=convertirDivisas(1);
        return "El equivalente es $"+pesos;
    }else {
        return "Seleccion no válida";
    }
}

function convertirDivisas(dolares){
    return dolares*18;
}
 console.log(cajeroAutomatico(6));