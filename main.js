//Ciclo For, While , Do While

//FOR

for (let i = 1; i <=4; i++) {
   console.log("iteracion ${1}");
} 
console.log("End of the cicle");


//Ciclo al revés

//for (let i = 4; i <=1; i++) {
    //console.log("iteracion ${1}");
//}
//console.log("End of the cicle");


//Ciclo Anidados
for (let i = 1; i <= 4; i++){
    console.log("Empieza iteración")
    for (let s = 0; j < 4; s++);{
        console.log(s);
    }

}

//WHILE

let x = 1;
while (x <= 4) {
    console.log("iteracion ${x}");
    x++;
    {
        console.log("End of the circle");
    } 
}

//Do WHILE

let y = 1;
do {
    console.log("Iteracion ${y}");

    while(y <= 3);
}
 

//Clase 0//
//Nivelación
//Tipos de datos - Valores//
//"hola mundo" // String - cadena de caracteres

//2356 // Number

//true
//false // Booleanos

//null // Representa un valor nulo o vacío

//undefined // El valor todavía no esta definido 

//Variables//
//Son espacios de memoria que almacenan información útil durante la ejecutación
//del Programa.


//Las variables se pueden trabajar en dos etapas 

//1) Se declaran
//2) Se inicializan

//Asignar valores
//let nombre; //Declarando la variable

nombre = "Jose"; //Inicializando la variable 

let pais;

pais = "arg";

console.log(pais);

let edad = 21;

febrero = 22;

let mensajes = "En febrero tendré 22" + febrero;


//console.log Herramienta útil para visualizar en Javascript

console.log(nombre);


console.log(edad);

console.log(febrero);

let mensaje = "Bienvenido a esta página" + nombre + "Mi edad es" + edad;
console.log(mensajes);
console.log("hola mundo");




//Clase 1//
//Conceptos generales: sintaxis y variables
console.log("hola mundo p");

//SINTAXIS

//1)El código (pc) se lee de arriba hacía abajo.
//2)Incluir comentarios
//Comentario en bloque: */
//Comentario en línea  - //
//3)No se tiene en cuenta los espacios en blanco y las nuevas líneas (igua que HTML)
console.log("hola mundo")


console.log("hola mundo")
//4)Es case sensitive: distingue entre mayúscula y minúsculas.
let estoEsunEjemplo;
let estoesunejemplo; 

//5) Puede terminar una línea sin el punto y coma. Pero es más recomendable con ;
//6) Cuidado con las palabras reservadas.
//palabra reservada let,if,for, break, case ,catch, default, delete, do, else, finally, for, functions,in,instaceof, npw, return,switch, this, throw,try, typef,var,void,while, with, varías más.

//Constantes
//Una constante recibe una única asignación al momento de su declaración impiendo que su valor se modifique después.

const iva = 15.2;

let valorUno = 8;
let valorDos = 10;

let promedio = (valorUno + valorDos) / 2;
console.log(promedio);

//Cocatenar datos.

let nameclient = "John";
let buy = 2000;
let smss = nameclient + "El valor es" + "de" + (buy + iva);
console.log(smss);

//Herramientas - Sentencias Prompt - Alert
//La sentencia prompt mostrará un cuadro de diálogo para que el usuario ingrese un dato.
//Se puede proporcionar un mensaje que se colocará sobre el campo de un texto.
//El valor que devuelve string y si el usuario cancela devuelve un null.

//let nameAlumno = prompt("Ingrese su nombre");
//console.log(nameAlumno);
//let notaPrimerParcial = prompt("Ingrese la nota de su primer parcial");
//let notaSegundoParcial = prompt("Ingrese la nota del su segundo parcial");



let nameAlumno = prompt("Ingrese su nombre");
console.log(nameAlumno);

let notaPrimerParcial = parseInt(prompt("Ingrese la nota de su primer parcial"));
let notaSegundoParcial = parseInt(prompt("Ingrese la nota del su segundo parcial"));

