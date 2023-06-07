/* EXPRESIONES CONDICIONALES
Son el conjunto de instrucciones que se ejecutan si se 
cumple una condición:
    + if
    + else
    + else if
    + switch
====Declaración if
    Sintaxis : if es una palabra reservada.
    if (condicion){
        Bloque de código que se ejecuta si la condición es veradera
    }*/
    //Ejemplo para validar la mayoría de edad
    let edad=20;
    if (edad>=18){
        console.log("es mayor de edad");
    }
/*
===Declaración else
    Sintaxis: else es una palabra reservada, se escribe al cerrar
    la lalve del if
Ejemplo: */
let edadElse=5;
if (edadElse>=18){
    console.log("Es mayor de edad");
} else{
    console.log("Es menor de edad");
}
//Ejemplo de declaración if else entre dos variables. Se copararán dos numeros.
let num1=51842;
let num2=30460;
if (num1>num2){
    console.log("El numero "+num1+" es mayor que "+num2);
}else{
    console.log("El numero "+num2+" es mayor que "+num1);
}
//Segunda forma
let resultado;
if (num1>num2){
    resultado="El numero "+num1+" es mayor que "+num2;
}else{
    resultado="El numero "+num2+" es mayor que "+num1;
}
console.log(resultado);

//Determinar si un número es par o impar
let numerito=18979;
if (numerito%2===0){
    console.log("El número "+numerito+" es par");
}else{
    console.log("El numero "+numerito+" es impar");
}
/*
==== Operador ternario
Son una forma concisa de escribir una expresión condicional. Se puede utilizar
para realizar la misma tarea de una declaración if-else completa.

Sintaxis
    (condición)? expresion_true: expresion_false;

Ejemplo:
*/
//Determinar si un numero es par o impar con operador ternario
(numerito%2===0)? console.log("El número "+numerito+" es par"):console.log("El numero "+numerito+" es impar");

/*Otra manera de imprimir
let resultadoOperadorternario=(numerito%2===0)? console.log("El número "+numerito+" es par"):console.log("El numero "+numerito+" es impar");
console.log(resultadoOperadorternario);*/
/*
======Sentencia else if
Se utiliza para especificar una nieva condición si la primera condición es falsa.

Sintaxis
    if(condicion){
        bloque que se ejecuta si se cumple la condición
    } else if (condicion2){
        Bloque que se ejecuta si la condición 2 se cumple
    }else if (condición3){
        Bloque que se ejecuta si la condición 3 se cumple
    }else{
        Bloque que se ejecuta si no se cumplió ninguna de las condiciones.
    }
*/

/* Determinar qué día de la semana es según la siguiente tabla:
    1.-Lunes
    2.-Martes
    3.-Miércoles
    4.-Jueves
    5.-Viernes
    6.-Sabado
    7.-Domingo
*/
let dia=6;
if(dia===1){
    console.log("El día es Lunes");
}else if(dia===2){
    console.log("El día es Martes");
}else if(dia===3){
    console.log("El día es Miércoles");
} else if(dia===4){
    console.log("El día es Jueves");
} else if(dia===5){
    console.log("El día es Viernes");
}else if(dia===6){
    console.log("El día es Sabado");
}else if(dia===7){
    console.log("El día es Domingo");
}else{
    console.log("El nuemro es inválido");
}

/*
Crea un programa en JavaScript donde le muestres al usuario si es de mañana, 
tarde o noche.
Requerimientos:
    -La hora almacenada en una variable (let hora)
    -Establecer el formato de 24 hr de tipo numérico (0-23)
    -Tabla para asignar horarios correspondientes a mañana, tarde, noche o madrugada.
            --6-12 :Mañana (12>=hora && hora>=6)
            --13-18: Tarde (18>=hora && hora>=13)
            --19-23: Noche (23>=hora && hora>=19)
            -- 0-5: Madrugada (5>=hora && hora>=0)
*/
let hora=7
if(12>=hora && hora>=6){
    console.log("Es de mañana");
}else if (18>=hora && hora>=13){
    console.log("Es de tarde");
}else if(23>=hora && hora>=19){
    console.log("Es de noche");
}else if (5>=hora && hora>=0){
    console.log("Es de madrugada");
}else{
    console.log("Escribe una hora válida entre las 0 y 23 hrs");
}


