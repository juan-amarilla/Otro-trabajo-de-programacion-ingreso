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

  let notaMejor=0;
  let nombreMejor="no existe";

  let edadMenor=0;
  let nombreJoven="no existe";

  let promedioMasculino="no existe";
  let promedioFemenino="no existe";
  let promedioNoBinario="no existe";
  let acumuladorNotaMasculino=0;
  let acumuladorNotaFemenino=0;
  let acumuladorNotaNoBinario=0;
  let contadorNotaMasculino=0;
  let contadorNotaFemenino=0;
  let contadorNotaNoBinario=0;

  let cantidadMateriasMayor=0;
  let edadMayor="no existe";
  let nombreMayor="no existe";
  let flag=true;




  do
  { nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false) {
        alert("Error: el nombre debe contener solo letras");
        nombre=prompt("ingrese nombre");
    }

    cursada=prompt("ingrese cursada");
    while (cursada != "libre" && cursada != "presencial" && cursada != "remota") {
        alert("Error: la cursada debe ser libre, presencial o remota");
        cursada=prompt("ingrese cursada");
        
    }

    cantidadMaterias=parseInt(prompt("ingrese cantidad de materias"));
    while (isNaN(cantidadMaterias)==true || cantidadMaterias < 1 || cantidadMaterias >= 8)  {
        alert("Error: la cantidad de materias debe ser entre 1 y 7 inclusive");
        cantidadMaterias=parseInt(prompt("ingrese cantidad de materias"));
        
    }
    
    sexo=prompt("ingrese sexo");
    while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
        alert("Error: el sexo debe ser femenino, masculino o no binario");
        sexo=prompt("ingrese sexo");
    }

    nota=parseInt(prompt("ingrese nota"));
    while (isNaN(nota)==true || nota < 0 || nota > 10)  {
        alert("Error: la nota debe ser entre 0 y 10 inclusive");
        nota=parseInt(prompt("ingrese nota"));
        
    }

    edad=parseInt(prompt("ingrese edad"));
    while (isNaN(edad)==true || edad < 0)  {
        alert("Error: la edad debe ser mayor a 0");
        edad=parseInt(prompt("ingrese edad"));
        
    }

    if (notaMejor < nota && sexo != "masculino") {
        notaMejor=nota;
        nombreMejor=nombre;
    }

    if (edadMenor==0 && cursada == "libre") {
        edadMenor=edad
        nombreJoven=nombre;
    }
    if (edad < edadMenor && cursada == "libre") {
        edadMenor=edad;
        nombreJoven=nombre;
    }

    switch (sexo) {
              case "masculino":
              acumuladorNotaMasculino+=nota;
              contadorNotaMasculino++;
              break;

              case "femenino":
              acumuladorNotaFemenino+=nota;
              contadorNotaFemenino++;
              break;

              case "no binario":
              acumuladorNotaNoBinario+=nota;
              contadorNotaNoBinario++;
              break;
    }

    if (flag==true && cursada != "remota" || cantidadMateriasMayor < cantidadMaterias && cursada != "remota") {
       cantidadMateriasMayor=cantidadMaterias;
       edadMayor=edad;
       nombreMayor=nombre;
       flag=false;
    }


    seguir = prompt("quiere seguir? s/n")
  } while (seguir=="s");

  if (contadorNotaMasculino!=0) {
    promedioMasculino= acumuladorNotaMasculino / contadorNotaMasculino; 
  }
  if (contadorNotaFemenino!=0) {
    promedioFemenino= acumuladorNotaFemenino / contadorNotaFemenino;
  }
  if (contadorNotaNoBinario!=0) {
    promedioNoBinario= acumuladorNotaNoBinario / contadorNotaNoBinario;
  }

  document.write("el nombre del mejor promedio que no es masculino: " + nombreMejor + "<br>");
  document.write("el nombre del mas joven que la da libre: " + nombreJoven + "<br>");
  document.write("promedio de masculino; " + promedioMasculino + " , promedio de femenino; " + promedioFemenino + " , promedio no binario; " + promedioNoBinario + "<br>");
  document.write("la edad; " + edadMayor + " , y el nombre que cursa con mas materias pero en forma que no sea remota; " + nombreMayor);
}

  /*if (flag==true && cursada != "remota" || cantidadMateriasMayor < cantidadMaterias && cursada != "remota") {
       cantidadMateriasMayor=cantidadMaterias;
       edadMayor=edad;
       nombreMayor=nombre;
       flag=false;
   }*/
