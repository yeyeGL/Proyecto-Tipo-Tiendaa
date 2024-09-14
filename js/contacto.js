const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const contenedorFilas = document.getElementById("productos-container");


const expresiones = {
    Nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. Pueden empezar y terminar con un espacio.
    Correo: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, // Correo electrónico válido.
    Tel: /^\d{5,20}$/, // 1 a 20 dígitos.
    Mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos. Pueden empezar y terminar con un espacio.
}

const campos = {
    nombre: false,
    correo: false,
    tel: false,
    mensaje: false,

}




const Validacion = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.Nombre, e.target, 'nombre');
            break;
        case "correo":
            validarCampo(expresiones.Correo, e.target, 'correo');
            break;
        case "tel":
            validarCampo(expresiones.Tel, e.target, 'tel');
            break;
        case "mensaje":
            validarCampo(expresiones.Mensaje, e.target, 'mensaje');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`estado_${campo}`).style.color = "green";
        document.getElementById(`error-message_${campo}`).style.display = "none";
        campos[campo] = true;
    } else {
        document.getElementById(`estado_${campo}`).style.color = "red";
        document.getElementById(`error-message_${campo}`).style.display = "block";
        campos[campo] = false;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', Validacion);
    input.addEventListener('blur', Validacion);
});

const productost = [];

formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    for (const input of inputs) {
        const nombre = input.name;

        productost[nombre] = input.value;
    }

    if (campos.nombre && campos.correo && campos.tel && campos.mensaje) {
        const nuevoP = document.createElement("tr");
        nuevoP.innerHTML = `
		<th scope="row">${productost.nombre}</th>
		<td>${productost.correo}</td>
		<td>${productost.tel}</td>
		<td>${productost.mensaje}</td>
		`
        contenedorFilas.appendChild(nuevoP);
        formulario.reset();
    } else {
        document.getElementById('error-message_form').style.display = "block";
    }

})
