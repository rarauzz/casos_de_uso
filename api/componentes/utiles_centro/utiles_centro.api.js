'use strict';
const model_utiles_centro = require('./utiles_centro.model');

module.exports.registrar = (req, res) => {
    let util_centro_nuevo = new model_utiles_centro(
        {
            util: req.body.util,
            numero: req.body.numero,
            descripcion: req.body.descripcion
        }
    );
    util_centro_nuevo.save(
        function (error) {
            if (error) {
                res.json(
                    {
                        success: false,
                        msg: `No se pudo guardar este útil escolar ocurrió el siguiente error ${error}`
                    }
                )
            } else {
                res.json(
                    {
                        success: true,
                        msg: `Nueva  útil escolar ha sido registraddo con exito`
                    }
                )
            }
        }
    );
}; 
module.exports.listar_utiles_centro = (req ,res) =>{
    model_utiles_centro.find().then(
        function(utiles_centro){
            if(utiles_centro.length > 0){
                res.json(
                    {
                        success: true,
                        utiles_centro: utiles_centro
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles_centro: 'No se encontraron utiles escolares'
                    }
                )
            }
        }

    )
};