
const contenedorTarjetasOFERTA = document.getElementById("container-itemso");


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
    },
    {
        id: 3,
        nombre: "Raqueta Tenis",
        img: "img/ProductosDeportes/raqueta-tenis.png",
        precio: 45000
    },
    {
        id: 4,
        nombre: "Patines",
        img: "img/ProductosDeportes/patines.png",
        precio: 320000
    },
    {
        id: 5,
        nombre: "Guayos Adidas X",
        img: "img/ProductosDeportes/guayos.png",
        precio: 120000
    },
    {
        id: 6,
        nombre: "Galaxy 23 Ultra",
        img: "img/ProductosElectronica/galaxy23ultra.png",
        precio: 3500000
    },
    {
        id: 7,
        nombre: "Iphone 15",
        img: "img/ProductosElectronica/iphone15.png",
        precio: 3000000
    },
    {
        id: 8,
        nombre: "Cargador iphone",
        img: "img/ProductosElectronica/cargador-iphone.png",
        precio: 40000
    },
    {
        id: 9,
        nombre: "Cama",
        img: "img/ProductosHogar/cama.png",
        precio: 100000
    },
    {
        id: 10,
        nombre: "Comedor",
        img: "img/ProductosHogar/comedor.png",
        precio: 100000
    },
    {
        id: 11,
        nombre: "Tapete",
        img: "img/ProductosHogar/tapete.jpg",
        precio: 100000
    },
    {
        id: 12,
        nombre: "Sala de estar",
        img: "img/ProductosHogar/sala.png",
        precio: 100000
    }

   
]



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


crearTarjetasProductosOferta(elementoso);   
