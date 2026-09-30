// ejercicio 1.1
//var nombre = "Camila";

//nombre = "Anny";
//console.log(nombre);

// ejercicio 1.2
//const nombre = "Camila";
//console.log(nombre);

// ejercicio 1.3
//if (false) {
  //let edad = 25;
//}
//console.log(edad); // Esto generará un error porque la variable edad no está definida fuera del bloque if

// ejercicio 2.1

/* const texto = "hola, juann";
    console.log(typeof texto); 
const numero = 1000;
    console.log(typeof numero); 
const cumple = true;
    console.log(typeof cumple); 
const nulo = null;
    console.log(typeof nulo); 
let indefinido;
    console.log(typeof indefinido);
*/

// ejercicio 2.2
/*const persona = {
    nombre: "Camila",
    edad: 25,
    hobbies: ["leer", "viajar", "cocinar"]
};
console.log(typeof persona);
console.log(Array.isArray(persona.hobbies)); */

// ejercicio 3.1
/*const numero1 = 10;
const numero2 = "5";
console.log(numero1 + numero2); // suma de número y cadena por lo que se realiza una concatenación
console.log(numero1 * numero2); // Multiplicación de número y cadena lo que se realiza una conversión implícita de la cadena a número
*/

//ejercicio 3.2
/*const numero = 10;
const cadena = String(numero);
console.log(typeof cadena); // "string"

const numero2 = "100";
const numeroResultado= Number(numero2);
console.log(typeof numeroResultado); // "number"

const bool1 = "";
const bool2 = "holis";
const boolResultado1 = Boolean(bool1);
const boolResultado2 = Boolean(bool2);
console.log(typeof boolResultado1); 
console.log(typeof boolResultado2); 
*/

// ejercicio 4.1
/*console.log(5 == "5"); //seria true porque los == comparan solo el valor
console.log(5 === "5"); // seria false porque los === comparan el valor y el tipo de dato
*/

// ejercicio 4.2
const numero1 = 10;
const numero2 = 21;

if(numero1 % 2 === 0){
    console.log(numero1 + " es par");
} else {
    console.log(numero1 + " es impar");
}

if(numero2 % 2 === 0){
    console.log(numero2 + " es par");
} else {
    console.log(numero2 + " es impar");
}
