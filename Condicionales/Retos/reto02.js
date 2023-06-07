//=====Funcion general====
function verificarPar(Numero){
if (Numero%2===0){
    return"El número "+Numero+" es par";
}else{
    return"El numero "+Numero+" es impar";
}
}
console.log(verificarPar(22772302));

//======Función Flecha=====
const verificarParFlecha =(NumeroFlecha)=>{
    let mensaje;
    (NumeroFlecha%2===0)? mensaje="El numero "+NumeroFlecha+" es par":mensaje="El numero "+NumeroFlecha+" es impar";
    return mensaje;
}
 console.log(verificarParFlecha(254827));