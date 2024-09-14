const contenedorTarjetas= document.getElementById("productos-container");
const contenedorTarjetasOFERTA = document.getElementById("container-itemso")

/*Productos disponibles hoy*/
const elementos = [
   
    {
        id: 1,
        nombre: "Airpods Pro",
        img: "img/ProductosElectronica/airpods-pro.png",
        precio: 1900000
    },
    {
        id: 2,
        nombre: "Pack Estuches Samsung",
        img: "img/ProductosElectronica/Estuchegalaxy.png",
        precio: 500000
    },
    {
        id: 3,
        nombre: "Blackberry",
        img: "img/ProductosElectronica/piedra.png",
        precio: 7000000
    },
    {
        id: 4,
        nombre: "Xiaomi 10",
        img: "img/ProductosElectronica/xioami-10.png",
        precio: 230000
    },
    {
        id: 5,
        nombre: "Diademas Sony",
        img: "img/ProductosElectronica/sonyaudifonos.jpeg",
        precio: 450000
    }
]

/*PRODUCTOS EN OFERTA*/
const elementoso = [
   
    {
        id: 1,
        nombre: "Galaxy 23 Ultra",
        img: "img/ProductosElectronica/galaxy23ultra.png",
        precio: 3500000
    },
    {
        id: 2,
        nombre: "Iphone 15",
        img: "img/ProductosElectronica/iphone15.png",
        precio: 3000000
    },
    {
        id: 3,
        nombre: "Cargador iphone",
        img: "img/ProductosElectronica/cargador-iphone.png",
        precio: 40000
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
