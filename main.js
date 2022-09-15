//Entrega de proyecto ARRAY + OBJECTO

/**ARRAY**/

const arrayA = [];

const arrayB = [1,2];

const arrayC = ["D90,", "D91" ];

/** **/

const numers1 = [4,3,4,15,5];
console.log( numers1 [2] ) // 

const numers2 = [11,3,4,20,5];
console.log( numers2 [2] ) // 

const numers3 = [12,30,41,20,5];
console.log( numers3 [2] ) //

let array = [2,4,8];
console.log(array);


//OBJECTO
let persona1 = "persona1";
let compañianame = "Nombre de Compañia";
let dueñode = "Dueño de Supermercado";
let edadde = 30;
let dirección = "Av 9 de Julio";
let namede = "Dueño de local - John" + dueñode;

const personap = {namede: "John", edadde: "30", dirección: "Av 9 de Julio" }
console.log(persona1.namede, persona1);
console.log(persona1.edad);
console.log(persona1.calle);



prompt("Texto descriptivo","Texto");
function alerta() 
{



/** **/

let mensaje;
let opcion = prompt("Introduzca su nombre:", "Aner Barrena");
console.log(mensaje);
console.log(opcion);


if (opcion == null || opcion == "") {
        mensaje = "Has cancelado o introducido el nombre vacío";
        } else {
            mensaje = "Hola " + opcion;
            }
            document.getElementById("ejemplo").innerHTML = mensaje;
}


let nombrede = prompt("Ingrese su nombre");
let opcion1 = prompt("Introduzca su nombre sin carácteres raros");
let mensajes1 = "Pon tu datos bien";

console.log(mensajes1);
console.log(opcion1);
console.log(nombrede);

let opcion = "opcion.";
let mensaje = "mensaje.";


if (opcion ==null || opcion == ""){;
}else{
    mensaje = "Bienvenido" + opcion;
};




let edadded = 30;
let mensaje2= "Pon tus datos bien";
let JKalumno = prompt("Ingrese su edad");
console.log(JKalumno);
let opcion2 = prompt("Introduzca su edad correctamente");

if (opcion == null || opcion == ""){
}else{
    mensaje = "Bienvenido" + opcion;
}

console.log(edadded);
console.log(mensaje2);
console.log(JKalumno);
console.log(opcion2);

/** **/

const persona2 = { nombred: "Josh M",  edads: 39, callede: "Av Santa Fe"};
console.log(persona2.nombred);
console.log(persona2.edads);
console.log(persona2.callede);

/**CONSTRUCTORES - THIS **/

 function Persona3(namede,edadde,direcciónde){
    this.namede = namede;
    this.edadde = edadded;
    this.direcciónde = direcciónde;
    return this.namede;
}

let personas6 = ("Joep")+ 20 + "Hondura";
let ingreso6 = 200;
let ingresoT = "Ingreso total";
personas6 = "Vende botellas de agua" + "por" + "1$";
let personas7 = ("Noel")+ 29 + "Salvador"; 
let ingreso7 = 300;
personas7 = "Vende dulces" + "por" + "1$";
let personas8 = ("John" + 30 + "Dinamarca");
persona8 = "Compró un reloj" +  "por" + "10$" + "y" + "vende helados" + "por" + "2$"; 
let ingreso8 = 300;
let personas5 = ("Melissa"+ 30 + "San Francisco");
let ingreso5 = 3000;
personas5 = "Vendió su casa" + "para emprender un" + "nuevo negocio";

console.log(personas6);
console.log(persona2.callede);
console.log(persona2.callede);
console.log(persona2.callede);
console.log(persona2.callede);
console.log(persona2.callede);


    function personas4(persona6s,persona7s,persona8s){
    this.personas6 = personas6;
    this.personas7 = personas7;
    this.personas8 = personas8;
    this.personas5 = personas5;
    return this.ingresoT;
    

}

let arroz = "Producto Arroz";
let price = 100 + "Precio del Arroz";

/**CLASS PRODUCTO**/

 constructor(arroz, precio); {
    this.price + arroz.toLocaleUpperCase();
    this.producto = arroz.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendidoel = false;
}

sumaIva(); {
this.precio = this.precio * 1.21;
}

vender()
{
    this.vendidoel = true;
}
 
const Producto1 = new Producto ("Arroz 1kg", "125");
const Producto2 = new Producto ("Espagueti 1kg", "105");
const Producto3 = new Producto ("Azúcar 1kg", "100");
const Producto4 = new Producto ("Sal 1kg", "99");
const Producto5 = new Producto ("Granos 1kg", "120");

Producto1.sumaIva();
Producto2.sumaIva();
Producto3.sumaIva();
Producto4.sumaIva();
Producto5.sumaIva();
Producto1.vender();
Producto2.vender();
Producto3.vender();
Producto4.vender();
Producto5.vender();
  



