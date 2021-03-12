//Amarilla Juan Sebastian
// 1A
/* Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar()
{
  let nombre;
  let estado;
  let edad;
  let temperatura;
  let sexo;
  let precioPorPasajero=600;
  let seguir;

  let contadorViudoMayor=0;

  let mujerJoven=0;
  let nombreJoven="no existe";

  let i=0;
  let viajeTotalCosto="no existe";

  let precioTotal;
  let descuento;
  let porcentaje;
  let precioFinal=0;
  let contadorMayor=0;
  let resultadoMayor;

  do
  { nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false) {
        alert("Error: el nombre debe contener solo letras");
        nombre=prompt("ingrese nombre");
    }

    estado=prompt("ingrese estado");
    while (estado != "soltero" && estado != "casado" && estado != "viudo") {
        alert("Error: el estado debe ser soltero, casado o viudo");
        estado=prompt("ingrese estado");
        
    }

    edad=parseInt(prompt("ingrese edad"));
    while (isNaN(edad)==true || edad < 17)  {
        alert("Error: la edad debe tener mayor a 17");
        edad=parseInt(prompt("ingrese edad"));
        
    }

    temperatura=parseInt(prompt("ingrese temperatura"));
    while (isNaN(temperatura)==true)  {
        alert("Error: la temperatura debe contener un numero negativo, positivo o 0");
        temperatura=parseInt(prompt("ingrese temperatura"));
        
    }

    sexo=prompt("ingrese sexo");
    while (sexo != "masculino" && sexo != "femenino") {
        alert("Error: el sexo debe ser masculino o femenino");
        sexo=prompt("ingrese sexo");
        
    }

    switch(estado){
    	case "soltero":
        if (mujerJoven==0 && sexo =="femenino") {
           mujerJoven=edad;
           nombreJoven=nombre;
        }
        if (edad < mujerJoven && sexo =="femenino") {
           mujerJoven=edad;
           nombreJoven=nombre;
        }
    	break;

    	case "viudo":
        if (edad > 60) {
           contadorViudoMayor++;
        }
    	break;
    }

    i++;

    if (edad > 60) {
       contadorMayor++;
    }
    
    
    seguir = prompt("quiere seguir? s/n")
  } while (seguir=="s");

  viajeTotalCosto=precioPorPasajero*i;
  resultadoMayor=i- contadorMayor;

  if (contadorMayor>resultadoMayor) {
    descuento=25;
    precioTotal=precioPorPasajero*i;
    porcentaje=precioTotal*descuento/100;
    precioFinal=precioTotal-porcentaje;
  }


  if(contadorViudoMayor!=0)
  {
	document.write("la cantidad de mayores viudo: " + contadorViudoMayor +  "<br>");
  }
  if(mujerJoven!=0)
  {
  	document.write("el nombre; " + nombreJoven + " , y la edad de la mujer joven; " + mujerJoven + "<br>");
  }

  document.write("el costo total sin descuento: " + viajeTotalCosto + "<br>");

  if(precioFinal!=0)
  {
  	document.write("el precio final con descuento: " + precioFinal);
  }



  
}
