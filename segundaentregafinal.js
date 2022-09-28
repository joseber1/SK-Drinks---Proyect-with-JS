/**SEGUNDA ENTREGA FINAL DOM, Eventos, Storage y JSON  **/

 /**DOM**/

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

/** 
const _Important = document.getElementById("Important");
const _arrayL = ["li1","l2","l3"];

for(let _Important of _arrayL ) {
    let Important = document.createElement("li");
    Important.innerText = _arrayL;
    _arrayL.appendChild(Important);
}
*/

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


const marcasd = "Marcas destacadas";
marcasd.innerText = "Compra al mayor a bajo costo";


//InnerHTML

//card1
const p = document.querySelectorAll("metododepago1");
console.log(p);


 
p.innerHTML = `<Marcas Destacadas</h3>
<br>
<p id="p2">Marcas destacadas, con grandes beneficios con productos importados.</p>
<img src="https://cdn.worldvectorlogo.com/logos/la-virginia.svg" alt="" width="200px " height="200px">
<img src="https://s3-symbol-logo.tradingview.com/coca-cola--600.png" alt="" width="200px " height="200px">
<img src="https://www.agritotal.com/files/image/15/15109/561fab8780bb7.jpg" alt="" width="200px " height="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Colgate_logo_red.svg/2560px-Colgate_logo_red.svg.png" alt="" width="200px " height="200px">
<br>
<br>
<p id="p3">Productos al mayor y detal</p>
<br>

<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">
<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">
<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">
<br>
<br>
<p id="p4">Pedi tu envio y lo recibí en tu CASA en pocas horas</p>
<br>


<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">
<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">
<img src="./images/cocacolalight.png" alt="" width="200px " height="200px">`

/** 
const card1 = document.getElementById("card1");
card1.addEventListener("click", () => {
    console.log("Click");
})*/

//card1
card1.innerHTML = `
  
  <div id="card1" class="card1" style="width: 18rem;">
  <img src="https://images.telepizza.com/vol/cl/images/content/productos/pl15_c.png" class="card-img-top" alt="..." width="220px" height="250px" >
  <div class="card-body">
    <h5 class="card-title">Pepsi 2,25lts</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>It is the center of the Greater Tokyo Area,
  and the most populous metropolitan area in the world.</p>
    <p>London is the capital city of England.</p>
    <h3 id="buttonprice1" class="btn btn-primary">Total Price = 220$</h3>
    <button id="button1" class="btn btn-primary">Agregar al carrito</button>
     </div>
   </div>
  </div>

 `

 const button1 = document.getElementById("button1");
 button1.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 1)  ");
})

//card2
card2.innerHTML = `
<div id="card2" class="card2" style="width: 18rem;">

<div class="card-body">
  <h5 class="card-title">Sprite 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice2" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button2" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>`

const button2 = document.getElementById("button2");
 button2.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 2)  ");
})

//card3
card3.innerHTML = `<div id="card3" class="card3" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Coca Cola 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice3" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button3" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>`

const button3 = document.getElementById("button3");
 button3.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 3)  ");
})

//card4

card4.innerHTML= `<div id="card4" class="card4" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Soda Guaraná 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice4" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button4" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>

`

const button4 = document.getElementById("button4");
 button4.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 4) ");
})

const buttonprice4 = document.getElementById("buttonprice4");
buttonprice4.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 4) ");
})

//card5

card5.innerHTML = `<div id="card5" class="card5" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Fanta 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice5" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button5" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>

`

const button5 = document.getElementById("button5");
 button5.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 5)  ");
})

const buttonprice5 = document.getElementById("buttonprice5");
buttonprice5.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 5) ");
})

//card6
card6.innerHTML = 
`
<div id="card6" class="card6" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="200px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Sprite 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice6" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button6" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>
`

const button6 = document.getElementById("button6");
 button6.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 6)  ");
})

const buttonprice6 = document.getElementById("buttonprice6");
buttonprice6.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 6) ");
})

//card7
card7.innerHTML = `<div id="card7" class="card7" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Sprite 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice7" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button7" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>

<br>
<br>
`

const button7 = document.getElementById("button7");
 button7.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 7)  ");
})

const buttonprice7 = document.getElementById("buttonprice7");
buttonprice7.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 7) ");
})

