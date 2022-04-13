const autores = require('../models/Autor.js');

class AutorController {

    static listarAutores = (req, res) => {
        // ainda não estamos tratando o erro caso ocorra...
        autores.find((err, autores) => { 
            res.status(200).json(autores);
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON()) // converte autor p JSON e manda a resposta
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({menssage: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarAutorPorID = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({menssage: `${err.message} - Id do autor não localizado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Autor removido com sucesso'})
            } else {
                res.status(500).send({menssage: err.menssage})
            }
        })
    }



}

module.exports = AutorController;