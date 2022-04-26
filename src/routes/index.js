// O index é o arquivo que centraliza as rotas

const express = require('express');
const livros = require('./livrosRoutes.js');
const autores = require('./autoresRoutes.js');
const enderecos = require('./enderecosRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send( {titulo: "Curso de Node!"} );
    })

    app.use(
        express.json(),
        livros,
        autores,
        enderecos
    )
}

module.exports = routes;