//Sistema de reservas de compras
class Compra {
    constructor(nombreCliente, apellidoCliente, numeroProducto,compra ) {
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.numeroProducto = numeroProducto;
        this.compra = compra;
    }
}

const compras= []; 

 

  
/*****************************/
//Si el LocalStorage tiene datos, los agrego al Array de Reservas. 

if(localStorage.getItem("compras")) {
    let compra = JSON.parse(localStorage.getItem("compras"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < compras.length; i++ ) {
        compras.push(compra[i]);
    
    }
}

/*****************************/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarCompra();
})

function agregarCompra() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const compra = document.getElementById("compra").value;
    const lista = document.getElementById("lista").value;
    const nuevaCompra = new Compra(nombre, apellido, compra, lista);
    compras.push(nuevaCompra);
    //Agrego al LocalStorage:
    localStorage.setItem("compras", JSON.stringify(compras));
    formulario.reset();
}

const contenedorCompras = document.getElementById("contenedorCompras");

const verCompras = document.getElementById("verCompras");

verCompras.addEventListener("click", () => {
    
    mostrarCompras();

});


function mostrarCompras() {
    contenedorCompras.innerHTML = "";
    compras.forEach( compra => {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div>
                            <p>Nombre del Cliente: ${compra.nombreCliente}</p>
                            <p>Apellido del Cliente: ${compra.apellidoCliente}</p>
                            <p>Número de producto: ${compra.numeroProducto}</p>
                            <p>Compra: ${compra.compra}</p>
                        </div>
        
                        `;
        contenedorCompras.appendChild(div);
    })
}