console.log("Hello world!");

var nombreVariableVar;
let nombreVariableLet; //Funciona por bloque, se elimina al salir del bloque
const CONSTANTE = 1;

// Declaración de variables

// var nombre = "Juan";

if (true) {
  let nombre = "Pedro";

  console.log(nombre);
}

// CamelCase

let nombreCompleto = "Pedro Perez";

// snake_case
let nombre_completo = "Pedro Perez";

// PascalCase
let NombreCompleto = "Pedro Perez";

let nombre = "Pedro"; //Esto es un string
let numero = 1; //Esto es un numero
let decimal = 300.14; //Esto es un decimal
let booleano = undefined; // Esto es un indefinido, true, false
let nulo = null; //Esto es un nulo

const IVA = 21; //Esto es una constante
const PI = 3.14; //Esto es una constante

//
let objeto = {
  nombre: "Camilo",
  apellido: "Silva",
};

console.log(objeto.nombre + " y " + objeto.apellido);

console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof decimal);
console.log(typeof booleano);

// array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let array2 = ["Pedro", "Juan", "Camilo"];

let array3 = [
  1,
  "Pedro",
  true,
  undefined,
  null,
  { nombre: "Pirulo", apellido: "Perez" },
];

console.log(array[3]);
console.log(array2[2]);
console.log(array3[5]);

let nombre1 = "Camilo";
let apellido1 = "Silva";

// alert("Nombre y el apellido: " + nombre1 + " " + apellido1);


let nombreApellido = prompt("Introduzca nombre y apellido: ");
alert(nombreApellido);

let isShow = confirm("¿Quieres mostrar el nombre y apellido?");
alert(isShow); // true o false

document.write("Hola mundo");
