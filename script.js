let numero = prompt("Introduce un número de 1 al 6");

let resultado = rescatar(numero);
 alert("El número "+numero+" es "+ resultado);

function rescatar(numero) {
if(numero == 0 || numero == "") {
    return  alert("Debe ser un numero entre el 1 y el 6");
  } 
  if(numero == "1") {
     uno ();
  }if(numero == "2") {
     dos ();
  }
  if(numero == "3") {
     tres ();
  }
  if(numero == "4") {
     cuatro();
  }
  if(numero == "5") {
    cinco();
  }
  if(numero == "6") {
     seis();
  } 
}

//Problema 1

function uno (){
    let num = prompt("Introduce un número de 1 al 100");
    for ( i = 0; i <= num; i++ )console.log(i)  
};

//Problema 2
function dos (){
  let color = prompt("¿De que color es el caballo de Napoleon?");
  if (color !== "blanco"){
    dos();
  } else{
     alert("uy uy uy")
  }
};

//Problema 3

function tres(){
  let matematica = prompt("Cuentame cual es tu nota promedio en matematica");
  let fisica = prompt("Cuentame cual es tu nota promedio en fisica");
  let ciencias = prompt("Cuentame cual es tu nota promedio en ciencias");
  let promedio = ((parseFloat(matematica) + parseFloat(fisica) + parseFloat(ciencias)))/3;
  alert("Su promedio es" + " " + Math.round(promedio));
};

//Problema 3, aqui se pudiera colocar un + delante de los prompt evitando colocar el parseFloat reiteradas veces, ejemplo:

/*function tres(){
  let matematica = +prompt("Cuentame cual es tu nota promedio en matematica");
  let fisica = +prompt("Cuentame cual es tu nota promedio en fisica");
  let ciencias = +prompt("Cuentame cual es tu nota promedio en ciencias");
  let promedio = (matematica + fisica + ciencias)/3;
  alert("Su promedio es" + " " + Math.round(promedio));
}*/

//Problema 4

function cuatro(){
  let cantidad = [1,2,3]
  let frutas = [];

  cantidad.forEach(() => {
      let fruta = prompt("Ingrese el nombre de una fruta");
      frutas.push(fruta);
  })
  frutas.forEach( f => {
    if ( f !== "manzana"){
      console.log(f);
    }
  })
};

//Problema 5

function cinco() {
  let nombre = prompt("Ingresa tu nombre por favor");
  let vocales = ["a","e","i","o","u"];
  let nom = nombre.split("");
  let cantidadVocales = 0;
  let Consonantes = 0;
  
  nom.forEach ( letra => {
    vocales.includes(letra) ? cantidadVocales++ : Consonantes++;
  })
    console.log(cantidadVocales);
    console.log(Consonantes);
};



