/**1) Sintaxis - Variables - Const **/
const pa = "Charles Nació en Suiza";
const nombre = "Charles";
const pais = "Suiza";

let edad = 10
edad = 11 + "En el próximo año Charles tendrá nuevo año"; 
let apellido = "Swelder";
let mensaje;

console.log(edad);
console.log(pais);
console.log(nombre);
console.log(pa);
console.log(apellido);
console.log(mensaje);

let opcion = prompt("Introduzca su nombre:");
let mensajed
console.log(mensajed);

let supais = prompt("Introduzca su pais:"  );
let resultado1 = "pais" + "Suiza";
console.log(supais),(pais);

let sunacionalidad = prompt("Introduzca su nacionalidad:"  );
let resultado2 = "nacionalidad"  + "Suizo";
console.log(resultado2);


const iva = 7.7 + "Iva en Suiza";

let numeroA = 1;
let numeroB = 2;
let numeroC = 3;
const NUMEROD = 4;

let resultadoSuma = numeroA + numeroB + numeroC;
console.log(iva);
console.log(numeroA);
console.log(numeroB);
console.log(numeroC);


/** **/



let valor1 = 8;
let valor2 = 10;

let promedio1 = (valor1 + valor2) / 8;

let valor3 = 8;
let valor4 = 10;

let promedio2 = (valor3 - valor4) / 8;

let clientea = "Persona";
let valorCompra = 7000;

let mensajec = clientea + "Valor de su" + "compra" + "7000";
console.log(mensajec)


let clienteB = "John";
let valorComprac = 9000;

const ivas = 15.0 + "Iva en Suiza";
let mensajecc = clienteB + "Valor de su" + "compra" + (valorComprac * ivas);
console.log(mensajecc);

const ivad = 10;
let nameclient1 = "Charles";
let arroz = "Producto Arroz";
let fideos = "Producto Fideos";
let buy1 = 150;
let buy2 = 200;
let smss = nameclient1 + "El valor es" + "de" + (buy1, buy2 * ivad);
console.log(smss);


/**Sentencias prompt - alert **/

let John =  prompt("Ingrese su nombre");
let nota1 = prompt("Ingrese su primera nota");
let nota2 = prompt("Ingrese su primera nota");

console.log("Estudiante" + John + "Primera nota" + nota1  + "Segunda nota" + nota2)

/**Type of **/
console.log(typeof nota1);


let promedoN = (nota1 + nota2) / 2;
console.log("Promedio de nota" + promedoN )

let Johns =  parseInt(prompt("Ingrese su nombre"));
let nota3 = parseInt(prompt("Ingrese su primera nota"));

/** ParseInt
const ivac = 15;
let clienteC =  parseInt(prompt("Ingrese su compra"));
let sodaCocacola = "1,25lts" + "2,25lts" + (clienteC + sodaCocacola + sodaSprite * ivac) + "El valor de su comprae es" + "de" ;
let sodaSprite =  "1,25lts" + "2,25lts"; + clienteC + (aguaSoda + jugoCepita * ivac) + "El valor de su comprae es" + "de" ;
let aguaSoda =  "1,25lts" + "2,25lts";   + clienteC + (sodaGuaraná + sodaNaranja * ivac) + "El valor de su comprae es" + "de";
let jugoCepita =  "1,25lts" + "2,25lts";
let sodaGuaraná =  "1,25lts" + "2,25lts";
let sodaNaranja =  "1,25lts" + "2,25lts";

let buyone =  prompt("Ingrese qué bebida le gustaría comprar");
let buytwo = prompt(sodaCocacola);
let buytree = prompt(sodaSprite);
let buyfour = prompt(aguaSoda);
let buyfive = prompt(jugoCepita);
let buysix = prompt(sodaGuaraná);
let buyseven = prompt(sodaNaranja);**/

let sodaCocacola = "1,25lts, 2,25lts";
let sodaSprite = "1,25lts, 2,25lts";
let aguaSoda = "1,25lts, 2,25lts";
let jugoCepita = "1,25lts, 2,25lts";
let sodaGuaraná = "1,25lts, 2,25lts";
let sodaNaranja = "1,25lts, 2,25lts";

let buyone
let buytwo
let buytree
let buyfour

