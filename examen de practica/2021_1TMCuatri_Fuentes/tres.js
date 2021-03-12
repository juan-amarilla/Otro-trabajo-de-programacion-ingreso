//Amarilla Juan Sebastian
// 1A
/*Bienvenidos.
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
  let precioPasajero=600;
  let seguir;

  let contadorViudo=0;

  let flag=true;
  let nombreJoven="no existe";
  let edadJoven=0;

  let precioSinDescuento="no existe";
  let i=0;

  let porcentaje;
  let descuento;
  let precioConDescuento=0;
  let resultadoMayor;
  let contadorMayor=0;
  let precioTotal;

  do
  { nombre=prompt("ingrese nombre");
    while (isNaN(nombre)==false){
       	 alert("error: debe contener letras");
       	 nombre=prompt("ingrese nombre");
    }

    estado=prompt("ingrese estado");
    while (estado!= "soltero" && estado != "casado" && estado != "viudo"){
       	 alert("error: debe ser soltero, casado o viudo");
       	 estado=prompt("ingrese estado");
    }

    edad=parseInt(prompt("ingrese edad"));
    while (isNaN(edad)==true || edad < 18){
       	    alert("error: debe ser mayor a 17");
            edad=parseInt(prompt("ingrese edad"));
    }

    temperatura=parseInt(prompt("ingrese temperatura"));
    while (isNaN(temperatura)==true || temperatura < 36){
       	   alert("error: debe ser 36 o mayor");
           temperatura=parseInt(prompt("ingrese temperatura"));
    }

    sexo=prompt("ingrese sexo");
    while (sexo!= "masculino" && sexo != "femenino"){
       	 alert("error: debe ser masculino o femenino");
       	 sexo=prompt("ingrese sexo");
    }

    if (edad > 60 && estado == "viudo") {
       contadorViudo++;
    }

    if (flag==true && sexo == "femenino" && estado == "soltero" || edad<edadJoven && sexo == "femenino" && estado == "soltero") {
       edadJoven=edad;
       nombreJoven=nombre;
       flag=false;
    }

    if (edad > 60) {
       contadorMayor++;
    }

    i++;
    seguir=prompt("quiere seguir? s/n")
  } while(seguir=="s");

  precioSinDescuento=precioPasajero*i;
  resultadoMayor=i-contadorMayor;

  if (contadorMayor>resultadoMayor) {
      descuento=25;
      precioTotal=precioPasajero*i;
      porcentaje=precioTotal*descuento/100;
      precioConDescuento=precioTotal-porcentaje;
  }

  if (contadorViudo!=0) {
  	document.write("la cantidad de viudos mayores a 60: " + contadorViudo + "<br>");
  }

  if (edadJoven!=0) {
  	document.write("el nombre; " + nombreJoven + ", y la edad de la mujer soltera mas joven; " + edadJoven + "<br>");
  }
  
  document.write("el viaje total sin descuento: " + precioSinDescuento + "<br>");
  
  if(precioConDescuento!=0)
  {
  	document.write("el precio con descuento si hay un mayor de %50 de personas mayor a 60: " + precioConDescuento);
  }
  
}