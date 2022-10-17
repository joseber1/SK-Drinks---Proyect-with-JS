/**- FETCH **/



//Agregué una simulación de lo visto en clase, usando el método fetch para mostrar info, mediante una API, en este caso de albums de fotos y de 
//productos de consumo diario. y de Cambio de moneda...
//FETCH utilizado (prueba para proyecto final)


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

//API de cambio de Moneda
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
  

 //catch error para ver si hay algún error será encontrado.
 .catch(error => console.error(error));

}, 3000 )

//rutas relactivas aplicado en productos

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

//finally para indicar una acción en el fetch
