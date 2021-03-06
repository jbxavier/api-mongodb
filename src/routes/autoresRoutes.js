// arquivo de rotas precisa do express e controller relativo
const express = require('express');
const AutorController = require('../controllers/autoresController.js');

const router = express.Router();

router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/cpf/:cpf", AutorController.buscarAutorPorCpf)
    .get("/autores/:id", AutorController.listarAutorPorID)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.excluirAutor)

module.exports = router;