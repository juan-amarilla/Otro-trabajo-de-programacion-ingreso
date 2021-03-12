// Amarilla Juan Sebastian
// 1A
/* Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
  let nombre;
  let tipo;
  let precio;
  let unidades;
  let tipoInflamable;
  let marca;

  let promedioAlcohol=0;
  let promedioIac=0;
  let promedioQuat=0;
  let contadorAlcohol=0;
  let contadorIac=0;
  let contadorQuat=0;
  let acumuladorAlcohol=0;
  let acumuladorIac=0;
  let acumuladorQuat=0;

  let acumuladorIgni=0;
  let acumuladorComb=0;
  let acumuladorExplo=0;
  let nombreMayor;
  let acumuladorMayor=0;

  let acumuladorIacMenos=0;

  let precioMayor=0;
  let marcaMayor;
  let tipoMayor;

 //let precioMenor=0;

  for (let i=0;i<5;i++) {

      nombre=prompt("ingrese nombre");
      while (isNaN(nombre)==false) {
        alert("Error: el nombre debe contener solo letras");
        nombre=prompt("ingrese nombre");

      }

      tipo=prompt("ingrese tipo");
      tipo=tipo.toUpperCase();
      while (tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT") {
        alert("Error: el tipo tiene que ser ALCOHOL, IAC o QUAT");
        tipo=prompt("ingrese tipo");
        tipo=tipo.toUpperCase();
      }

      precio=parseInt(prompt("ingrese precio"));
      while (isNaN(precio)==true || precio < 100 || precio > 300)  {
        alert("Error: el precio tiene que ser entre 100 y 300");
        precio=parseInt(prompt("ingrese precio"));
        
      }

      unidades=parseInt(prompt("ingrese unidades"));
      while (isNaN(unidades)==true || unidades < 1 || unidades > 1000)  {
        alert("Error: la cantidad de unidades no debe ser 0 o negativo y no debe superar los 1000");
        unidades=parseInt(prompt("ingrese unidades"));
        
      }

      tipoInflamable=prompt("ingrese tipo inflamable");
      while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") {
        alert("Error: el tipo de inflamable tiene que ser ignífugo, combustible o explosivo");
        tipoInflamable=prompt("ingrese tipo inflamable");
      }

      marca=prompt("ingrese marca");
      while (isNaN(marca)==false) {
        alert("Error: la marca debe contener solo letras");
        marca=prompt("ingrese marca");

      }

      switch (tipo) {
            case "ALCOHOL":
            contadorAlcohol++;
            acumuladorAlcohol += unidades;
            break;

            case "IAC":
            contadorIac++;
            acumuladorIac += unidades;
            if (precio <= 200) {
              acumuladorIacMenos+= unidades;
            }
            break;

            case "QUAT":
            contadorQuat++;
            acumuladorQuat += unidades;
            break;
      }

      switch (tipoInflamable) {
              case "ignifugo":
              acumuladorIgni+= unidades;
              break;

              case "combustible":
              acumuladorComb+= unidades;
              break;

              case "explosivo":
              acumuladorExplo+= unidades;
              break;
      }

      /*if(precioMenor==0)
      {
        precioMenor=precio;
      }
      if(precio < precioMenor)
      {
        precioMenor=precio;
        tipoMayor = tipo;
        marcaMayor = marca;
      }*/


      if (precioMayor < precio) {
          precioMayor = precio;
          tipoMayor = tipo;
          marcaMayor = marca;
      }
  }

  promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
  promedioIac=acumuladorIac/contadorIac;
  promedioQuat =acumuladorQuat/contadorQuat;

  if (acumuladorIgni > acumuladorComb && acumuladorIgni > acumuladorExplo) {
          nombreMayor = "ignifugo";
          acumuladorMayor=acumuladorIgni;
  } else if (acumuladorComb > acumuladorIgni && acumuladorComb > acumuladorExplo) {
          nombreMayor = "combustible";
          acumuladorMayor=acumuladorComb;
  } else if (acumuladorExplo > acumuladorIgni && acumuladorExplo > acumuladorComb) {
          nombreMayor = "explosivo";
          acumuladorMayor=acumuladorExplo;
  }

  document.write("el promedio de alcohol; " + promedioAlcohol + ", el promedio de iac; " + promedioIac + ", y el promedio de Quat; " + promedioQuat + "<br>");
  document.write("el tipo de inflamable con mayor cantidad: " + nombreMayor + " y su cantidad es de: " + acumuladorMayor + "<br>");
  document.write("la cantidad de iac de precio igual o menos a 200: " + acumuladorIacMenos + "<br>");
  document.write("la marca; " + marcaMayor + " y el tipo de producto; " + tipoMayor);

 //for vimos porque me pidio que ingrese 5 compras, si fuera una cantidad que pidiera el usuario tendria que usar el do while.
}//variablenombre=variablenombre.toUpperCase() que sirve para cambiar toda letra a mayuscula