//========Sentencias anidadas
/*Crear un programa para determinar si es un mayor de edad o menor de edad, 
si es mayor, catalogarlo como adulto mayor a partir de los 60*/
let edadMari=2;
if(edadMari>=18){
    if(edadMari<65){
        console.log("Es adulto");
    }else{
        console.log("Es adulto mayor");
    }
}else if (edadMari>=12){
    console.log("Es un adolescente");
}else if (edadMari>=3){
    console.log("Es un niño");
} else{
    console.log("Es un bebé");
}
//Verificar la hora del día
const today=new Date ();//Nuevo objeto con un constructor Date, sirve para traer la fecha y hora actual.
//let hour=today.toLocaleTimeString(); da la hora con minutos y segundos
let hour=today.getHours();
console.log(hour);
 
function greetings(){
    if(12>=hour && hour>=6){
        console.log("Es de mañana");
    }else if (18>=hour && hour>=13){
        console.log("Es de tarde");
    }else if(23>=hour && hour>=19){
        console.log("Es de noche");
    }else if (5>=hour && hour>=0){
        console.log("Es de madrugada");
    }else{
        console.log("Escribe una hora válida entre las 0 y 23 hrs");
    }
}
greetings();

function saludo(){
    let mensaje="Error";
    if(12>=hour && hour>=6){
        mensaje="Buenos días";
    }else if (18>=hour && hour>=13){
        mensaje= "Buenas tardes";
    }else if(23>=hour && hour>=19){
        mensaje="Buenas noches";
    }else{
        mensaje="Buenas madrugadas";
    }
    return mensaje;
}
console.log(saludo());

/*Crear un programa en JS que evalúe si un día corresponde a día de la semana (l-v)
o fin de semana(s y d)*/
const verificarDia = (diaDeSemana)=>{
    let finDeSemana=diaDeSemana === "sabado"||diaDeSemana==="domingo";
    if (finDeSemana){
        return "Es fin de semana"
    } else{
        return "Es día de semana (Lunes a viernes)"
    }
}
console.log(verificarDia("lunes"));

/* 
==========Sentencia switch=======

Sintaxis:

    switch(expresion){
        case etiqueta1:
            declaración1;
            break;
        case etiqueta2:
            declaración2;
            break;
        case etiqueta3:
            declaración3;
            break;
                .
                .
                .
        case etiquetaN:
            declaracionN;
            break;
        deafault:
            declaración default;
            break;
    }
    */
   let diaSemana=5;

   switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de la semana inválido");
        break;
   }

/*Cear un programa cinun switch que muestre el kio
de manzanas, naranjas, mandarinas, platano, mangos.*/
let fruta="MandArina";
switch (fruta.toLowerCase()){
    case "naranja":
        console.log("Las naranjas cuestan $30 el kilo");
        break;
    case "manzana":
        console.log("Las manzanas cuestan $60 el kilo");
        break;
    case "mandarina":
        console.log("Las mandarinas cuestan $25 el kilo");
        break;
    case "platano":
        console.log("Los plátanos cuestan $30 el kilo");
        break;
    case "mangos":
        console.log("Los mangos cuestan $60 el kilo")
        break;
    default:
        console.log("No tenemos esa fruta");
        break;
}



let calificacion=0;

switch (Math.round(calificacion)){
    case 0:
        console.log("Tu calificación es 0, estas reprobado");
        break;
    case 1:
        console.log("Tu calificación es 1, estas reprobado");
        break;
    case 2:
        console.log("Tu calificación es 2, estas reprobado");
        break;
    case 3:
        console.log("Tu calificación es 3, estas reprobado");
        break;
    case 4:
        console.log("Tu calificación es 4, estas reprobado");
        break;
    case 5:
        console.log("Tu calificación es 5, estas reprobado");
        break;
    case 6:
        console.log("Tu calificación es 6, estas aprobado");
        break;
    case 7:
        console.log("Tu calificación es 7, estas aprobado");
        break;
    case 8:
        console.log("Tu calificación es 8, estas aprobado");
        break;
    case 9:
        console.log("Tu calificación es 9, estas aprobado");
        break;
    case 10:
        console.log("Tu calificación es 10, estas aprobado");
        break;
    default:
        console.log("Ingrese calificación valida");
        break;
}