// Metodos de conversión

let cadenaTexto = "22"; //string
console.log(typeof cadenaTexto, cadenaTexto);
let numero = Number(cadenaTexto); //number
console.log(typeof numero, numero);

let numeroTexto2 = "-22.22"; //string
console.log(typeof numeroTexto2, numeroTexto2);
let numero2 = Number(numeroTexto2); //Se transforma a number
console.log(typeof numero2, numero2);

let alfanumerico = "100 años";
console.log(typeof alfanumerico, alfanumerico); //string
let numero3 = Number(alfanumerico);
console.log(typeof numero3, numero3);

let numeroDecimal = 22.22; //number
console.log(typeof numeroDecimal, numeroDecimal);
let convertirACadena = String(numeroDecimal); //Convierte a strig
console.log(typeof convertirACadena, convertirACadena);

let numeroA = 10;
let numeroB = 10;

let suma = numeroA + numeroB; //20
console.log(typeof suma, suma);

let convertirAString = String(numeroA) + String(numeroB);
let cadenaTexto2 = "Esta es la prueba de string " + "10" + "10";
console.log(typeof cadenaTexto2, cadenaTexto2);
console.log(typeof convertirAString, convertirAString);
//
//Operadores:
// Si son estrictos para que compare si es igual valor y dato ===
console.log(10 == "10");
console.log(10 !== 10);
console.log(10 >= "10");
console.log(10 <= "10");
console.log(10 < "10");
console.log(10 < "10");

//Operadores logicos
// && || (not = !)
console.log(true && true);
console.log(true || false);
console.log(!true);
console.log(10 > 19 || 12 > 11);

//concatenacion
let cadena = "Hola ";
let cadena2 = "Mundo";

let cadenaCompleta = cadena + "" + cadena2;
console.log(cadenaCompleta);
console.log(cadena + "" + cadena2);

//concatenacion iterpolacion
let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = `nombre: ${nombre} y apellido: ${apellido}`;
console.log(nombreCompleto);

//Condicionales

let valor1 = 10;
let valor2 = 15;
if (valor1 > valor2) {
  console.log("El valor 1 es mayor al valor 2");
} else {
  console.log("El valor 1 es menor al valor 2");
}
//If Ternario

let ifTernario =
  valor1 > valor2 ? "valor1 es MENOR que valor2" : "valor2 es MAYOR que valor1";
console.log(ifTernario);

//switch

let numeroTest = parseInt(prompt("Ingrese el numero del 1 al 4"));

switch (numeroTest) {
  case 1:
    document.write("Soy un uno");
    alert("soy un uno")
    break;
  case 2:
    console.log("Soy un dos");
    break;
  case 3:
    console.log("Soy un tres");
    break;
  case 4:
    console.log("Soy un cuatro");
    break;
  default:
    console.log("Soy un nada");
    break;
}