console.log("El alumno Jose" + nameAlumno + "Primer nota" + notaPrimerParcial + "Segunda Nota" + notaSegundoParcial);



//typeof = me devuelve un string con el tipo de dato que tiene un almacenado una variable.

console.log(typeof notaPrimerParcial);

//Calcular un promedio

let promedioNotas = (notaPrimerParcial) + notaSegundoParcial / 2;
console.log("El promedio de notas del alumno es de:" + promedioNotas);



//Parseint() = me cambia un string por un número entero.
//let notaPrimerParcial = parseInt(prompt("Ingrese la nota de su primer parcial"));
//let notaSegundoParcial = parseInt(prompt("Ingrese la nota del su segundo parcial"));

//Parseint float() me cambia un string por un numero flotante (precios).


//alert
alert("Gracias por usar este simulador" + nameAlumno);




//Clase 2//

//Tipos de datos : booleano
//Tipo de dato que admite dos valores: verdadero o falso.


//let verdadero = true;
//let falso = false;
//console.log(verdadero, typeof verdadero);



//Condicionales

let esSoleado = true; //continua el siguiente código
//let esSoleado = false;

if (esSoleado) {
    alert("es soleado,y nos vamos a la playa");
}



//alert("Fin del código");

//Camelcase
//let edad; , let estoEsCamelCase;

//nombre = "Jose";
//edad = 21;
//edad = 22;

//consonle.log(nombre);
//console.log(edad);

//Usamos la palabra reservada if y evaluamos una condición. Sí es verdadero se ejecuta el //código entre llaves

//Las variables booleanas puede recibir el valor a partir de una evaluación booleana sobre // otras varaibles.
//false
let ejemploUno = 3 < 0;
console.log("ejemploUno");
console.log(ejemploUno, typeof ejemploUno);
//true

//let ejemploUno = 3 > 0;

//Operadores lógicos
//Estos operadores son comunes a todos los lenguajes de programación.

// == Igual //

// true let ejemploTres = (54 == 54;
//console.log("Ejemplo Tres: ");
//console.log(ejemploTres);

//Estrictamente igual (En valor y en tipo de datos)

// false let ejemploTres = (54 === "54";
//console.log("Ejemplo Tres: ");
//console.log(ejemploTres);

let ejemploTres = (54 == 54);
console.log("Ejemplo Tres: ");
console.log(ejemploTres);


// != es distinto // != estrictamente distintos
//false
let ejemploCuatro = (76 != "76");
console.log(ejemploCuatro);


//true
//let ejemploCuatro = (76 !== "76");
//console.log(ejemploCuatro);


// menor <, menor igual <=, mayor >, mayor igual >= /
let ejemploCinco = (10 > 5);
console.log(ejemploCinco);

//let ejemploCinco = (10 >= 10 )true
//let ejemplocinco = (10 > 10 )false


//Operador ! not 

let clima = "lluvioso";

let ejemploSeis = (clima != "lluviso");
console.log("Ejemplo Seis");
console.log(EjemploSeis);

//Operador and && or || 
let temperatura = 30;

//false
let ejemploSiete = (temperatura >= 40) && (clima) =="soleado";
console.log("EjemploSiete");
console.log(ejemploSiete);

// && = se tienen que cumplir las dos condiciones para sean true 

let ejemploOcho = (temperatura >= 40) || (clima =="soleado");
console.log("Ejemplo Ocho");
console.log(ejemploOcho);

// || Por lo menos una condición se tiene que cumplir para que de verdadero.



    

//CONDICIONALES 
let edads = parseInt(prompt("Ingrese su edad"));

if(edads < 12) {
    alert("Eres menor de edad, vuelve cuándo tengas la edad requeridad");
}

else{

  alert("No tienes la edad requeridad");
}




//Clase 3//

/* CALCULADORA DE MASA CORPORAL */

let peso = parseInt(prompt("Ingrese su peso: "));
let estatura = parseInt(prompt("Ingrese su estatura: "));
let imc = peso / (estatura * estatura);

console.log("El indice de masa corporal es de: " + (imc * 10000));
