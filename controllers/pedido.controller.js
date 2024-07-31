const express = require('express');

const router = express.Router();

const Pedido = require('../models/pedidos')

router.get('/', (req, res) => {
    Pedido.find().lean().then((pedidos) => {
        res.render('pedidos/pedidos', { pedidos: pedidos })

    })


})

router.get('/registrar', (req, res) => {

    res.render('pedidos/cadastrar_pedidos')

})

router.get('/excluir', (req, res) => {
    Pedido.find().lean().then((pedidos) => {
        res.render('pedidos/excluir_pedidos', { pedidos: pedidos })

    })

})

router.post('/excluir', (req, res) => {
    Pedido.deleteOne({ _id: req.body.id }).lean().then(() => {
        res.redirect('/pedidos/excluir')

    })

})




router.post('/registrar', (req, res) => {
    const pedido = {
        nome: req.body.nome,
        motivo: req.body.motivo,
    }


    new Pedido({ ...pedido }).save()
        .then(res.redirect('/pedidos'),)
        .catch(err => console.log(err))
})

module.exports = router;