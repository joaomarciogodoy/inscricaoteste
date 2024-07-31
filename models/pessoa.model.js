const mongoose = require('mongoose')

module.exports = mongoose.model('Pessoa', {
    nome: String,
    email: String,
    idade: String,
    telefone: Number,
    cidade: String,
})