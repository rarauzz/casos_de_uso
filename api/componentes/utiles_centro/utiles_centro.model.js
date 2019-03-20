'use strict';
const mongoose = require('mongoose');

let schema_utiles_centro= new mongoose.Schema(
    {
        util : {type : String, required : true},
        numero : {type : Number, required: true},
        descripcion : {type: String}
    }
);

module.exports = mongoose.model('Utiles_centro', schema_utiles_centro);