console.log(sodaCocacola),(sodaSprite);(aguaSoda),(jugoCepita),(sodaGuaraná),(sodaNaranja);
console.log(buyone);
console.log(buytwo);
console.log(buytree);
console.log(buyfour);

console.log("Estudiante" + John + "Primera nota" + nota1  + "Segunda nota" + nota2)

/**Operadores Lógicos **/

/* == Igual */ 
// x2 = Ejemplo 2 y siguientes
let x2 = (40 == 20);
console.log("x2");
console.log(x2 , typeof x2);

/** === Estrictamente igual **/

let x3 = (30 == "30");
console.log("x3");
console.log(x3);

/** != distinto // !== estrictamente distinto **/
let x4 = (35 != "34");
console.log("x4");
console.log(x4);

/**menor <, menor igual <= , mayor igual >= **/
let x5 = (12 > 12 ); //false > // >= true
console.log("x5");
console.log(x5);

/** Operador ! not **/
let nubes = "nublado";

let x6 = (nubes != "neblina");
console.log("x6");
console.log(x6);

/**Operador and && - or || **/
let temperature = -1;

let x7 = (temperature >= -15 ) && (x6 == "neblina");
console.log("x7");
console.log(x7);

let x8 = (temperature >= -15 ) || (x6 == "neblina" )
console.log("x8");
console.log(x8);  

/**Condicionales***/

let age = parseInt(prompt("Ingrese su edad (age) Click put your age here "));

    if (age < 1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17){
        alert( "Eres muy jovén para estar aquí" + "You're so young to be here")
    }else{
        alert( "Tu no eres un niño"+ "You are not a child")
    }

    /**Condiciones Anidadas IF, ELSE, IF **/

let price = 99.4;
if (price < 20 ){
    alert("El precio menor que 20");
}


else if (price < 70 ){
    alert("El precio menor que 70");
}else if(price > 20 && price <= 19 )
{
    alert("El precio menor que 20?")
}

/** USUARIO - CONTRASEÑA **/

let usuarioA = "John";
let passwordA = "johnb";
let mensajeI = "Ingrese sus datos para obtener beneficios y descuentos";
let usuarioI = prompt("Ingrese su nombre de usuario ");
let passwordI = prompt("Ingrese su password ");

if(usuarioI === usuarioA && passwordI == passwordA){
    alert("Datos ingresados correctamente");
}else{
    alert("Los datos son incorrectos, intente de nuevo");
}

/**Alert**/
alert ("Gracias por estar aquí" + "Thanks a lot to be here" + John);

/**Control de flujo**/
/**Ciclos - iteracciones **/

console.log(1);
console.log(2);
console.log(3);

console.log("1");

for(let i = 1;  i < 2; i = i + 1){
console.log(holaMundo);
}

for (let i = 1; i <=9; i++){
    console.log(i);
}

for(let i = 0; i <= 10; i = i + 2){
    console.log(i);
}



/** **/

let verdad = true;
let falsoes = false;
console.log(verdad, typeof verdad);

/**Condicional**/

let lluviaLigera = true;

if(verdad){
alert("Hay lluvia desde, 4 de la madrugada.")
}

let x1 = 10 < 2;
console.log(x1);
console.log(x1 , typeof x1);



 /**) Simulador interactivo**/

 let mensajes = "Bienvenido a SK Drinks" + "Aquí podrás encontrar todo tipo de bebidas con promociones cada mes" +  "Welcome to SK Drinks" + "Here you can find all kinds of drinks with promotions every month." ;
console.log(mensajes),(resultado2);

/**Funciones **/

function holaMundo(){
    alert("Hola Mundo");
}


let funcion = "Watch";

function retornaElNum1(){
    return 2;
}

let ElNum1 = retornaElNum1();
console.log(ElNum1);
console.log(funcion);

//


function sumaT(valorb , valorc ){
    let resultado = valorb + valorc;
    return resultado;
}

let n1 = 100;
let n2 = 200;

let resultadoF = sumaT(n1,n2);
console.log(resultadoF);


let nombreA = prompt("Ingrese su nombre");

function saludarAlumno(nombreA)
{
    alert("Hola Estudiante" + nombreA);
}

console.log(nombreA);


saludarAlumno(John);


