//Amarilla Juan Sebastian
// 1A
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
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
   let tipoProducto;
   let precio;
   let cantidad;
   let tipoInflamable;
   let marca;

   let contadorAlcohol=0;
   let contadorIac=0;
   let contadorQuat=0;
   let acumuladorAlcohol=0;
   let acumuladorIac=0;
   let acumuladorQuat=0;
   let promedioAlcohol;
   let promedioIac;
   let promedioQuat;

   let acumuladorIgnifugo=0;
   let acumuladorCombustible=0;
   let acumuladorExplosivo=0;
   let tipoMayor;

   let acumuladorIacMenos=0;

   let marcaCaro;
   let tipoCaro;
   let precioMayor;
   let flag=true;

   
   for(let i=0;i<5;i++){
       
       nombre=prompt("ingrese nombre");
       while (isNaN(nombre)==false){
       	 alert("error: debe contener letras");
       	 nombre=prompt("ingrese nombre");
       }

       tipoProducto=prompt("ingrese tipo de producto");
       while (tipoProducto!= "alcohol" && tipoProducto != "iac" && tipoProducto != "quat"){
       	 alert("error: debe ser alcohol, iac o quat");
       	 tipoProducto=prompt("ingrese tipo de producto");
       }

       precio=parseInt(prompt("ingrese precio"));
       while (isNaN(precio)==true || precio < 100 || precio > 300){
       	    alert("error: debe ser entre 100 y 300 inclusive");
            precio=parseInt(prompt("ingrese precio"));
       }

       cantidad=parseInt(prompt("ingrese cantidad"));
       while (isNaN(cantidad)==true || cantidad < 1 || cantidad > 1000){
       	    alert("error: debe ser entre 1 y 1000 inclusive");
            cantidad=parseInt(prompt("ingrese cantidad"));
       }

       tipoInflamable=prompt("ingrese tipo de inflamable");
       while (tipoInflamable!= "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo"){
       	 alert("error: debe ser ignifugo, combustible o explosivo");
       	 tipoInflamable=prompt("ingrese tipo de inflamable");
       }

       marca=prompt("ingrese marca");
       while (isNaN(marca)==false){
       	 alert("error: debe contener letras");
       	 marca=prompt("ingrese marca");
       }

       switch(tipoProducto){
       	    case "alcohol":
            acumuladorAlcohol+=cantidad;
            contadorAlcohol++;
            break;

       	    case "iac":
            acumuladorIac+=cantidad;
            contadorIac++;
            if (precio <= 200) {
              acumuladorIacMenos+= cantidad;
            }
            break;

       	    case "quat":
            acumuladorQuat+=cantidad;
            contadorQuat++;
       	    break;
       }

       switch(tipoInflamable){
            case "ignifugo":
            acumuladorIgnifugo+=cantidad;
            break;

            case "combustible":
            acumuladorCombustible+=cantidad;
            break;

            case "explosivo":
            acumuladorExplosivo+=cantidad;
            break;
       }

       if (flag==true ||precioMayor<precio) {
           precioMayor=precio;
           marcaCaro=marca;
           tipoCaro=tipoProducto;
       } 

   }

   promedioAlcohol=acumuladorAlcohol/contadorAlcohol;
   promedioIac=acumuladorIac/contadorIac;
   promedioQuat=acumuladorQuat/contadorQuat;

   if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
        tipoMayor="ignifugo";  	
   }
   else if (acumuladorCombustible > acumuladorIgnifugo && acumuladorCombustible > acumuladorExplosivo) {
        tipoMayor="combustible";  
   }
    else if (acumuladorExplosivo > acumuladorIgnifugo && acumuladorExplosivo > acumuladorCombustible) {
        tipoMayor="explosivo";  
   }

  

   document.write("el promedio de alcohol; " + promedioAlcohol + ", el promedio de iac; " + promedioIac + ", y el promedio de quat; " + promedioQuat + "<br>");
   document.write("el tipo de inflamable con mas cantidad: " + tipoMayor + "<br>");
   document.write("la cantidad de iac pero el precio de 200 o menor a eso: " + acumuladorIacMenos + "<br>");
   document.write("la marca; " + marcaCaro + ", y el tipo mas caro: " + tipoCaro);
}