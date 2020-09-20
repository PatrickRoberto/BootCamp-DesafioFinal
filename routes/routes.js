const express = require('express');
const transactionRouter = express.Router();
const transactionServices = require('../services/transactionService.js');

const SUCESSO_BUSCA = {"Mensage": "Objeto Encontrados"}
const SUCESSO_MODIFICACAO = {"Mensage": "Objeto Modificados"}
const SUCESSO_INSERCAO = {"Mensage": "Objeto Inseridos"}
const FALHA = {"Mensage": "Objeto não Encontrado"}
const OUTROS_ERROS = {"Mensage": "Erros na busca da informação"}

transactionRouter.get('/', async (req, resp)=>{
    try {
        const data = await transactionServices.allTransactions();
        resp.send({SUCESSO_BUSCA, data});
    } catch (error) {
        resp.status(500).send({FALHA});
    }
    
});

module.exports = transactionRouter;
