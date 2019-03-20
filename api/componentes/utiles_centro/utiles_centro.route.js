'use strict';
const express = require('express');
const router =  express.Router();
const utiles_centro_api = require('./utiles_centro.api');

router.route('/registrar_utiles_centro')
    .post(
        function(req, res){
            utiles_centro_api.registrar(req, res);
        }
    );

router.route('/listar_utiles_centro')
        .get(
            function(req, res){
                utiles_centro_api.listar_utiles_centro(req, res);
            }
        )

module.exports = router;