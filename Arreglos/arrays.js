/*
===========ARRAYS==========
    +Recursividad: La capacidad de un elemento de hacer referencia a sí mismo 
                   dentro de su propio cuerpo para resolver un problema.
Los array cumplen con esta propiedad.

*/
//Calcular el factorial de un numero n
function factorial(n){
    if(n===0){
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(5));

/*
----Creando arrays con elementos ya dados----
Sintaxis
        const arra_nombre=[item1, item2,...,itemn];
*/
const carros1=["Nissan", "Kia", "Mazda", "Volkswagen","Nissan", "Kia", "Mazda", "Volkswagen"];
console.log(carros1);

//otra forma de acomodar el array
const carros2=["Nissan", 
                "Kia", 
                "Mazda", 
                "Volkswagen",
                "Nissan", 
                "Kia", 
                "Mazda", 
                "Volkswagen",
                "Nissan", 
                "Kia", 
                "Mazda", 
                "Volkswagen",
                "Nissan", 
                "Kia", 
                "Mazda", 
                "Volkswagen"];

//Otra manera de crear arrays
const celulares=new Array("Samsung", "Apple", "Motorola", "Huawei", "LG");
console.log(celulares);

//------Creando arrays con datos que introduce el usuario----
const computadoras=[];  //Array vacío
console.log(computadoras);
//Agregar elementos a un array vacío
computadoras[0]="Dell";
computadoras[1]="HP";
computadoras[2]="MAC"
computadoras[3]="Toshiba";
console.log(computadoras);

//Longitud de un array
let longitudCelulares=celulares.length;
console.log(longitudCelulares);


/*
Acceder a los elementos de un array.
Para hacerlo hacemos referencia al número del índice del array*/
console.log(celulares[0]);
console.log(celulares[2]);
console.log(celulares[4]);
//Acceder al último elemento
let ultimoElementoCelulares=celulares[celulares.length-1];
console.log("El ultimo elemento del array es "+ultimoElementoCelulares);
//Modificar un elemento del array mediante índices
const listaDeCompras=["jamón", "queso", "yogurt", "tortillinas", "pan"];
console.log(listaDeCompras);
//cambiar el yogurt por yogurt griego oikos
listaDeCompras[2]="yogurt griego oikos";
console.log(listaDeCompras);

//===Arreglos multidimensionales o arreglos de arreglos===
console.log("****Arreglos multidimensionales****")
/*
Programa con platillos típicos de un país
    +tacos al pastor-México
    +arepas-Venezuela
    +sushi-Japón
    +pizza-Italia
*/
const platillos=["tacos de pastor","arepas","sushi","pizza"];
const paises=["Japon","Venezuela","Italia" ,"México"];

const menu=[platillos,paises];
//Traer información de los dos arrays
console.log(menu[1][3]);
//Output: En Japón se come sushi
console.log(`En ${menu[1][0]} se come ${menu[0][2]}`);


/*
----Métodos en arrays----
    -Método de cola (queue)-
Los métodos de cola implican agregar elementos al final del array y eliminar elementos 
del principio. Sigue el principio FIFO(First In First Out)
    -Método de pila-
Los métodos de pila implican agregar elementos al final del array y eliminar elementoss 
del final del arrayl Sigue el principio LIFO(Last In First Out ).
*/
console.log("**Métodos de arrays**")
//Array de la cohorte 28
const ch28=["Mari", "Andrea", "Pessy", "Fer", "Ingrid", "Blanca","Pau", "Nancy","Andrea"];
console.log(`Array original: ${ch28}`);
/*    indexOf() retorna el primer indice en el que se puede encontrar unelemento dado en
                el array o retorna -1 si el elemento no está presente*/
console.log(ch28.indexOf("Pessy"));//Output 2
console.log(ch28.indexOf("Yareri"));//Output -1
console.log(ch28.indexOf("Pessy", 3));//Empieza a buscar a Pessy desde el indice 3. Output -1
console.log(ch28.indexOf("Andrea",2)); //Empieza a buscar a Andrea desde el índice 2. Output 8

/*     pop() Elimina el último elemento de un array*/
console.log(ch28);
let popCh28=ch28.pop();
console.log(ch28);

//      push() Agrega un nuevo elemento al final de un array
let pushCh28=ch28.push("JuanCa");
console.log(ch28);

//      splice() Elimina uno o varios elementos a partir de su posición
let spliceCh28=ch28.splice(8,1); //A partir del índice 8 se elimina un elemento
console.log(ch28);

//    Submétodo de splice--  replaced() Reemplaza uno o varios elementos de su posicion
let pushCH28=ch28.push("JuanCa");
let replacedCh28=ch28.splice(8,1,"Yare");
console.log(ch28);

//      unshift() Añade un elemento al principio del array
let unshiftCh28=ch28.unshift("Osvaldo");
console.log(ch28);

//      shift() Elimina el primer elemento del array
let shiftCh28=ch28.shift("Osvaldo");
console.log(ch28);

//      slice() Elimina elementos anteriores a la posicion definida sin modificar el array original
let sliceCh28=ch28.slice(7);
console.log(sliceCh28);