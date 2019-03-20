'use strict';


let registrar_utiles_centro = (putil, pnumero,pdescripcion) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_utiles_centro",
    method: "POST",
    data: {
      util: putil,
      numero: pnumero,
      descripcion: pdescripcion,
      
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Felicidades',
      text: 'Un nuevo útil escolar ha sido registrado. ¿Desea agregar uno más?',
      showCancelButton: true,
      cancelButtonText:"No",
      confirmButtonText: "Si",
      closeOnConfirm: false
    }).then((result) => {
      if (result.value) {
        document.location.href = 'http://localhost:3000/public/registrar_utiles_centro.html'
      } else {
          document.location.href = 'http://localhost:3000/public/listar_utiles_centro.html'
      }
  })
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Este útil escolar no fue registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_utiles_centro = () => {
  let lista_utiles_centro=[];

  let request = $.ajax({
    url: "http://localhost:4000/api/listar_utiles_centro",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_utiles_centro=res.utiles_centro;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });

 return lista_utiles_centro
};