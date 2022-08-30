const validarvalor = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:  /^\d{8,11}$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    password2: /^.{4,12}$/, // 4 a 12 digitos.
    nit: /^\d{10}$/,
    alergias: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    edad:/^\d{1,2}$/
}//objeto que guarda las expesiones regulares para validar

const formulario = document.getElementById('formulario');//guardo el formulario en una variable
const inputs  = document.querySelectorAll('#formulario input');//con esto accedemos a las etiquetas


const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
            validar(validarvalor.nombre, e.target, e.target.name);
		break;
        case 'correo':
            validar(validarvalor.correo, e.target, e.target.name);
		break;
        case 'telefono':
            validar(validarvalor.telefono, e.target, e.target.name);
		break;
        case 'edad':
            validar(validarvalor.edad, e.target, e.target.name);
		break;
        case 'nit':
            validar(validarvalor.nit, e.target, e.target.name);
		break;
        case 'alergias':
            validar(validarvalor.alergias, e.target, e.target.name);
		break;
        case 'password':
            validar(validarvalor.password, e.target, e.target.name);
		break;
        case 'password2':
            validar(validarvalor.password2, e.target, e.target.name);
            validarPasswrod2();
		break;
	}
}

const validar = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove('error');
        document.getElementById(`error${campo}`).classList.add('d-none');
        
    }else {
        document.getElementById(campo).classList.add('error');
        document.getElementById(`error${campo}`).classList.remove('d-none');
    }
    if(input.value === ''){
        document.getElementById(campo).classList.remove('error');
        document.getElementById(`error${campo}`).classList.add('d-none');
    }
}

const validarPasswrod2 = ()=>{
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');
    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById('error_password').classList.remove('d-none');
        document.getElementById('password2').classList.add('error');
    }else{
        document.getElementById('error_password').classList.add('d-none');
        document.getElementById('password2').classList.remove('error');
    
    }
    
}

inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFormulario);//cuando se terminada de teclear
    input.addEventListener('blur',validarFormulario);//cuando se da click fuera del formulario

}); 

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();//evita enviar los datos
});