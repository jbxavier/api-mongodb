const enderecos = require('../models/Endereco.js');

class EnderecoController {

    static listarEnderecos = (req, res) => {
        // ainda não estamos tratando o erro caso ocorra...
        enderecos.find((err, enderecos) => { 
            res.status(200).json(enderecos);
        })
    }

    static buscarEnderecoPeloCEP = (req, res) => {
        const cep = req.query.cep;

        enderecos.find({'cep': cep}, {}, (err, enderecos) => {
            if (err) {
                res.status(400).send({menssage: `${err.message} - CEP não localizado`})
            } else {
                res.status(200).send(enderecos);
            }
        })    
    }

    static cadastrarEndereco = (req, res) => {
        let endereco = new enderecos(req.body);
        endereco.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar endereco.`})
            } else {
                res.status(201).send(endereco.toJSON()) // converte endereco p JSON e manda a resposta
            }
        })
    }

    static atualizarEndereco = (req, res) => {
        const id = req.params.id;

        enderecos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({menssage: 'Endereco atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarEnderecoPorID = (req, res) => {
        const id = req.params.id;

        enderecos.findById(id, (err, enderecos) => {
            if (err) {
                res.status(400).send({menssage: `${err.message} - Id do endereco não localizado`})
            } else {
                res.status(200).send(enderecos);
            }
        })
    }

    static excluirEndereco = (req, res) => {
        const id = req.params.id;

        enderecos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Endereco removido com sucesso'})
            } else {
                res.status(500).send({menssage: err.menssage})
            }
        })
    }



}

module.exports = EnderecoController;