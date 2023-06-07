const hoy=new Date();
let year=hoy.getFullYear();
let month=hoy.getMonth();
//Ingresa tu (año de nacimiento, mes de nacimiento)
function obtenerEdad(añoNacimiento,mesNacimiento){
    let Edad;
    Edad=year-añoNacimiento;
    if (Edad===18 && mesNacimiento>month){Edad=Edad-1;}
    if(Edad<18){
        return "Es menor de edad, tiene "+Edad+"años";
    }else  {
        return "Es mayor de edad, tiene "+Edad+" años";
    }
}
console.log(obtenerEdad(2005,12));
