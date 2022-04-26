// arquivo de rotas precisa do express e controller relativo
const express = require('express');
const EnderecoController = require('../controllers/enderecosController.js');

const router = express.Router();

router
    .get("/enderecos", EnderecoController.listarEnderecos)
    .get("/enderecos/busca", EnderecoController.buscarEnderecoPeloCEP)
    .get("/enderecos/:id", EnderecoController.listarEnderecoPorID)
    .post("/enderecos", EnderecoController.cadastrarEndereco)
    .put("/enderecos/:id", EnderecoController.atualizarEndereco)
    .delete("/enderecos/:id", EnderecoController.excluirEndereco)

module.exports = router;