//Hay tres personas sentadas en un banco en orden son: Sofía, David y Juan
const bancaDeEspera=["Sofía","David","Juan"];
console.log("El orden de la banca es:");
let longitud=bancaDeEspera.length;
for(i=0;i<longitud;i++){
    console.log(`${i+1}.-${bancaDeEspera[i]}`);
}

//Se agregan Sara y Agustín al final de la fila, se va la primera persona
console.log("Llegan Sara y Agustín, se va la primera persona. Ahora el orden es:");
let banca=bancaDeEspera.push("Sara", "Agustín");
let banca2=bancaDeEspera.shift();
longitud=bancaDeEspera.length
for(i=0;i<longitud;i++){
    console.log(`${i+1}.-${bancaDeEspera[i]}`);
}
//Llegan Renata (atrás de David) y Elena (al final de la fila)
console.log("Llegan Renata (atrás de David) y Elena (al final de la fila). Ahora el orden es:");
let corte=bancaDeEspera.indexOf("David");//Sabemos el lugar de David
let bancaTrunca=bancaDeEspera.slice(corte+1);//Banca trunca es la banca después de David
let DespuesDavid=bancaTrunca.unshift("Renata");//Agregamos a Renata despues de David (en el inicio de la banca trunca)
let banca3=bancaTrunca.push("Elena");//Agregamos a Elena al final de la banca trunca
longitud=banca3+(corte+1);
for(i=0;i<longitud;i++){
    if (i<=corte){
        console.log(`${i+1}.-${bancaDeEspera[i]}`);//Imprimimos el orden de los elementos desde el inicio hasta David
    }else{
        console.log(`${i+1}.-${bancaTrunca[i-(corte+1)]}`);//Imprimimos rl orden de los elementos después de David
    }
}