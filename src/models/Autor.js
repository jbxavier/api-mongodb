const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String},
        endereco: {type: mongoose.Schema.Types.ObjectId, ref: 'endereco'}
    },
    {
        versionKey: false
    }    
)

const autores = mongoose.model('autores', autorSchema);

module.exports = autores;