//Imprime repetidamente el valor de la variable xValue, disminuyéndolo en 0.5 cada vez, mientras sea positivo
let xValue=5;//Declaramos y asignamos un valor a xValue
console.log(`Si el valor de xValue es ${xValue}, el decremento irá:`)
while(xValue>0){
    xValue=xValue-0.5;
    console.log(xValue);
}