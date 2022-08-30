const validarvalor = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono:  /^\d{8,11}$/,
    nit: /^\d{10}$/,
    fechallegada: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
    fechasalida: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
}//objeto que guarda las expesiones regulares para validar

const formulario = document.getElementById('formulario');//guardo el formulario en una variable
const inputs  = document.querySelectorAll('#formulario input, select');//con esto accedemos a las etiquetas


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
        case 'nit':
            validar(validarvalor.nit, e.target, e.target.name);
		break;
        case 'fechallegada':
            validar(validarvalor.fechallegada, e.target, e.target.name);
		break;
        case 'fechasalida':
            validar(validarvalor.fechasalida, e.target, e.target.name);
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


inputs.forEach((input)=> {
    input.addEventListener('keyup',validarFormulario);//cuando se terminada de teclear
    input.addEventListener('blur',validarFormulario);//cuando se da click fuera del formulario

}); 

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();//evita enviar los datos
});