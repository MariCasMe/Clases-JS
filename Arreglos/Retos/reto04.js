//Crear una función general que sume los primeros n números positivos
console.log("Función general que suma los primeros n números positivos")
let ultimoNumero=2;//Declaración de la variable último numero para el parámetro de la función (n).
let resultado; //Declaración de variable para guardar el resultado
function sumaConsecutiva(numero){
    let suma=0;
    let i=1;
    while(i<=numero){
       suma+=i ;
       i++;
    }
    return suma;
}
if(ultimoNumero>0 && ultimoNumero%1===0){
    resultado=sumaConsecutiva(ultimoNumero);
    console.log(`La suma de los primeros ${ultimoNumero} enteros positivos es ${resultado} `);
}else{
    console.log("El numero introducido no es un entero positivo, intente de nuevo");
}


//Crear una función flecha que sume los primeros n números positivos
console.log("Función flecha que suma los primeros n números positivos")
const sumaConsecutivaFlecha=(num)=> num(num+1)/2
if(ultimoNumero>0 && ultimoNumero%1===0){
    resultado=sumaConsecutiva(ultimoNumero);
    console.log(`La suma de los primeros ${ultimoNumero} enteros positivos es ${resultado} `);
}else{
    console.log("El numero introducido no es un entero positivo, intente de nuevo");
}