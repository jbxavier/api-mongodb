// arquivo de rotas precisa do express e controller relativo
const express = require('express');
const LivroController = require('../controllers/livrosController.js');

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    // essa linha precisa estar antes do /livros/:id, senão executa a busca por id erroneamente
    // passando o parâmetro como se fosse um id (localhost:3000/livros/busca?editora=teste)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorID)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

module.exports = router;