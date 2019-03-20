'use strict';

const tabla_centro = document.querySelector('#tbl_utiles_centro tbody');

let mostrar_utiles_centro = () => {
    let util_centro = listar_utiles_centro();


    for (let i = 0; i < util_centro.length; i++) {
        let fila = tabla_centro.insertRow();

        let boton_mod = document.createElement("button");
        let txt_boton_mod = document.createTextNode("Modificar");
        boton_mod.appendChild(txt_boton_mod);

        let boton_el = document.createElement("button");
        let txt_boton_el = document.createTextNode("Eliminar");
        boton_el.appendChild(txt_boton_el);

        fila.insertCell().innerHTML = util_centro[i]['util'];
        fila.insertCell().innerHTML = util_centro[i]['numero'];
        fila.insertCell().innerHTML = util_centro[i]['descripcion'];
        fila.insertCell().innerHTML = util_centro[i][boton_mod];
        fila.insertCell().innerHTML = util_centro[i][boton_el];

    }
};

mostrar_utiles_centro();
