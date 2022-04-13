//import express from "express";
const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/index.js');

// on faz um tipo de validação de erro... não achei na documentação
db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('conexão com banco ok!')
});

const app = express();

// permite receber e identificar um json
app.use(express.json()); 

routes(app);

module.exports = app;
//export default app;