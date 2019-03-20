'use strict';
const model_utiles_oficial = require('./utiles_oficial.model');

module.exports.registrar = (req, res) => {
    let util_oficial_nuevo = new model_utiles_oficial(
        {
            util: req.body.util,
            numero: req.body.numero,
            descripcion: req.body.descripcion
        }
    );
    util_oficial_nuevo.save(
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
module.exports.listar_utiles_oficial = (req ,res) =>{
    model_utiles_oficial.find().then(
        function(utiles_oficial){
            if(utiles_oficial.length > 0){
                res.json(
                    {
                        success: true,
                        utiles_oficial: utiles_oficial
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles_oficial: 'No se encontraron utiles escolares'
                    }
                )
            }
        }

    )
};