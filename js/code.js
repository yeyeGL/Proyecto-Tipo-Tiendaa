const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


//Cuando se presiona el boton del formulario1
document.getElementById("btnsiguiente").addEventListener("click", function (event) {
	//Oculta el formulario1
	document.getElementById("parte1").style.display = "none";
	document.getElementById("parte2").style.display = "block";
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	Nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	Telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	Password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	nombres: false,
	apellidos: false,
	correo: false,
	telefono: false,
	usuario: false,
	password: false,
}

const Validacion = (e) => {
	switch (e.target.name) {
		case "nombres":
			validarCampo(expresiones.Nombres, e.target, 'nombres');
			break;
		case "apellidos":
			validarCampo(expresiones.Apellidos, e.target, 'apellidos');
			break;
		case "correo":
			validarCampo(expresiones.Correo, e.target, 'correo');
			break;
		case "telefono":
			validarCampo(expresiones.Telefono, e.target, 'telefono');
			break;
		case "usuario":
			validarCampo(expresiones.Usuario, e.target, 'usuario');
			break;
		case "clave":
			validarClaves();
			break;
			case "clave2":
			validarClaves();
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

const validarClaves = () =>{
	const pass1 = document.getElementById('clave');
	const pass2 = document.getElementById('clave2');
	if(pass1.value !== pass2.value){
		document.getElementById('estado_clave').style.color = "red";
		document.getElementById('error-message_clave').style.display = "block";
		campos['password'] = false;
	}else{
		document.getElementById('estado_clave').style.color = "green";
		document.getElementById('estado_clave2').style.color = "green";
		document.getElementById('error-message_clave').style.display = "none";
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', Validacion);
	input.addEventListener('blur', Validacion);
});



formulario.addEventListener('submit', (e)=>{
	e.preventDefault();

	if(campos.usuario && campos.telefono && campos.password && campos.nombres && campos.apellidos && campos.correo){
		for(const input of inputs){
			const nombre = input.name;

			usuarios[nombre] = input.value;
		}
		formulario.reset();
		window.location.href = "./registro-exitoso.html"
	}else{
		document.getElementById('error-message_form').style.display = "block";
	}

})

const formularioL = document.getElementById('formlogin');
const inputsL = document.querySelectorAll('#formlogin input');

formularioL.addEventListener('submit', (e)=>{
	e.preventDefault();

	const user = document.getElementById('usuariologin');
	const pass = document.getElementById('passlogin');

	usuarios.forEach(usuariol=>{
		console.log(usuariol.usuario)
		if((usuariol.usuario === user.value) && (usuariol.clave === pass.value)){
			window.location.href = "./admin.html"
		}else{
			console.log("ERROR")
		}
	})
})