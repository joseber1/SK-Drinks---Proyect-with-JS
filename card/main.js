

/**
 * Estudiante José Bermúdez (Comisión:#34020-Javascript )
 * Proyecto de ventas de bebidas, aplicando todo lo visto en la clase
 * Simulando compra al carrito, y datos del usuario.
 * Datos guardados de usuario.
 * Array, Objectos
 * Class, ID,
 * Ciclos/iteraciones
 * Contro de flujos
 * Programación con funciones
 * DOM
 * Eventos
 * STORAGE JSON
 * Workshop I
 * Operadores Avanzados
 * Librerias
 * Promises Asyncs
 * Fetch
 *
 *  **/



//-----------------------------------------------------------//



/**1) Sintaxis - Variables - Const **/

/**Datos de Clientes **/

const nombre = "Cliente Charles";
const pais = "Suiza";


console.log(pais);
console.log(nombre);


let option = prompt("Introduzca su nombre:");
let mensajed
console.log(mensajed);

let supais = prompt("Introduzca su pais:"  );
let resultado1 = "pais" + "Suiza";
console.log(supais),(pais);

let sunacionalidad = prompt("Introduzca su nacionalidad:"  );
let resultado2 = "nacionalidad"  + "Suizo";
console.log(resultado2);


const ivass = 7.7 + "Iva en Suiza";

let numeroA = 1;
let numeroB = 2;
let numeroC = 3;
const NUMEROD = 4;

let resultadoSuma = numeroA + numeroB + numeroC;
console.log(ivass);
console.log(numeroA);
console.log(numeroB);
console.log(numeroC);


/** **/
//-----------------------------------------------------------//



let valor1 = 8;
let valor2 = 10;

let promedio1 = (valor1 + valor2) / 8;

let valor3 = 8;
let valor4 = 10;

let promedio2 = (valor3 - valor4) / 8;

let clientea = "Persona";
let valorCompra = 7000;
const ivap = 7 + "iva";

let mensajec = clientea + "Valor de su" + "compra"  + valorCompra * ivap;
console.log(mensajec)


let clienteB = "John";
let valorComprac = 9000;

const ivas = 15.0 + "Iva en Suiza";
let mensajecc = clienteB + "Valor de su" + "compra" + (valorComprac * ivas);
console.log(mensajecc);

const ivad = 10; //iva
let nameclient1 = "Charles"; //nombre de cliente
//Productos de consumo diario
let arroz = "Producto Arroz";
let fideos = "Producto Fideos";
let buy1 = "Arroz 1kg" + 150;
let buy2 = "Fideos 1kg"+ 140;
let buy3 = "Macarrones 600gm" + 100;
let buy4 = "Leche 1kg" + 150;
let smss = nameclient1 + "El valor es" + "de" + (buy1, buy2, buy3, buy4 * ivad);
console.log(smss);

const iva2 = 10.2 + "Iva PAÍS";
clienteC = "Luís";
let valorCompraC = 1000 + iva2;
let mensaje3 = clienteC + " Valor de su compra " + (valorCompraC * iva2);
console.log(mensaje3);

//Bebidas
const iva3 = 10 + "Iva";
let sodaCocacola = "1,25lts, 2,25lts";
let sodaSprite = "1,25lts, 2,25lts";
let aguaSoda = "1,25lts, 2,25lts";
let jugoCepita = "1,25lts, 2,25lts";
let sodaGuaraná = "1,25lts, 2,25lts";
let sodaNaranja = "1,25lts, 2,25lts";

let buyone =  200  + "1,25lts" +  350 + "2,25lts"  + "Cocacola" * iva3 ;
let buytwo =  250  + "1,25lts" +  370 + "2,25lts"  + "Sprite" * iva3 ;
let buytree =  260  + "1,25lts" +  320 + "2,25lts"  + "AguaSoda" * iva3 ;
let buyfour =  210  + "1,25lts" +  340 + "2,25lts"  + "JugoCepita" * iva3 ;
let buyfive =  220  + "1,25lts" +  320 + "2,25lts"  + "SodaGuaraná"* iva3 ;
let buysix =  200  + "1,25lts" +  350 + "2,25lts"  + "Cocacola"* iva3 ;

