//Operador SPREAD
const arrayN1 = [3,4,5,6,7];
console.log(arrayN1);


console.log(...arrayN1);


let Mayor = Math.max(4,3,2,1);
console.log("Mayor que el resultado mayor" + Mayor);

//Con Array

let rmayorArray2 = Math.max(arrayN1);
console.log("Mayor que el resultado mayor" + rmayorArray2);


let rmayorArray3 = Math.max(arrayN1);
console.log("El mayor que es el :" + rmayorArray3 );

//Array dentro de otro array//

let arrayN2 = [2,3,4,9,12];
let arrayN3 = [...arrayN1, ...arrayN2];
console.log(arrayN3);


//Desparramar datos en Objecto

let ObjectoN ={
    ...arrayN1,
...arrayN2
};

console.log(ObjectoN);


const persona1 = {
    nombre: "Jose",
    edad: 22,
    profesion: "Web Developer Junior"
}

/**CAMBIO DE DATOS **/

console.log(persona1);

const persona2 = {
    ...persona1, nombre: "José"
};

const total = "Precio total es de"
const persona3 =  {
    fideos : 200,
    arroz: 200,
    enltatado: 150,
    tomate : 150 + "1/5",
    cebolla : 200 + "1/8",
    total : 750  + "Precio total es de " + total
};

console.log(persona3);


const persona4 = {...persona1, nombre: "John", pais: "Dinamarca" ,edad:30};
console.log(persona4);


/**Librerias JS **/

//Sweet Alert


const botonW = document.getElementById("botonW");
botonW.addEventListener("click", () => {
    Swal.fire("Bienvenidos")
});

const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", () => {
    Swal.fire("Producto comprado" + ( "Se agregó al carrito" ))
});



const boton2 = document.getElementById("boton2");

boton2.addEventListener("click", () => {
    Swal.fire({
     title:"Compra",
     text: "Esta es una compra",
     icon: "success",
     imageUrl: "https://pixabay.com/es/photos/supermercado-puestos-refrigeradores-949913/",
     background:"#F4D03F",
     backdrop:"#34495E",
     confirmButtonText: "Aceptar"
    })
});


const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", () => {

    let carrito = ["coca Cola", "sprite","soda guarana"];




}).then((result) => {
    if (result.isConfirmed) {
        
        carrito = carrito.filter((producto) => producto !== "coca cola");
        console.log(carrito);
        Swal.fire({
            title: "Producto eliminado",
            icon: "success",
            background: "#FDEBD0",
            backdrop: "#B7950B",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#B7950B",
        });
    }
});





let i = 4;
i = i + 1;
i = i + 4;
console.log(i);



i += 1;
i++;



let aux = 0;
while(aux  < 5){
    console.log(aux);
    aux++;
}



//Operador Ternarios IF ,ELSE
let Producto = 18;
if(Producto >= 18,20){
    console.log("Precio correcto");
}else {
    console.log("Precio incorrecto, precio real es 18");
}


Producto >= 18 ? console.log("Precio correcto (18)") : console.log("Precio incorrecto (19) Precio real  es (19) ");


let Permiso = Producto >= 18 ? true : false;
console.log(Permiso, typeof Permiso);

let car;
let granos = 100 ;
let uvas = 200;
let jugo = 325
car = [100 , 200, 325];

let primerProducto = false,
segundoProducto = false,
acceso = primerProducto
? "Acceso Denegado" : segundoProducto ?  "Acceso Denegado" : "Acceso Permitido";

console.log(   acceso );


localStorage.setItem("car", JSON.stringify(car));


car = localStorage.getItem("car") ? JSON.parse(localStorage.getItem("car")) : [];
console.log(car);

// OPERADOR LÓGICO && AND

let nombreCliente = "Jose";

nombreCliente === "Jose" && alert("Bienvenido Jose");

car = [];
car.length === 0&& console.log("El carro esta vacío (Agregá PRODUCTOS :D)");


function tercerProducto(valor) {
    return valor % 2 == 0 ? true : false;
}



car = [2];
car.length === 0&& console.log("El carro esta LLENO (:D)");
//carrito lleno :D


//Operador Lógico || OR

let nombrec = prompt("Ingrese su nombre");
console.log(nombrec || "Haz ingresado mal el nombre");



let Compra = prompt("Ingrese su productos COMPRADOS");
console.log(Compra || "Productos nos encontrados en la BASE de Datos");


//const Cl = null;
console.log("Acceso Condicional")
console.log(nombrec.mohammed || "Usuario no encontrado (Ingrese un nombre correctamente)");


console.log(nombrec?.nombre || "Usuario no encontrado");


let Compra2 = prompt("Ingrese su productos COMPRADOS");
console.log(Compra2?.compra || "Productos nos encontrados en la BASE de Datos")


//Desestructuración de Objectos

const clienteUno = {
    nombre: "John",
    apellido: "Miller",
    edad: "30",
    montodeCompra: 25000
};


let {nombre, apellido, edad, montocompra:montodeCompra} = "Monton de Compra 25000" + clienteUno;
console.log(nombre, apellido, edad, montodeCompra)



const clienteDos = {
    nombre2: "Jose",
    apellido2: "Sánchez",
    edad2: "20",
    montodeCompra2: 3000
};



let {nombre2, apellido2, edad2, montodeCompra2:montodeCompraDos} = "Monton de Compra 3000" + clienteUno;
console.log(nombre2, apellido2, edad2, montodeCompraDos);


const clienteTres = {
    nombre3: "Luís",
    apellido3: "López",
    edad3: "40",
    montodeCompra3: 35000
};



let {nombre3, apellido3, edad3, montodeCompra2:montodeCompraTres} = "Monton de Compra 3000" + clienteUno;
console.log(nombre3, apellido3, edad3, montodeCompraTres);



let cliente1 = " John ";
let montodeCompra1 = 100;
let mensaje1 = cliente1 + "Compra realizada de $:" + montodeCompra1;
console.log(mensaje1)
console.log(Compra2?.compra || "Compra no realizada no encontrados en la BASE de Datos")


//Spread - array
const nombres = ["Arroz", "Fideos", "Pizza", "Enlatados", "Hortalizas", "Chucherias"]
console.log(...nombres)


//Spread equivalente a:

console.log("Arroz", "Fideos", "Pizza", "Enlatados", "Hortalizas", "Chucherias")


//Spread con dos array dentro de otro
const Enlatados = ["Atun", "Sardina en Aceite Oliva", "Salami"]
const granosEnlatados = ["Caraota", "Frijoles", "Arvejas","Garbanzos", "Palmitos"]
const nombresD = [...Enlatados, ...granosEnlatados]


console.log(nombresD);

//Spread array en un objecto

const Objecto = {
    ...Enlatados
}

console.log(Objecto);


//Spread Objecto

const ClienteVIP = {
    nombre: "Mr John",
    edad: 70,
    compra: "Respuestos de Coche",
    montodeCompra: 20000
}


const clienteObjecto = {
...ClienteVIP
}

console.log(clienteObjecto);

const PagoUno = {
    ...ClienteVIP,
    compra: "Respuestos de Coche",
    email: "john@gmail.com"
}

console.log(PagoUno)
