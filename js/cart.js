const contenedorTarjetas = document.getElementById("productos-items");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("elementos"));
    console.log(productos);

    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList = "tarjeta-producto";
            nuevoProducto.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.nombre}</h3>
                <p style="font-weight: bold; font-size: larger;">$${producto.precio}</p>
                <div>
                    <button class="btn btn-dark">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="btn btn-dark">+</button>
                </div>
            `
            contenedorTarjetas.appendChild(nuevoProducto);
            nuevoProducto.getElementsByTagName("button")[1].addEventListener("click", (e) => {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });
            nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                restarAlCarrito(producto);
                crearTarjetasProductosInicio();
                actualizarTotales();
            });
        });
    }

}

crearTarjetasProductosInicio();
actualizarTotales();

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("elementos"));
    let unidades = 0;
    let precio = 0;

    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("elementos"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length > 0);
    totalesElement.classList.toggle("escondido", !(productos && productos.length > 0));

}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito() {
    localStorage.removeItem("elementos");
    revisarMensajeVacio();
    crearTarjetasProductosInicio();
    actualizarTotales();
    actualizarNumeroCarrito();
}

document.getElementById("comprar").addEventListener("click", async () => {
    reiniciarCarrito();
    window.location.href = "./compra-exitosa.html"
   
});