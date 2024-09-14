const contenedorTarjetas= document.getElementById("productos-container");
const contenedorTarjetasOFERTA = document.getElementById("container-itemso")

/*Productos disponibles hoy*/
const elementos = [
   
    {
        id: 1,
        nombre: "Balón de baloncesto",
        img: "img/ProductosDeportes/balon-baloncesto-oficial.png",
        precio: 30000
    },
    {
        id: 2,
        nombre: "Balón de futbol",
        img: "img/ProductosDeportes/balon-futbol.png",
        precio: 20000
    },
    {
        id: 3,
        nombre: "Camiseta de Messi",
        img: "img/ProductosDeportes/camisathegoat.png",
        precio: 1000000
    },
    {
        id: 4,
        nombre: "Raqueta de Tenis de Mesa",
        img: "img/ProductosDeportes/raqueta-ping-pong.png",
        precio: 125000
    },
    {
        id: 5,
        nombre: "Cuerda de saltar",
        img: "img/ProductosDeportes/cuerda-saltar.png",
        precio: 12000
    },
]

/*PRODUCTOS EN OFERTA*/
const elementoso = [

    {
        id: 1,
        nombre: "Raqueta Tenis",
        img: "img/ProductosDeportes/raqueta-tenis.png",
        precio: 45000
    },
    {
        id: 2,
        nombre: "Patines",
        img: "img/ProductosDeportes/patines.png",
        precio: 320000
    },
    {
        id: 3,
        nombre: "Guayos Adidas X",
        img: "img/ProductosDeportes/guayos.png",
        precio: 120000
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
