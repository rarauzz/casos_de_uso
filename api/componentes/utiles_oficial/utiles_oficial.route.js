'use strict';
const express = require('express');
const router =  express.Router();
const utiles_oficial_api = require('./utiles_oficial.api');

router.route('/registrar_utiles_oficial')
    .post(
        function(req, res){
            utiles_oficial_api.registrar(req, res);
        }
    );

router.route('/listar_utiles_oficial')
        .get(
            function(req, res){
                utiles_oficial_api.listar_utiles_oficial(req, res);
            }
        )

module.exports = router;