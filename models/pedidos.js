const mongoose = require('mongoose')

module.exports = mongoose.model('Pedido', {
    nome: String,
    motivo: String,
    data: { type: Date, default: Date.now }

})