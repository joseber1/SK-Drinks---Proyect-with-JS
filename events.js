/**EVENTS**/

//button1
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
console.log("Click 1 seleccionado");
})

/**Utilizando dos eventos en un objecto (button1) con el efecto */
//button2
const button2 = document.getElementById("button2");

button1.onclick = () => {
    alert("Click 2 seleccionado ");
}
//button3
function jsEnHTML(){
console.log("JS EN HTML")
}

//button4

let button4 = document.getElementById("button4")
button4.onclick = () => {
    console.log("click")
}


button4.onmove = () => {
    console.log("move it")
}


const mouse = document.getElementById("mouse");

mouse.onmousedown = () => {
    console.log("Hiciste click");
}



mouse.onmouseover = () =>{
    console.log(mouse);
}



mouse.onmousemove = () => {
    console.log("Se dectectó el mouse")
}




mouse.onclick = () =>{
    console.log("Click en el cuadro")
}

//Evento Teclado



const texthere = document.getElementById("texthere");
texthere.onkeydown = () =>{
    console.log("Click presionado (keydown");
}



texthere.onkeyup = () => {
    console.log("Soltó una tecla (keyup)");
}


const text = document.getElementById("text");
   
text.addEventListener("change it ", () => {
    console.log("Has escrito texto (change)");
});


text.addEventListener("input", () => {
console.log(text.value)
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit" , (m) => {
    m.preventDefault();
console.log("Formulario enviado");


const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
console.log("Nombre ingresado es") + nombre.value;
console.log("El Apellido ingresado es") + apellido.value;
formulario.reset();

});


class Client{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
 }
    }

    const arrayClientes = [];

 
const formulario2 = document.getElementById("formulario2");

formulario2.addEventListener("submit" , (m) =>{
m.preventDefault();

const nombre = document.getElementById("forNombre");
const apellido = document.getElementById("forApellido");
const edad = document.getElementById("forEdad");
const cliente = new Cliente(nombre.value, apellido.value, edad.value);
arrayClientes.push(cliente);
console.log(arrayClientes);
formulario2.reset();
})












