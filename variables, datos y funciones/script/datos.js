//tipos de datos y variables en js
/*
 Declaración de variables
    + var:para variables globales (se usa a lo largo de todo el código)
    + let:para variables locales (se usa en un bloque de código específico)
    + const:para constantes (que no pueden cambiar su valor)
 */
var edad= 22;
var altura=1.65;
var añoDeNacimiento=1995;

var edadTexto="22"; //Los tipos de datos numéricos se escriben sin comillas
 
//convertir de string a datos numéricos
var nuevaEdad=Number(edadTexto);


/* Declarar Cadena de texto
    var nombre = "string"/'string'
    Los tipos de datos sting utilizan comillas dobles o sencillas para asignar un valor
    Son un ti´po d edato sumamente flexible, sin embargo hay wue usarlos con cuidado pues JS es
    sensible a las mayúsculas    
*/
   var nombre='Maria';
   var ciudad="Acapulco";
   var colorFav="morado";

   var edadString=String(edad);

   //Declarar datos booleanos
    var esDiestro=true;
    var esAlto=false;

    var condicion = Boolean(10>5);

    var nuevaVariable;//crea el espacio de memoria para alacenar una variable que el usuario debe ingresar.

    /*Dato nulo (Null), es aquella variable definida que es del la misma rama que el booleano*/

    var NuevaVariable=null;

    /*Dato NaN (Not a Number) es una propiedad que permite verificar si una variable es un número o no*/


    //======RETO=======
    //numeros
    var peso=50;
    var numeroHermanos=1;
    var semanasBootcamp=4;
    var diasLaborales=5;
    var mesesDelAño=12;
    var altura=1.65;
    var numeroFav=2;
    var neutroAditivo=0;
    var neutroMultiplicativo=1;
    var mínimaEdadVoto=18;
    //Boolean
    var tieneAlergias=false;
    var esZurdo=false;
    var requiereAtenciónEspecial=false;
    var requiereMedicamentos=true;
    var realizaDeporte=true;
    var condicion1 = Boolean (0>2);
    var condicion2 = Boolean(10==10);
    var condicion3 = Boolean((3+3/3)>((3+3)/3));
    var condicion4 = Boolean(semanasBootcamp<diasLaborales);
    var condicion5 = Boolean(numeroHermanos>numeroFav);
    //String
    var apellidoPaterno='Castro';
    var apellidoMaterno='Mendoza';
    var ciudadNacimiento='Acapulco';
    var nombreMascota='Kiara';
    var restaurantFav='Los Anafres';
    var bandaFav='Daughter';
    var estacionDelAño='Primavera';
    var festividadFav='Halloween';
    var heladoFav='Galleta';
    var baileFav='Ballet';

    //Arrays y objetos
    /*Los arrays es un tipo de dato que oertenece a java script, el cual almacena una colección
    de elementos de manera ordenada
    Primer elemento= índice 0
    Hasta n cantidad de índices
    Existen arrays de numeros, de string, aunque también se puede tener un array de distintos tipos de datos,
    sin embargo no son recomendables. Es buena práctiba, tener un array de un solo tipo de datos*/
    var ejemploDeArray =["Saludos","que onda", "Buenos días","Qué rollo"];
    var otroArray=[40,5,6,38, 1121];

    /*Los objetos, los encontramos como object, son tipos e datos similares a los 
    arrays, sin embargo no son lo mismo. Su estructura y semántica indican al motor de JS del navegador 
    cómo trabajar con estos.
    La primera diferencia con el array es que los objetos no tienen un orden, tiene una key(llave), un vaule(valor) y formato Json*/
    var ejemploDeObjeto = {
         nombre :"Mari", 
         apellido: "Castro",
         edad: 22,
         esEstudiante:true,
    }

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

