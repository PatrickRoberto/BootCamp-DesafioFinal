const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const dotenv = require('dotenv');
dotenv.config();


// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const URL_CONNECTION = process.env.DB_CONNECTION;

const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//A partir daqui imprimo as coisas
let Buscas = 0;
const allTransactions = async () => {
    console.log('Entrou no controller')
    const data = await TransactionModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

module.exports = { allTransactions };