console.log(sodaCocacola),(sodaSprite);(aguaSoda),(jugoCepita),(sodaGuaraná),(sodaNaranja);
console.log(buyone);
console.log(buytwo);
console.log(buytree);
console.log(buyfour);
console.log(buyfive);
console.log(buysix);


 
/**Condicionales***/

let age = parseInt(prompt(" Ingrese su edad "));

    if (age < 1 ,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17){
        alert( " Eres muy jovén para estar aquí ")
    }else{
        alert( " Tu no eres un niño ")
    }

    /**Condiciones Anidadas IF, ELSE, IF **/

let price = 99.4;
if (price < 20 ){
    alert(" El precio menor que 20 ");
}


else if (price < 70 ){
    alert("El precio menor que 70");
}else if(price > 20 && price <= 19 )
{
    alert(" El precio menor que 20? ")
}

/** USUARIO - CONTRASEÑA **/

let usuarioA = "John";
let John;
let passwordA = "johnb";
let mensajeI = " Ingrese sus datos para obtener beneficios y descuentos ";
let usuarioI = prompt(" Ingrese su nombre de usuario ");
let passwordI = prompt(" Ingrese su password ");

function saludarAlumno(nombreA)
{
    alert("Hola Estudiante" + usuarioA);
}

console.log(usuarioA);


saludarAlumno(John);

if(usuarioI === usuarioA && passwordI == passwordA){
    alert(" Datos ingresados correctamente ");
}else{
    alert(" Los datos son incorrectos, intente de nuevo ");
}

/**Alert**/
alert (" Gracias por estar aquí " + John) ;

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



let verdad = true;
let falsoes = false;
console.log(verdad, typeof verdad);


 /**) Simulador interactivo**/

 let mensajes = " Bienvenido a SK Drinks " + "Aquí podrás encontrar todo tipo de bebidas con promociones cada mes" +  " Welcome to SK Drinks " + " Here you can find all kinds of drinks with promotions every month. " ;
console.log(mensajes);


/**Funciones **/

