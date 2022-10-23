

//CARD del CARRITO
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



const productos = [producto1, producto2, producto3, producto4, producto5, producto6];

//Productos modificando el DOM. 

const contenedorProductos = document.getElementById("contenedorProductos");

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("card","col-xl-3", "col-md-6", "col-sm-12");
    divProducto.innerHTML = `
                            <div>
                                <img src="img/${producto.id}.png" class="card-img-top img-fluid py-3">
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

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
    }
    actualizarCarrito();
}
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
}


///Función para vaciar todo el carrito por completo: 

const vaciarCarrito = document.getElementById("vaciarCarrito");


vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();

    Swal.fire(
        'Estás seguro?',
        'Estás seguro que quieres eliminar el producto?',
        'question'
      )

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
