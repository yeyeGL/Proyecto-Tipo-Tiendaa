const contenedorTarjetas= document.getElementById("productos-container");
const contenedorTarjetasOFERTA = document.getElementById("container-itemso")

/*Productos disponibles hoy*/
const elementos = [
    {
        id: 1,
        nombre: "Lenovo tab12",
        img: "img/ProductosCompTablets/lenovo-tab-p12.png",
        precio: 1900000
    },
    {
        id: 2,
        nombre: "Tablet Samsung",
        img: "img/ProductosCompTablets/tabletsamsung.png",
        precio: 1000000
    },
    {
        id: 3,
        nombre: "Computador Gaming",
        img: "img/ProductosCompTablets/compugaming.png",
        precio: 1200000
    },
    {
        id: 4,
        nombre: "Portatil Apple",
        img: "img/ProductosCompTablets/portatilapple.png",
        precio: 2400000
    },
    {
        id: 5,
        nombre: "Tablet Huawei",
        img: "img/ProductosCompTablets/tablethuawei.png",
        precio: 300000
    }



]

/*PRODUCTOS EN OFERTA*/
const elementoso = [
    {
        id: 1,
        nombre: "Asus 14",
        img: "img/ProductosCompTablets/asus14.png",
        precio: 2000000
    },

    {
        id: 2,
        nombre: "Lenovo tab12",
        img: "img/ProductosCompTablets/lenovo-tab-p12.png",
        precio: 1900000
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
