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
/*const numero1 = 10;
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
*/
// ejercicio 4.3
// Usa un ciclo for para imprimir en la consola los números del 1 al 5
/*for (let i=0; i<=5; i++){
    console.log(i);
} */

// ejercicio 4.4
// Usa un bloque try...catch para intentar ejecutar un código que genere un error (throw new Error("Este es un error.")) y captura el error para mostrar un mensaje amigable.
/*try{
    throw new Error("algo salió mal");
} catch (error){
    console.log("Lo siento, ocurrio un error :,( ",error.message);
}
*/

// ejercicio 5.1
// Escribe una función tradicional llamada multiplicar que reciba dos parámetros y retorne su producto. Llama a la función y muestra el resultado.
/*function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(5, 3)); */

// ejercicio 5.2 
//   Convierte la función multiplicar del ejercicio anterior en una arrow function de una sola línea.
/*const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3)); */

// ejercicio 5.3
//Escribe una arrow function llamada saludar que no reciba parámetros y retorne el texto "¡Hola a todos!".
/*const saludar = () => {
    return "¡Hola a todos!";
};
console.log(saludar());
*/

// ejercicio 6.1
//Declara una variable global en el ámbito global. Luego, dentro de una función, declara una variable local. Intenta acceder a ambas variables dentro y fuera de la función, y explica qué funciona y qué no.
/*const variableGlobal = "Soy global";

function mostrarScope() {
    const variableLocal = "Soy local";
    console.log(variableGlobal);
    console.log(variableLocal);
}
mostrarScope();
console.log(variableGlobal);
console.log(variableLocal); 
// Si funciona la variable global, pero no la local, ya que la variable local solo existe dentro de la función donde fue declarada.

*/

// ejercicio 6.2
//Crea un objeto coche con una propiedad marca y un método mostrarMarca que use this. Llama al método y explica qué representa this.
/*const coche = {
    marca: "BYD",
    mostrarMarca() { 
        console.log(this.marca);
    }
};
coche.mostrarMarca(); // Muestra "BYD"
// this representa el objeto coche en este caso.
*/

//ejercicio 7.1
//Crea un array frutas = ["Manzana", "Banana"]. Usa push() para agregar "Naranja" y pop() para eliminar el último elemento. Muestra el array en cada paso.
/*let frutas = ["Manzana", "Banana"];
console.log(frutas);
frutas.push("Naranja");
console.log(frutas);
frutas.pop();
console.log(frutas);*/

//ejercicio 7.2
//Crea un array numeros = [1, 2, 3]. Usa map() para crear un nuevo array con cada número multiplicado por 2. Usa filter() para crear un nuevo array con solo los números mayores a 1.
/*let numeros = [1, 2, 3];
const numerosMultiplicados = numeros.map(num => num * 2);
const numerosFiltrados = numeros.filter(num => num > 1);
console.log(numerosMultiplicados); // [2, 4, 6]
console.log(numerosFiltrados); // [2, 3]*/

//ejercicio 7.3
/* Usa forEach() para iterar sobre el array frutas y mostrar cada fruta en la consola.
Usa find() para encontrar la fruta que sea "Banana".
Usa findIndex() para encontrar el índice de la fruta "Manzana".*/
/*let frutas = ["Manzana", "Banana", "Naranja"];
frutas.forEach(fruta => console.log(fruta));

const frutaEncontrada = frutas.find(fruta => fruta === "Banana");
console.log(frutaEncontrada); // "Banana"

const indiceManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log(indiceManzana); // 0*/

//ejercicio 8.1
/*Crea un objeto libro con propiedades titulo y autor.
Añade un método mostrarInfo que use this para imprimir la información del libro.
*/
/*const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    mostrarInfo() {
        console.log("Título: " + this.titulo + ", Autor: " + this.autor);
    }
};
libro.mostrarInfo();*/

//ejercicio 8.2
/*Crea una clase llamada Animal con un constructor que reciba un nombre.
Agrega un método saludar que retorne un saludo usando el nombre.
Crea una instancia de la clase y llama al método saludar.*/

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
saludar(){
    console.log("hola $(this.nombre)")
}
}


