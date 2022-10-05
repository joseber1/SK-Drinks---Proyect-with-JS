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