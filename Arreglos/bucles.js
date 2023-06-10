/*
Un ciclo for se repite hasta que la condición se evalúe como falsa
Crea tres expresiones opcionales

Sintaxis
        for(expresionInicial; expresionCondicional; expresionDeActualización){
            //bloque de código a ejecutar
        }
    1.-Inicialización. Se debe inicializar con una variable que será evaluada
        en la expresión a comparar. Variable global o local.
    2.-Condicion. Es una expresión que debe cumplir la variable inicial (true), 
        si no se cumple (false) el bucle termina.
    3. Pasos a realizar. Son los intervalos que cambiarán la variable inicial mientras sea true.
*/
//Programa para contar los boletos de un concierto (con variable local)
for(let boleto=1; boleto<=50;boleto++){
    console.log(`Boleto # ${boleto}`);
}
console.log("**Numero de paletas**")
//Programa para contar paletas con variable global
let paletas=1;
for(paletas; paletas<=20;paletas++){
    console.log(`Tengo ${paletas} paletas`);
}
console.log("**Cuenta regresiva**");
//Cuenta regresiva
let cuentaRegresiva=18;
for(cuentaRegresiva; cuentaRegresiva>=0;cuentaRegresiva--){
    console.log(cuentaRegresiva);
}
console.log("**Arrays y ciclos**");
/*
=====Como recorremos array con el ciclo for====
Debemos usae indices del arreglo para poder usar el bucle. Los índices 
van desde 0 hasta n y ocupamos la propiedad length().
*/
const ch28 = ["Mari", "Andrea", "Ana Fer", "Ingrid", "Blanca", 
            "Pau", "Nancy", "Pessy", "Yare", "Magali"];
for(let i=0; i<ch28.length;i++){
    console.log(ch28[i]);
}
/*
        Variaciones del ciclo for
    +for...of: Nos permite recorrer el objeto (array) y devuelve el valor.
    +for...in: Nos permite recorrer el objeto (array) y devuelve su posición.
*/
console.log("**Cliclo for of**")
//Cliclo for of 
let animales=["perro","gato", "colobrí", "pantera","leon", "grillo"];
for(let animal of animales){
    console.log(animal);
}
console.log("**Cliclo for in**")
//Ciclo for in
for(let animal in animales){
    console.log(animal);
}
//Sumar los números del 1 al 100
let suma=0;
for(numero=1; numero<=100; numero++){
    //suma=suma+numero;
    suma+=numero;//esta senencia es la forma simplificada de la sentencia comentada (solo funciona para numeros)
}
console.log(`La suma del 1 al 100 es ${suma}`);

//Imprimir los numeros pares del 1 al 20
console.log("Los números pares que encontramos del 1 al 20 son:")
for(i=1; i<=20; i++){
    if(i%2===0){
        console.log(i);
    }
}
//Imprimir la tabla del 5
console.log("**Tabla del 5**")
let multipicacion;
for(i=0;i<=10;i++){
    multipicacion=5*i;
    console.log(`5x${i}=${multipicacion}`);
}
console.log("**Ciclo while**");
/*
=======Ciclo While====
Recorre un bloque de código siempre que una condición específica sea verdadera.
Sirve para realizar una tarea repetitiva mientras la condición sea verdadera.

Sintaxis
    while(condición){
        //bloque de código a ejecutar
    }
*/
let productos=5;
while (productos>0){
    console.log(productos+" productos vendidos");
    productos--;
}

//Imprimir los numeros del 1 al 10
console.log("Imprimir los numeros del 1 al 10");
let cuenta=1;
while(cuenta<=10){
    console.log("El numero es "+cuenta);
    cuenta++;
}
//Imprimir elementos de un array
console.log("**Imprimir array de frutas**")
const frutas=["manzana","platano","naranja", "mandarina", "limon"];
let fruta=0;
while(fruta<frutas.length){
    console.log(frutas[fruta]);
    fruta++;
}
//Hacer una secuencia de asteriscos
console.log("**Secuencia de asteriscos**");
let asterisco="";
let totalAsteriscos=5;
let iteración=0;
while(iteración<totalAsteriscos){
    asterisco=asterisco+"*";
    console.log(asterisco);
    iteración++;
}
/*
====Cliclo do while===
Hacer mientras crea un bucle que ejecuta una sentencia especificada hasta
que la condición de comprobación se evalúa como falsa.

Sintaxis
    do{
        //bloque de código
    }while (condición);
*/
//Cuenta del 1 al 5
let noEsSeis=1;
do{
    console.log(noEsSeis);
    noEsSeis++;
}while(noEsSeis<6);

//Muestra productos vendidos
let producto=5;
do{
    console.log(producto+" productos vendidos");
    producto--;
}while(producto>=1);

/*
====Control de ciclos===
    --break: Obliga a terminar el bucle actual. Sale de una sentencia, pero para
            que se pueda ejecutar necesita estar anidado dentro de la sentencia.
    --continue: No termina el bucle, si no que salta a la siguiente acción.
*/
//              Ejemplo de break
//Imprime los números del 1 al 10
let numeroBreak=0;
while (numeroBreak<100){
    numeroBreak++;
    console.log(numeroBreak);

   if(numeroBreak===10){break;}
}

//          Ejemplo de continue
for(let cliente=1; cliente<=10;cliente++){
    if(cliente===5||cliente===9){
        console.log(`Cliente ${cliente}, ¡Felicidades, eres el ganador!`);
        continue;
    }
    console.log(`Cliente ${cliente}`);
}