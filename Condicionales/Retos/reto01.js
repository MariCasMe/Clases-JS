//let catYear;
function edadDeMichi(catYear){
    if(catYear<0){
        return "Edad no válida";

    }else if (catYear>=0 && catYear<=2){
        return "El michi tiene 24 años humanos";
    } else {
        let age=24+((catYear-2)*4);
        return "El michi tiene "+age+" años humanos";
    }
}
console.log(edadDeMichi(-1));