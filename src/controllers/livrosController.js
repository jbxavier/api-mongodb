const livros = require('../models/Livro.js');

class LivroController {

    static listarLivros = (req, res) => {
        // ainda não estamos tratando o erro caso ocorra...
        livros.find()
            .populate('autor')
            .exec((err, livros) => { 
            res.status(200).json(livros);
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON()) // converte livro p JSON e manda a resposta
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({menssage: 'Livro atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivroPorID = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome') // mostra só o nome, nacionalidade não nessa consulta
            .exec((err, livros) => {
            if (err) {
                res.status(400).send({menssage: `${err.message} - Id do livro não localizado`})
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({menssage: err.menssage})
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }


}

module.exports = LivroController;