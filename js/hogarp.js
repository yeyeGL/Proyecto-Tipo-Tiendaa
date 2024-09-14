const contenedorTarjetas= document.getElementById("productos-container");
const contenedorTarjetasOFERTA = document.getElementById("container-itemso")

/*Productos disponibles hoy*/
const elementos = [
    {
        id: 1,
        nombre: "Lampara de noche",
        img: "img/ProductosHogar/lampara-de-mesa.png",
        precio: 70000
    },
    {
        id: 2,
        nombre: "Silla puff",
        img: "img/ProductosHogar/puff.png",
        precio: 120000
    },
    {
        id: 3,
        nombre: "Reloj de pared",
        img: "img/ProductosHogar/reloj-pared.png",
        precio: 100000
    },
    {
        id: 4,
        nombre: "Silla reclinable",
        img: "img/ProductosHogar/silla.png",
        precio: 100000
    },
    
    {
        id: 4,
        nombre: "Sala de estar",
        img: "img/ProductosHogar/sala.png",
        precio: 100000
    }
    
   




]

/*PRODUCTOS EN OFERTA*/
const elementoso = [
    {
        id: 1,
        nombre: "Cama",
        img: "img/ProductosHogar/cama.png",
        precio: 100000
    },
    {
        id: 2,
        nombre: "Comedor",
        img: "img/ProductosHogar/comedor.png",
        precio: 100000
    },
    {
        id: 3,
        nombre: "Tapete",
        img: "img/ProductosHogar/tapete.jpg",
        precio: 100000
    }
]

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto =>{
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "item";
        nuevoProducto.innerHTML = `
        <figure>
            <img src=${producto.img}>
        </figure>
        <div class="info-product">
            <h5 style="line-height: 1.5em;">${producto.nombre}</h5>
            <p class="price">$${producto.precio}</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
        `
        contenedorTarjetas.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarAlCarrito(producto))
    });
}

function crearTarjetasProductosOferta(productos){
    productos.forEach(producto =>{
        const nuevoProducto = document.createElement("div");
        
        nuevoProducto.classList = "item";
        nuevoProducto.innerHTML = `
        <figure>
            <img src=${producto.img}>
        </figure>
        <div class="info-product">
            <h5 style="line-height: 1.5em;">${producto.nombre}</h5>
            <p style="color:red; text-decoration-line: line-through;">$390000<p>
            <p class="price">$${producto.precio}</p>
            <button class="btn-add-cart" style="background-color: red; color:white;">Añadir al carrito</button>
        </div>
        `
        contenedorTarjetasOFERTA.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarAlCarrito(producto))
    });
}

crearTarjetasProductosInicio(elementos); 
crearTarjetasProductosOferta(elementoso);   