//card8
card8.innerHTML = `<div id="card8" class="card8" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Sprite 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice8" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button8" class="btn btn-primary">Agregar al carrito</button>
   </div>
 </div>
</div>

`

const button8 = document.getElementById("button8");
 button8.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 8)  ");
})

const buttonprice8 = document.getElementById("buttonprice8");
buttonprice8.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 8) ");
})


//card9
card9.innerHTML = `<div id="card9" class="card9" style="width: 18rem;">
<img src="./images/cocacola.png" class="card-img-top" alt="..." width="220px" height="250px" >
<div class="card-body">
  <h5 class="card-title">Sprite 2,25lts</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Tokyo is the capital of Japan.</p>
  <p>It is the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.</p>
  <p>London is the capital city of England.</p>
  <h3 id="buttonprice9" class="btn btn-primary">Total Price = 235$</h3>
  <button id="button9" class="btn btn-primary">Agregar al carrito</button>
  

   </div>
 </div>
</div>

`

const button9 = document.getElementById("button9");
 button9.addEventListener("click" , () => {
 console.log("Haz click para agregar al carrito (boton 9)  ");
})

const buttonprice9 = document.getElementById("buttonprice9");
buttonprice9.addEventListener("click" , () => {
  console.log("El precio de este producto es de 235 (producto 9) ");
})

/*** Button Agregar al Carrito ***/
//const button9 = document.getElementById("button9");

//button9.addEventListener("click", () => {
    console.log("Haz click aquí para agregar al carrito");
//})



Important.innerHTML = `
<div id="Important" class="Important">
<ul>
  <li id="li1">
    <h4 id="h4" >Soporte 24/7</h4>
    <img src="./images/paraside.jpg" alt="" width="100px" height="100px">
    
    <br><br>

  </li>
  <li id="li2">
    <h4>Envio rápidos</h4>
    <img src="./images/paraside.jpg" alt="" width="100px" height="100px">
    
    <br><br>

  </li>
  <li id="li3">
    <h4>Menor costo de envio CLARO QUE SÍ!</h4>
    <br>
    <img src="./images/paraside.jpg" alt="" width="100px" height="100px">
    
</ul>
</div>
<br><br>`


//Classname

//MarcasDestacadas = document.getElementsByClassName = "Marcasdestacadas";
//const p1 = document.createElement("p");

const p1 = document.getElementsByClassName = ("p");

p1.innerText = ("Las marcas destacadas del MOMENTO");




/****/
//p2.innerText = ("Ofreciendo productos de alta calidad");
//p.innerText = ("Ofreciendo productos IMPORTADOS");
const p2 = document.createElement = ("p");
const MarcasDestacadas = document.getElementById = ("p");
p2.appendChild = (p2);
console.log(p2);

/***/


//Marcasdestacadas.getElementById = ("p3");
const p3 = document.createElement = ("p");
p3.innerText = ("Este es un parrafo");
p3.getElementsByClassName = "titulo";
marcasd.appendChild = (p3);
console.log(p3);



/****/


MarcasDestacadas.getElementById = ("p");
const p4 = document.createElement = ("p");

p4.innerText = ("Productos IMPORTADOS Nacionales en un solo LUGAR.");

MarcasDestacadas.appendChild = (p4)
console.log(p4);

/****/

MarcasDestacadas.getElementById = ("p");
const p5 = document.createElement = ("p");
const p6 = document.createElement = ("p");
const p7 = document.createElement = ("p");



p5.innerText = ("Productos IMPORTADOS Nacionales en un solo LUGAR.");
p6.innerText = ("Bebidas Naturales, Gaseosas, Bebidas importadas");
p7.innerText = ("Haz tu compra, desde nuestra página ONLINE tan fácil COMO ES.");
MarcasDestacadas.appendChild = (p5)
MarcasDestacadas.appendChild = (p6)
MarcasDestacadas.appendChild = (p7)
console.log(p5);
console.log(p6);
console.log(p7);



/**Eventos**/


MarcasDestacadas.getElementsByClassName = "Marcasdestacadas";

const p0 = document.createElement = ("p");
p0.innerText = ("Las marcas destacadas del MOMENTO");

console.log(p0);


/**Storage y JSON**/