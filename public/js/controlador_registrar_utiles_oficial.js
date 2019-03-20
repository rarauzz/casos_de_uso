'use strict';
const input_util = document.querySelector('#txt_util_oficial');
const input_numero = document.querySelector('#txt_numero_utiles_oficial');
const input_descripcion = document.querySelector('#txt_descripcion_utiles_oficial');
const boton_registrar = document.querySelector('#btn_registrar');

let validar = () => {
    let error = false;

    if (input_util.value == '') {
        error = true;
        input_util.classList.add('error_input');
    } else {
        input_util.classList.remove('error_input');
    }
    if (input_numero.value == ''||input_numero.value <=0) {
        error = true;
        input_numero.classList.add('error_input');
    } else {
        input_numero.classList.remove('error_input');
    }
    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let util = input_util.value;
        let numero = input_numero.value;
        let descripcion = input_descripcion.value;

        registrar_utiles_oficial(util, numero, descripcion);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'Este útil escolar no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};



boton_registrar.addEventListener('click', obtener_datos);