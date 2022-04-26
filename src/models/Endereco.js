const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        rua: {type: String, required: true},
        numero: {type: Number},
        cep: {type: String},
        cidade: {type: String},
        complemento: {type: String}
    },
    {
        versionKey: false
    }    
)

const endereco = mongoose.model('endereco', autorSchema);

module.exports = endereco;