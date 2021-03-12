//Amarilla Juan Sebastian
// 1A
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar()
{
  let nombre;
  let cursada;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let seguir;

  let nombreMejor="no existe";
  let promedioMejor;
  let flag=true;

  let flagDos=true;
  let nombreJoven="no existe";
  let edadJoven;

  let contadorFemenino=0;
  let contadorMasculino=0;
  let contadorNoBinario=0;
  let acumuladorNotaFemenino=0;
  let acumuladorNotaMasculino=0;
  let acumuladorNotaNoBinario=0;
  let promedioFemenino="no existe";
  let promedioMasculino="no existe";
  let promedioNoBinario="no existe";

  let flagTres=true;
  let edadMayor="no existe";
  let nombreMayor="no existe";
  let cantidadMateriasMayor;

  do
  { 
     
    nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false){
       	 alert("error: debe contener letras");
       	 nombre=prompt("ingrese nombre");
    }

    cursada=prompt("ingrese cursada");
    while (cursada!= "libre" && cursada != "presencial" && cursada != "remota"){
       	 alert("error: debe ser libre, presencial o remota");
       	 cursada=prompt("ingrese cursada");
    }

    cantidadMaterias=parseInt(prompt("ingrese cantidad de materias"));
    while (isNaN(cantidadMaterias)==true || cantidadMaterias < 1 || cantidadMaterias > 7){
       	    alert("error: debe ser entre 1 y 7 inclusive");
            cantidadMaterias=parseInt(prompt("ingrese cantidad de materias"));
    }

    sexo=prompt("ingrese sexo");
    while (sexo!= "femenino" && sexo != "masculino" && sexo != "no binario"){
       	    alert("error: debe ser femenino, masculino o no binario");
            sexo=prompt("ingrese sexo");
    }

    nota=parseInt(prompt("ingrese nota"));
    while (isNaN(nota)==true || nota < 0 || nota > 10){
       	 alert("error: debe ser entre 0 y 10 inclusive");
       	 nota=parseInt(prompt("ingrese nota"));
    }

    edad=parseInt(prompt("ingrese edad"));
    while (isNaN(edad)==true || edad < 18){
       	 alert("error: debe ser 18 o mayor");
       	 edad=parseInt(prompt("ingrese edad"));
    }

    if (flag == true && sexo != "masculino" || promedioMejor<nota && sexo != "masculino") {
        promedioMejor=nota;
        nombreMejor=nombre;
        flag=false;
    }

    if (flagDos==true && cursada == "libre" || edad < edadJoven && cursada == "libre") {
        edadJoven=edad;
        nombreJoven=nombre;
        flagDos=false;
    }

    switch(sexo){
        case "masculino":
        acumuladorNotaMasculino+=nota;
        contadorMasculino++;
        break;

        case "femenino":
        acumuladorNotaFemenino+=nota;
        contadorFemenino++;
        break;

        case "no binario":
        acumuladorNotaNoBinario+=nota;
        contadorNoBinario++;
        break;
    }

    if (flagTres==true && cursada != "remota" || cantidadMateriasMayor<cantidadMaterias && cursada != "remota") {
        cantidadMateriasMayor=cantidadMaterias;
        edadMayor=edad;
        nombreMayor=nombre;
        flagTres=false;
    }

    seguir=prompt("quiere seguir? s/n");
  } while(seguir=="s");

  if (contadorMasculino!=0) {
    promedioMasculino= acumuladorNotaMasculino / contadorMasculino; 
  }
  if (contadorFemenino!=0) {
    promedioFemenino= acumuladorNotaFemenino / contadorFemenino;
  }
  if (contadorNoBinario!=0) {
    promedioNoBinario= acumuladorNotaNoBinario / contadorNoBinario;
  }
  
  document.write("el nombre que no es masculino con su mejor nota: " + nombreMejor + "<br>");
  document.write("el nombre del mas joven que la da libre: " + nombreJoven + "<br>");
  document.write("el promedio de masculino; " + promedioMasculino + ", el promedio femenino; " + promedioFemenino + ", y el promedio no binario; " + promedioNoBinario + "<br>");
  document.write("la edad; " + edadMayor + ", y el nombre que cursa mas materias en forma no remota; " + nombreMayor);
}