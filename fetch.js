/**- FETCH **/



/**Metodos**/
//GET PARA OBTENER INFORMACIÓN ( O RECURSO ) DEL SERVIDOR. SUELEN SER LAS MÁS UTILIZADA
//POST: PARA ENVIAR INFORMACIÓN AL SERVIDOR PARA CREAR ALGÚN RECURSO.
//PUT: PARA CREAR O MODIFICAR ALGÚN RECURSO EN EL SERVIDOR.
//DELETE: PARA ELIMINAR ALGÚN RECURSO EN EL SERVIDOR:


//FETCH
//JS no ofrece fetch() para hacer peticiones HTTP a algún servicio externo.
//Como estas peticiones son asincrónicas, convenientemente fetch trabaja con promesas.


const apiAlbums = "https://jsonplaceholder.typicode.com/albums";
const contenedorFotos = document.getElementById("contenedorFotos");

fetch(apiAlbums)
.then(respuesta => respuesta.json())
.then((datos) => {
    console.log(datos);
    mostrarFotos(datos);
})

.catch(error => console.log(error))

//Creamos una función que se llame " mostrarFotos" y que reciba como parámetro "datos".

function mostrarFotos(datos) {
    datos.forEach(foto => {
        const img = document.createElement("img");
        img.scr = foto.thumbnailUrl;
        contenedorFotos.appendChild(img);

    });
}


const criptoYa = "https://criptoya.com/api/dolar";
let divDolar = document.getElementById("divDolar");

setInterval ( ()=> {
    fetch(criptoYa)
    .then(response => response.json ())
    .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
    divDolar.innerHTML = 
    `<div class="div-Dolar">
    <h2 class="name" >Tipos de Dolar.</h2>
    <p class="p1" >Dolar Oficial: ${blue}</p>
    <p class="p1" >Dolar Solidario: ${ccb}</p>
    <p class="p1" >Dolar MEP: ${ccl}</p>
    <p class="p1" >Dolar CCL: ${mep}</p>
    <p class="p1" >Dolar Ccb: ${oficial}</p>
    <p class="p1" >Dolar Blue: ${solidario}</p>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, nemo rerum sint repellat quam ipsa hic distinctio asperiores ab eligendi vitae laborum dignissimos doloribus mollitia eveniet quia, laudantium optio.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, nemo rerum sint repellat quam ipsa hic distinctio asperiores ab eligendi vitae laborum dignissimos doloribus mollitia eveniet quia, laudantium optio.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto, nemo rerum sint repellat quam ipsa hic distinctio asperiores ab eligendi vitae laborum dignissimos doloribus mollitia eveniet quia, laudantium optio.</p>
</div>
    `

 })
  

 
 .catch(error => console.error(error));

}, 3000 )



/***Rutas Relactivas */

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