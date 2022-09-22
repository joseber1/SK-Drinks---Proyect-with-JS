/** **/
let mensajes = " Bienvenido a SK Drinks " + "Aquí podrás encontrar todo tipo de bebidas con promociones cada mes" +  " Welcome to SK Drinks " + " Here you can find all kinds of drinks with promotions every month. " ;
console.log(mensajes);
const nombre = "Cliente Charles";
const pais = "Suiza";


console.log(pais);
console.log(nombre);


let opcion = prompt("Introduzca su nombre:");
let mensajed
console.log(mensajed);

let valor1 = 8;
let valor2 = 10;

let promedio1 = (valor1 + valor2) / 8;

let valor3 = 8;
let valor4 = 10;

let promedio2 = (valor3 - valor4) / 8;

const iva = 10.22;
let clienteD = "Lui";
let compraDe = 200;
let totals = "Su precio es de" + compraDe * iva;
console.log(totals);



const ivac = 7.10 + "ivac";
let tequeños = 300;
let sodac = 200;
let totald = "Su precio es de" + ivac;
function sumaT (tequeños, sodac){
    let totald = tequeños + sodac;
    return totald;
}
 console.log(totald);



function sumac (jugoNaranja, empanadas){
    let total = jugoNaranja + empanadas;
    return total;

}
let jugoNaranja = 200 + "El total de su compra es";
let empanadas = 150; + "El total de su compra es";
let total = sumac(jugoNaranja,empanadas);
console.log(total);


let numeroA = 1;
let numeroB = 2;
let numeroC = 3;
const NUMEROD = 4;

let resultadoSuma = numeroA + numeroB + numeroC;
console.log(iva);
console.log(numeroA);
console.log(numeroB);
console.log(numeroC);

//Productos de consumo diario
const ivad = 12.1;
let nameclient1 = "Nombre de cliente";
let arroz = 150 ;
let fideos = 100;
let salsaT = 150;
let harina = 140;
let macarrones = + 100;
let cafe =  + 150;
let smss = nameclient1 + "El valor es" + "de" + (arroz, fideos, salsaT, harina, macarrones, cafe * ivad + " Gracias por su compra vuelva pronto ");
console.log(smss);

//Bebidas
const ivad2 = 10.2;
let nameclien2 = "Nombre cliente";
let Cocacola = 200;
let Sprite = 240;
let SodaGuaraná = 200;
let Pepsi = 220;
let smss2 = nameclien2 + "El valor es" + "de" + (Cocacola,Sprite,SodaGuaraná,Pepsi * ivad2)
console.log(smss2);

let John = "John Cliente";
alert (" Gracias por estar aquí " + John) ;

//Enlatados

const ivad3 = 9.2;
let nameclient3 = "Nombre cliente";
let atun = 150;
let sardinas = 130;
let sardinasEnlatadas = 200;
let granosEnlatados = 140;
let maizEnlatado = 149;
let smss3 = nameclient3 + "El valor es" + "de" + (atun, sardinas,granosEnlatados,maizEnlatado,sardinasEnlatadas * ivad3);
console.log(smss3);

let usuarioA = "Johns";
let Johns;
let passwordA = "johnb";
let mensajeI = " Ingrese sus datos para obtener beneficios y descuentos ";
let usuarioI = prompt(" Ingrese su nombre de usuario ");
let passwordI = prompt(" Ingrese su password ");

function saludarAlumno(nombreA)
{
    alert("Hola Estudiante" + usuarioA);
}

console.log(usuarioA);


saludarAlumno("John");

if(usuarioI === usuarioA && passwordI == passwordA){
    alert(" Datos ingresados correctamente ");
}else{
    alert(" Los datos son incorrectos, intente de nuevo ");
}


