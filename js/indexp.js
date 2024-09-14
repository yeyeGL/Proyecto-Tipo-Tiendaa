const contenedorTarjetas= document.getElementById("productos-container");
const contenedorTarjetasOFERTA = document.getElementById("container-itemso")

const elementos = [
    {
        id: 1,
        nombre: "Lenovo tab12",
        img: "img/ProductosCompTablets/lenovo-tab-p12.png",
        precio: 1900000
    },
    {
        id: 2,
        nombre: "Ideapad 5",
        img: "img/ProductosCompTablets/ideapad-5.png",
        precio: 3200000
    },
    {
        id: 3,
        nombre: "Tablet Samsung",
        img: "img/ProductosCompTablets/tabletsamsung.png",
        precio: 1000000
    },
    {
        id: 4,
        nombre: "Computador Gaming",
        img: "img/ProductosCompTablets/compugaming.png",
        precio: 1200000
    },
    {
        id: 5,
        nombre: "Portatil Apple",
        img: "img/ProductosCompTablets/portatilapple.png",
        precio: 2400000
    },
    {
        id: 6,
        nombre: "Tablet Huawei",
        img: "img/ProductosCompTablets/tablethuawei.png",
        precio: 300000
    },
    {
        id: 7,
        nombre: "Lampara de noche",
        img: "img/ProductosHogar/lampara-de-mesa.png",
        precio: 70000
    },
    {
        id: 8,
        nombre: "Silla puff",
        img: "img/ProductosHogar/puff.png",
        precio: 120000
    },
    {
        id: 9,
        nombre: "Reloj de pared",
        img: "img/ProductosHogar/reloj-pared.png",
        precio: 100000
    },
    {
        id: 10,
        nombre: "Silla reclinable",
        img: "img/ProductosHogar/silla.png",
        precio: 100000
    },
     
    {
        id: 11,
        nombre: "Airpods Pro",
        img: "img/ProductosElectronica/airpods-pro.png",
        precio: 1900000
    },
    {
        id: 12,
        nombre: "Pack Estuches Samsung",
        img: "img/ProductosElectronica/Estuchegalaxy.png",
        precio: 500000
    },
    {
        id: 13,
        nombre: "Blackberry",
        img: "img/ProductosElectronica/piedra.png",
        precio: 7000000
    },
    {
        id: 14,
        nombre: "Xiaomi 10",
        img: "img/ProductosElectronica/xioami-10.png",
        precio: 230000
    },
    {
        id: 15,
        nombre: "Diademas Sony",
        img: "img/ProductosElectronica/sonyaudifonos.jpeg",
        precio: 450000
    },
    {
        id: 16,
        nombre: "Balón de baloncesto",
        img: "img/ProductosDeportes/balon-baloncesto-oficial.png",
        precio: 30000
    },
    {
        id: 17,
        nombre: "Balón de futbol",
        img: "img/ProductosDeportes/balon-futbol.png",
        precio: 20000
    },
    {
        id: 18,
        nombre: "Camiseta de Messi",
        img: "img/ProductosDeportes/camisathegoat.png",
        precio: 1000000
    },
    {
        id: 19,
        nombre: "Raqueta de Tenis de Mesa",
        img: "img/ProductosDeportes/raqueta-ping-pong.png",
        precio: 125000
    },
    {
        id: 20,
        nombre: "Cuerda de saltar",
        img: "img/ProductosDeportes/cuerda-saltar.png",
        precio: 12000
    },
    
]

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
