const cuentaCarritoElement = document.getElementById("cuenta-carrito");
let cuenta = 0;

function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("elementos"));
    console.log(memoria);

    if(!memoria){
        const nuevoProducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("elementos", JSON.stringify([nuevoProducto]));
        cuenta = 1;
    }else{
        const indiceProducto = memoria.findIndex(elemento => elemento.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        }else{
            nuevaMemoria[indiceProducto].cantidad++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        
        localStorage.setItem("elementos", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("elementos"));
    const indiceProducto = memoria.findIndex(elemento => elemento.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto, 1);
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("elementos", JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

/*Toma un producto, le agrega cantidad 1 y lo devuelve*/
function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("elementos"));
    if(memoria && memoria.length>0){
        const cuenta = memoria.reduce((acum, current) =>acum+current.cantidad,0);
        cuentaCarritoElement.innerText = cuenta;
    }else{
        cuentaCarritoElement.innerText = 0;
    }
    
}

async function comprarCarrito(){
    const carrito = JSON.parse(localStorage.getItem("elementos"));
    if(carrito && carrito.length > 0){
        localStorage.removeItem("elementos")
    }else{
        return false;
    }
}

actualizarNumeroCarrito();