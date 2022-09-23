/**DOM**/

let client1 = " John ";
let montodeCompra1 = 100;
let mensaje1 = client1 + "Compra realizada de $:" + montodeCompra1;
console.log(mensaje1)
/**
let iva = 10.4;
let mensaje1 = client1 + "Compra realizada de $:" +( montodeCompra * iva);
console.log(mensaje1);**/

let client2 = " John ";
let montodeCompra2 = 150;

let mensaje2 = client2 + "Compra realizada de $:" + montodeCompra2;
console.log(mensaje2);

let mensajePlant = "Cliente ${client1} realizó su compra por $: " + montodeCompra1;
console.log(mensajePlant);

/** DOM = Document Object Model **/
//GetElementById-->


const tituloP = document.getElementById("tituloP");
console.log(tituloP);



//GetElementByClassName
const names = document.getElementsByClassName("names");
console.log("names");
console.log(names);



//GetElementByTags//
const months = document.getElementsByTagName("li");
console.log(months);


const queryName = document.querySelector(".Query");
console.log(queryName);

//querySelectorALL:


const queryNameall = document.querySelectorAll("Sale");
console.log("Queryselectorall")
console.log(queryNameall);

//innerText


tituloP.innerText = "Clase de DOM JS";


//innerHTML


tituloP.innerHTML = "<p>Párrafo</p>";



//ClassName
card1.getElementsByClassName = "card1";

//NODOS

const card2 = document.getElementById("card2");

const parrafo = document.createElement("p");

//parrafo.innerText("Compra boletos de Viajes al Mejor Precio");
parrafo.getElementsByClassName("card2");

card2.appendChild(parrafo);

parrafo.remove();

/****/

const arrayEmpresa = ["Alianza:","Cocacola Company", "La Virginia Company", " Nestle "];
const alianza = document.getElementById("alianza")

for(let alianzas of arrayEmpresa) {
    let itemA = document.createElement("li")
    itemA.innerText = alianzas;
    alianza.appendChild(itemA);
}

/**OBJECTO**/

class Producto{
    constructor(nombre, precio)
    {
        this.nombre = nombre;
        this.precio = precio;
    }
}



const cocacola = new Producto ("Coca Cola");
const sprite = new Producto ("Sprite", 200);
const soda = new Producto ("Soda", 300);

const arrayTicket = [cocacola,sprite,soda];
const Ticket = document.getElementById("ticket");

arrayTicket.forEach(Ticket => {
    let div = document.createElement("div");
    div.innerHTML = `<p class="colorp"> ${Ticket.nombre} </p> <br>
    <p> ${ticket.precio} </p> <br>
    <img src="./images/cocacola.png" class="images-1" alt="cocacola" width="360px" height="200px" > <br>
    <br class="button-1" <button>Agregar al carrito</button>`
ticket.appendChild(div);
})



