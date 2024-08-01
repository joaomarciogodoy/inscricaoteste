const mongoose = require('mongoose')

module.exports = mongoose.model('Pessoa', {
    nome: String,
    email: String,
    idade: String,
    telefone: Number,
    cidade: String,
    data_inscricao: { type: Date, default: Date.now() },
    pagamento: { type: String, default: "Não" },
    data_pagamento: { type: String, default: null }
})