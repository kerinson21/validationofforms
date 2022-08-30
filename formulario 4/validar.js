const validarvalor = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    numero: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/,
    cvc: /^\d{3}$/
}//objeto que guarda las expesiones regulares para validar

const formulario = document.getElementById('formulario');//guardo el formulario en una variable
const inputs  = document.querySelectorAll('#formulario input, select');//con esto accedemos a las etiquetas


const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
            validar(validarvalor.nombre, e.target, e.target.name);
		break;
        case 'numero':
            validar(validarvalor.numero, e.target, e.target.name);
		break;
        case 'cvc':
            validar(validarvalor.cvc, e.target, e.target.name);
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