function holaMundo(){
    alert(" Hola Mundo ");
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



function sumad (tequeños,soda)
{
    let total = tequeños + soda
    return total;
}


let tequeños = 300;
let soda = 200;

//console.log(resultadoF);

//-----------------------------------------------------------//

function sumac (jugoNaranja, empanadas){
    let total = jugoNaranja + empanadas;
    return total;

}
let jugoNaranja = 200 + "El total de su compra es";
let empanadas = 150; + "El total de su compra es";
let total = sumac(jugoNaranja,empanadas);
console.log(total);


/**Objetos **/
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
let coche = "Ford Focus";
let marca = "Ford";
let fabricación = "2021";
let km = 4000;

//Ejemplo con objecto más prolijo

let pasillodeGranos ={
    caraotas: "1kg 500gm  Marca importada Ecuador ",
    frijoles: "1kg 500gm ",
    maiz: "1kg 500gm",
    caraotasNegras: "1kg 500gm ",

}

let pasillodePastas = {
    pastaCorta: "1kg, 500gm - Marca importada Brasil ",
    pastadeEspinaca: "1kg,500gm ",
    pastaTornillitos: "1kg , 500gm",
}

const personap = {namede: "John", edadde: "30", dirección: "Av 9 de Julio" }
console.log(persona1.namede, persona1);
console.log(persona1.edad);
console.log(persona1.calle);



prompt("Texto descriptivo","Texto");
function alerta() 
{

//-----------------------------------------------------------//

/******/


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
let mensajes2= "Pon tus datos bien";
let JKalumno = prompt("Ingrese su edad");
let opcion2 = prompt("Introduzca su edad correctamente");

if (opcion == null || opcion == ""){
}else{
    mensajes2 = "Bienvenido" + opcion;
   
}

console.log(edadded);
console.log(mensajes2);
console.log(JKalumno);
console.log(opcion2);

/** **/

const persona2 = { nombred: "Josh M",  edads: 39, callede: "Av Santa Fe"};
console.log(persona2.nombred);
console.log(persona2.edads);
console.log(persona2.callede);

/**CONSTRUCTORES - THIS **/

 function Persona3(namede,edadded,direcciónde){
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
//-----------------------------------------------------------//

    function Personas4(personas6,personas7,personas8){
    this.personas6 = personas6;
    this.personas7 = personas7;
    this.personas8 = personas8;
    this.personas5 = personas5;
    return this.ingresoT;
    

}

  
function Persona5(namede,edadded,direcciónde){
    this.namede = namede;
    this.edadde = edadded;
    this.direcciónde = direcciónde;
    return this.namede;
}

  
class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const personaUno = new Persona ("Luís", 39, "Av 9 de Julio 305 ");
const personaDos = new Persona ("Luís", 39, "Av 9 de Julio 305 ");
const personaTres = new Persona ("Luís", 39, "Av 9 de Julio 305 ");


/**CLASS PRODUCTO**/
class Productos {
constructor(arroz, precios) {
    this.arroz + arroz.toLocaleUpperCase();
    this.producto = arroz.toUpperCase();
    this.precios = parseFloat(precios);
    this.vendidoel = false;
}

sumaIva()  {
this.precios = this.precios * 1.21;
}

vender()
{
    this.vendidoel = true;
}
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




/**DOM y Eventos */
//-----------------------------------------------------------//


const mainname = document.getElementsByClassName("mainame");
console.log(mainname);

mainname.innerHTML = `<h1 class="mainname" >Sk's Drinks</h1>

`
//-----------------------------------------------------------//
const row = document.getElementsByClassName("row");
console.log(row)

row.innerHTML = `<div class="row" id="contenedorProductos"></div>`

//-----------------------------------------------------------//

const carname = document.getElementsByClassName("carname");
console.log(carname)

.carname.innerHTML = `<h2 class="carname" >Carrito de Compras: </h2>`

//-----------------------------------------------------------//

const verCarritod = document.getElementsByClassName ("verCarritod")
console.log(verCarritod)

.verCarritod.innerHTML = `<button class="btn btn-primary verCarritod " id="verCarrito">Ver Carrito</button>`

//-----------------------------------------------------------//

const vaciarCarritod = document.getElementsByClassName ("vaciarCarritod")
console.log(vaciarCarritod)

.vaciarCarritod.innerHTML = `<button class="btn btn-primary vaciarCarritod " id="vaciarCarrito">Vaciar Carrito</button>`
//-----------------------------------------------------------//

const totalComprad = document.getElementsByClassName ( "totalComprad" )
console.log(totalComprad)

.totalComprad.innerHTML = ` <h3>Total de la compra: <span class="totalComprad" id="totalCompra">0</span></h3>`

//-----------------------------------------------------------//

const contenedorCarritod = document.getElementsByClassName ( "contenedorCarritod" )
.contenedorCarritod.innerHTML = `<div class="row py-3" class="contenedorCarritod" id="contenedorCarrito"></div>
`
//-----------------------------------------------------------//

const gridcolums = document.getElementsByClassName ( "gridcolums" )
console.log(gridcolums)

.gridcolums.innerHTML = `<section class="gridcolums">
<img src="https://thumbs.dreamstime.com/b/bottles-soft-drinks-market-shelves-istanbul-november-november-istanbul-turkey-36100520.jpg" alt="" width="300px" height="250px" >

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore exercitationem unde ullam esse corrupti assumenda inventore? Accusantium odio, voluptatibus doloremque dolorem, quisquam facilis voluptate suscipit animi sapiente sequi libero.</p>
 
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore exercitationem unde ullam esse corrupti assumenda inventore? Accusantium odio, voluptatibus doloremque dolorem, quisquam facilis voluptate suscipit animi sapiente sequi libero.</p>

</section>

<section class="gridcolums">
<img src="https://thumbs.dreamstime.com/b/bottles-soft-drinks-market-shelves-istanbul-november-november-istanbul-turkey-36100520.jpg" alt="" width="300px" height="250px" >

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore exercitationem unde ullam esse corrupti assumenda inventore? Accusantium odio, voluptatibus doloremque dolorem, quisquam facilis voluptate suscipit animi sapiente sequi libero.</p>
 
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore exercitationem unde ullam esse corrupti assumenda inventore? Accusantium odio, voluptatibus doloremque dolorem, quisquam facilis voluptate suscipit animi sapiente sequi libero.</p>

</section>

</section>`

//-----------------------------------------------------------//

const footer = document.getElementsByClassName ( "footer" )
console.log(footer)
.footer.innerHTML = `<h4>Sk's Drinks @2022 Todo los derechos reservados</h4>
<p>Marca registrada en la ciuda autonoma de Buenos Aires, licencia certificada y registrada.
    Venta de bebidas, energeticas, y bebidas naturales y soda al mayor y detal.
</p>`

//-----------------------------------------------------------//

const alink = document.getElementsByClassName ( "alink" )
console.log(alink)

.alink.innerHTML = `<div class="alink">
<a href="">Leer más aquí</a>
<a href="">Contactanos aquí</a>
<a href="">Redes Sociales</a>
<a href="">Nuestros Patrocinantes</a>
</div>`

//-----------------------------------------------------------//





let cliente1 = " John ";
let montodeCompra1 = 100;
let mensaje1 = cliente1 + "Compra realizada de $:" + montodeCompra1;
console.log(mensaje1)



let cliente2 = " Johns ";
let montodeCompra2 = 1500;
const iva = 12.2
let mensaje2 = cliente2 + "Compra realizada de $:" + montodeCompra2  * iva;
console.log(mensaje2)


 let mensajeL = `Cliente ${cliente1} realizó una compra por $${montodeCompra1}`;
 console.log(mensajeL);

/****/
//ID


const card = document.getElementById("card");
console.log(card);


//CLASS


const card2 = document.getElementsByClassName("card2");
console.log(card2);



const important = document.getElementsByTagName("li");
console.log(important);


//QuerySelector

const metododepago = document.querySelector(".metododepago");
console.log(metododepago);

//QuerySelectorAll

const metododepago1 = document.querySelectorAll("metododepago1");
console.log(metododepago1);

//Nodos M
//InnerText 

//Operador ternario - Avanzado
let precio = 300
if(precio > 350){
    alert("El precio es?")
 } else {
    alert ("Precio es 300")
}

let precioDos = 350
if(precio > 300){
    alert("El precio es?")
 } else {
    alert ("Precio es 350")
}

let permiso
if(usuario.edad >= 18){
    permiso = true
} else {
    permiso = false
}


if (permiso){
    alert("No puedes comprar en este lugar. No cumples con edad correspondiente")
}
const marcasd = "Marcasdestacadas";
marcasd.innerText = "Compra al mayor a bajo costo";


//InnerHTML

//card1
const p = document.querySelectorAll("metododepago1");
console.log(p);

class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id; 
        this.nombre = nombre; 
        this.precio = precio; 
        this.cantidad = cantidad;
    }
}

//Productos y los almacenado en un array: 

const producto1 = new Producto(1, "Coca Cola", 200, 1);
const producto2 = new Producto(2, "Coca Cola Light", 300, 1);
const producto3 = new Producto(3, "Fanta", 150, 1);
const producto4 = new Producto(4, "Jugo de Naranja", 200, 1);
const producto5 = new Producto(5, "Fernet", 250, 1);
const producto6 = new Producto(6, "Pepsi", 250, 1);

//---------------------CARRITO :D------------------------------

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];

//Productos modificando el DOM. 

const contenedorProductos = document.getElementById("contenedorProductos");

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card","col-xl-3", "col-md-6", "col-sm-12");
    divProducto.innerHTML = `
                            <div>
                                <img src="img/${producto.id}.png" class="card-img-top img-fluid py-3 cards ">
                                <div class="card-body agregaralCarrito ">
                                    <h3 class="card-title"> ${producto.nombre} </h3>
                                    <p class="card-text"> ${producto.precio} </p>
                                    <button id="boton${producto.id}" class="btn btn-primary " > Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(divProducto);
    //Agregando un evento al boton de agregar al carrito: --------------------- 
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);

        Swal.fire({
            title: 'Haz agregado el producto al carrito',
            text: 'Haz agregado el producto al carrito',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })

    })
});

//-------------------------------------------------------------//

//Creo el carrito de compras y una función que busque el producto por id y lo agregue al carrito. 

const carrito = [];

//-------------------------------------------------------------//

//Versión que chequea las cantidades: 

const agregarAlCarrito = (id => {
    const producto = productos.find(productos => producto.id === id)
        const productoEnCarrito = carrito.find(producto => producto.id === id)

        if(productoEnCarrito){
            productoEnCarrito.cantidad++;

         }else {
            carrito.push(producto);
        }
    })



//-------------------------------------------------------------//
//Muestro el carrito de compras modificando el DOM. 

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", actualizarCarrito);

function actualizarCarrito() {
    let aux="";
    carrito.forEach(producto => {
        aux += `
                <div class="card col-xl-3 col-md-6 col-sm-12">
                    <img src="img/${producto.id}.png" class="card-img-top img-fluid py-3">
                    <div class="card-body">
                        <h3 class="card-title"> ${producto.nombre} </h3>
                        <p class="card-text"> ${producto.precio} </p>
                        <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                    </div>
                </div>
                `
    })

    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}

//Agregué una función que elimine el producto del carrito: 

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    actualizarCarrito();

    Swal.fire(
        'Estás seguro?',
        'Estás seguro que quieres eliminar el producto?',
        'question'
      )

}


///Función para vaciar todo el carrito por completo: 

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

//Creo una función que me calcule el total del carrito: 

const totalCompra = document.getElementById("totalCompra");

const calcularTotalCompra = () => {
    let total = 0; 
    carrito.forEach( producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
}

    //calculando total de la compra

/***Operador Avanzado */



/***JSON */
    /***Rutas Relactivas fetch */

const lista = document.getElementById("lista");

const listadeProductos = "json/productos.json";

fetch(listadeProductos)
.then(respuestas => respuestas.json ())
.then(datos => {



datos.forEach ( producto => {
    lista.innerHTML += `
    
    <h3>Nombre de productos ${producto.nombre} </h3>
    <strong>Precio de productos: ${producto.precio} </strong>
    <strong> ID: Precio de productos: ${producto.id} </strong>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    

    <h3>Nombre de productos ${producto.nombre} </h3>
    <strong>Precio de productos: ${producto.precio} </strong>
    <strong> ID: Precio de productos: ${producto.id} </strong>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <br><br>

    <p>Delivery GRATIS a todo el PAÍS</p>
    
    
    
    `
   })

})
.catch(error => console.log(error))
.finally(() => console.log("Proceso terminado Exitosamente"));

//------------------JSON - LOCALSTORAGE ALMACENANDO DATOS-------------------------------

const productoss = [
    { nombre: "Coca Cola", precio: 200 },
    { nombre: "Coca Cola Light", precio: 300 },
    { nombre: "Fanta", precio: 150 },
    { nombre: "Jugo de Naranja", precio: 200 },
    { nombre: "Fernet", precio: 250 },
    { nombre: "Pepsi", precio: 250 },
   
];

    let carritos = []
    let selecionar = prompt("Hola deseas comprar algo?")
    while(selecionar != "si" && selecionar != "no"){
        alert("por favor ingresa si o no")
        selecionar = prompt ("hola desea comprar si o no?")
    }



    if (selecionar == "si"){
        alert("listas de productos aquí")
        console.log(productos)
    }

  