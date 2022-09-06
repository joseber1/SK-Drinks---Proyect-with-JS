//Entrega de 
//Ciclo For, While , Do While

//FOR

/*
for (let i = 1; i <=4; i++) {
  console.log("iteracion ${1}");
} 
console.log("End of the cicle");


//Ciclo al revés

for (let i = 4; i <=1; i++) {
console.log("iteracion ${1}");
}
console.log("End of the cicle");


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
  
 }

 while(y <= 3);
  */

 //Entrega de Simulador Interactivo

 //Funciones 
 //Es un grupo de instrucciones que se agrupan para realizar una tarea 
 //Concreta

 //Como trabajamos con funciones:

 function holaMundo(){
    //instrucciones
    alert("Hola Mundo");
 }

 //Llamar a la función (invocar a la función)
holaMundo();


let nombre = "Jose";
let edad = "21";
let february = "En el 2023 tendré 22 años";
let edads = "En el 2023 tendré 22 años"
console.log(edad);
console.log(nombre);
console.log(february);

//Funciones que ejecutan una acción
//Funciones que además de ejecutar una acción retornan un dato.

let Num1 = retornaElNum1();
function retornaElNum1(){
    return 3;
}

console.log(Num1);

// Función de suma: // Declarar
function sumaT(valorC, valorV){
    let resultado = valorC + valorV;
    return resultado;
}

//PARAMETROS CON VARIABLES
/*


let numeroUno = 200;
let numeroDos = 300;
let resultadoSuma = sumaTradicional(numeroUno, numeroDos);
console.log(resultadoSuma);


*/


//Llamar resultado
let resultadoS = sumaT(150,100);
sumaT(150,100)
console.log(resultadoS);

//
let nombreAlumno = prompt("Ingrese su nombre");
function saludarAlumno(nombreAlumno);
{
alert("Hola Alumno" + nombreAlumno);
}


saludarAlumno("Jose");

/**SCOPE O ALCANCE DE LAS VARIABLES **/

//El scope o ambito de una variable es la zona del programa en la cual
//se define el contexto al que pertenece la misma dentro del algoritmo.

//JS se defien en dos ámbitos para las variables: global y local.

let global = 10;
function ejemploV(){
    console.log(global);
}

ejemploa();

//VARIABLE LOCAL
function ejemploC();{
let resultadoejemploB = 10 + 10;
}

//console.log(ejemploB);

function nombreFuncion(parametros){
    //instrucciones
}

//Función ANONIMA
//Una función anónima es una función que se define sin nombre y se
//utiliza para ser pasada por parámetro o asignada a una variable.

let sumaAnonima = function(c,v) {
    return c + v
}
console.log(sumaAnonima(1000,1000))

let restaAnonima = function (c,v) {
    return c - v
};

console.log(restaAnonima(1000, sumaAnonima(2500,2000)));

//FUNCIÓN Flecha:
//Indetificamos a las funciones flecha como funciones anónimas
//de Sintaxis simplificada.

let division = (c,v) => {
    return c / v;

}
console.log("División con función de flechas");
console.log(division(100,100));

//Multiplicación
console.log("Multiplicación con función de flechas");
let multiplicacion = (c,v) => c * v;

//Sacar el return y las llaves.

console.log(multiplicacion(40,40));

//Ejs

let nombred = nombred => console.log("Hi"+ nombred);

nombred ("JK");