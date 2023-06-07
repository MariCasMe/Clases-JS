//======SESION DE FUNCIONES===
/*======Declarar y usar funciones======
    Las funciones son formas de empaquetar código para que pueda ser reusado, nos permite
    correr el mismo código múltiples veces, facilita la legitibilidad del código, le da organización y simplicidad al código.
    Tiene una estructura:
      -definición 
      -invocación
    Cosas bellas de las funciones:  
    -desglosa el problema en segmentos pequeños
    -las variables locales mantienen el código limpio.
    -Permiten aislar partes del código para pruebas unitarias.
    >>>>>Sintaxis
           palabra reservada---> function 'Nombre, que puede o no tener'(valor de entrada){
                     console.log('Do something'); <-----Las instrucciones que realiza la función          
               }
    */

/*Hoisting:
Es fundamental en el entendimiento de la forma que se ejecuta nuestro 
código de JS, aplica tanto a variables como funciones.
Como tal, la traduccion es elevación. A partir de aquí , su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.
Esto se  debe a que Js, cuando es ejecutado por el motor de navegacion, primero leea las variables 
y funciones declaradas, esto es el Hoisting

*/
//Ejemplo de función que no retorna un valor
nuevaFuncion();

function nuevaFuncion(){
    console.log('Buenos días cohorte 28');
}
/*El concepto Scope hace referencia al alcance que tiene una variable 
dentro de un código JS.
Esto lo podemos ver con las palabra reservadas var, let, cons.
+var: globlal, se puede ocupar dentro de cualquier parte del código.
+let: funciona de manera global, en caso de ser requerida, también luede solo ser utilizada
        de manera local.
+const:se refiere a una constante. Es una variable a la que no se le puede reasignar un
        valor.
El uso de la palabra reservada 'var', npo es tan recomendable por el comportamiento y la poca 
adaptablidad de una variable.
Entonces, se implementa let y cons como una alternativamucho más eficiente para determinar el 
scope que tiene una variable.
*/
//Ejemplo de función que retorna un valor
function holaMundo (nombre){
    return "Hola "+nombre;
}
//console.log(holaMundo("Mari"));

/*
Elabolar una función que calcule la velocidad de un objeto
Sabemos que Velocidad=distancia/tiempo

 function

- calcularVelocidad
(distancia, tiempo)

- elaborar el bloque de código


*/
function calcularVelocidad(distancia, tiempo){
    let velocidad=distancia/tiempo;
    return "La velocidad calculada es "+velocidad+ "m/s";
}
//console.log(calcularVelocidad());
/*
==Funciones dentro de JavaScript==
Funciones flecha | Fat arrow | Funciones lambda
Funciones CallBack: funciones que reciben otras funciones como parámetros.
Funciones anónimas
Promesas

===========Funciones flecha=====
Sonnuna manera más compacta y sencilla de escribir una función general. 
No son la mismo que una función general, se utiliza en otro tipo de contextos
como ejemplo, funciones callback que requieren funciones anónimas.
Su uso es limitado.

Declaración de una función flecha:
-Se declara como una variable (var, let, cons): una buena practicaes usar const para declarar 
funciones flecha o lambda.
-nombre de función
-Parámetros
-Establecer el bloque de código o procesos que va a ejecutar esta función.

=> -fat arrow
*/
//Sintaxis de una función flecha.
const funcionFlecha=parametro=> "Hola " + parametro;
//Invocación de la función flecha:
funcionFlecha("Mari");

//Funciones flecha con más parametros
const funcionMasParametros=(datoA,datoB)=>{
    let datoC=datoA+datoB;
    return "La suma de datoA y datoB es iagual a "+datoC;
}
const funcionSinParametros=()=>{
    return "La función no recibe parámetros";
}
const calcularvelocidadFlecha=(distanciaf, tiempof)=> {
    console.log("distancia: "+distanciaf);
    console.log("tiempo: "+tiempof)
    return "La velocidad es "+distanciaf/tiempof+ " m/s";
}

//===============Ejercicios==============
//1.- Calcular el cuadrado de un número
        //Función flecha
const numeroAlCuadradoFlecha =(numeroF)=>{
    console.log("El número es "+numeroF);
    let cuadradoF=numeroF*numeroF;
    return "El cuadrado del número es "+cuadradoF;
} 
    //función general
function numeroAlCuadrado(numero){
    console.log("El número es "+numero);
    let cuadrado=(numero*numero);
    return "El cuadrado del número es "+cuadrado;
}

//2.- Convertir de grados celcius a Farenheit
        //Función general
function celsiusAFarenheit(celsius){
    let farenheit=(celsius*(9/5)+32);
    return celsius+" grados Celcius equivalen a "+farenheit+" grados Farenheit";
}
        //Función flecha
const celsiusAFarenheitFlecha=(celsiusF)=>celsiusF+" grados Celcius equivalen a "+(celsiusF*(9/5)+32)+" grados Farenheit";

//3.-Calcular Voltaje con la corriente y resistencia
        //Funcion flecha
const calculaVoltajeFlecha=(resistenciaF, corrienteF)=> {
    console.log(resistenciaF+" ohms")
    console.log(corrienteF+" amperes")
    return "El voltaje es "+ resistenciaF*corrienteF+ " volts";
} 
        //Función general
function calculaVoltaje(resistenciaF,corrienteF){
    console.log(resistenciaF+" ohms")
    console.log(corrienteF+" amperes")
    return "El voltaje es "+ (resistenciaF*corrienteF)+ "volts";
}

//4.-Calcular el volumen de un cubo
        //Función flecha
const volumenDeUnCuboFlecha=(ladoF)=>"El volumen de un cubo de lado "+ladoF+ " es "+ (ladoF*ladoF*ladoF) +" cm cúbicos";
        //función general
function volumenDeUnCubo(lado){
    console.log("Lado ="+lado+" cm");
    return "El volumen del cubo es "+ (Math.pow(lado,3)) +" cm cúbicos";
}
//5.- Calcular el área de un trángulo
        //función general
function areaDeUnTriangulo(base, altura){
    console.log("Base = "+base+ " cm");
    console.log("Altura = "+altura+ " cm");
    return "El área del triángulo es "+ (base*altura/2)+" cm cuadrados";
}
        //función flecha
const areaDeUnTrianguloFlecha=(baseF,alturaF)=>"El área del triángulo es "+ (baseF*alturaF/2)+" cm cuadrados";

//6.-Calcular el volumen de una esfera
        //función flecha
const volumenDeEsferaF=(radioF)=>"El volumen de una esfera de radio "+radioF+" es "+((4/3)*Math.PI*Math.pow(radioF,3));
        //función general
function volumenEsfera(radio) {
    console.log("El volumen de una esfera de radio "+radio+" es:");
    return ((4/3)*Math.PI*Math.pow(radio,3));
}

//7.-Convierte un string a mayúsculas
        //Funcion general
function convertirMayúsculas (texto){

    console.log("El texto original es "+texto);
    return    texto.toUpperCase();
}
        //Función flecha
const convertirMayusculasFlecha=(textoFlecha)=>console.log(textoFlecha.toUpperCase());

