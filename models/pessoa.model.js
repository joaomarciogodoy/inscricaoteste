const mongoose = require('mongoose')

const data_do_pagamento = Date.now()
const dt_pagamento = new Date(data_do_pagamento)

const pagamento_db = dt_pagamento.toLocaleDateString('pt-BR')


module.exports = mongoose.model('Pessoa', {
    nome: String,
    email: String,
    idade: String,
    telefone: Number,
    cidade: String,
    data_inscricao: { type: String, default: pagamento_db },
    pagamento: { type: String, default: "NÃO" },
    data_pagamento: { type: String, default: null }
})