const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const contenedorFilas = document.getElementById("productos-container");


const expresiones = {
	ID: /^\d{1,200}$/, // 1 a 14 numeros.
	Descripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Cantidad: /^\d{1,200}$/, // 1 a 14 numeros.
	Valor: /^\d{3,200}$/, // 3 a 14 numeros.
}

const campos = {
	id: false,
	descripcion: false,
	categoria: false,
	cantidad: false,
	valor: false,
	fecha: false
}




const Validacion = (e) => {
	switch (e.target.name) {
		case "id":
			validarCampo(expresiones.ID, e.target, 'id');
			break;
		case "descripcion":
			validarCampo(expresiones.Descripcion, e.target, 'descripcion');
			break;
		case "cantidad":
			validarCampo(expresiones.Cantidad, e.target, 'cantidad');
			break;
		case "valor":
			validarCampo(expresiones.Valor, e.target, 'valor');
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

	const valorSel = document.getElementById("categoria")
	const categoriap = valorSel.value;

	if (categoriap) {
		document.getElementById(`estado_categoria`).style.color = "green";
		document.getElementById(`error-message_categoria`).style.display = "none";
		campos['categoria'] = true;
	} else {
		document.getElementById(`estado_categoria`).style.color = "red";
		document.getElementById(`error-message_categoria`).style.display = "block";
		campos['categoria'] = false;
	}

	const fechaSel = document.getElementById("fecha");
	const fechap = fechaSel.value;

	if (fechap) {
		document.getElementById(`estado_fecha`).style.color = "green";
		campos['fecha'] = true;
	} else {
		document.getElementById(`estado_fecha`).style.color = "red";
		campos['fecha'] = false;
	}


	for (const input of inputs) {
		const nombre = input.name;

		productost[nombre] = input.value;
	}

	if (campos.id && campos.descripcion && campos.categoria && campos.cantidad && campos.valor && campos.fecha) {
		const nuevoP = document.createElement("tr");
		nuevoP.innerHTML = `
		<th scope="row">${productost.id}</th>
		<td>${productost.descripcion}</td>
		<td>${categoriap}</td>
		<td>${productost.cantidad}</td>
		<td>${productost.valor}</td>
		<td>${fechap}</td>
		`
		contenedorFilas.appendChild(nuevoP);
		formulario.reset();
	} else {
		document.getElementById('error-message_form').style.display = "block";
	}
})

