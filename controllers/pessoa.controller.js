const express = require('express');

const router = express.Router();

const Pessoa = require('../models/pessoa.model')

router.get('/', (req, res) => {
    Pessoa.find().lean()
        .then(data => {
            res.render('pessoas/index', { pessoas: data, layout: false })
        })
        .catch(err => console.log(err))
})

router.get('/registrar', (req, res) => {
    res.render('pessoas/registrar')

})

router.get('/tudocerto', (req, res) => {
    res.render('pessoas/tudocerto')
})


router.post('/registrar', (req, res) => {
    const pessoa = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        telefone: req.body.telefone
    }

    new Pessoa({ ...pessoa }).save()
        .then(data => res.render('pessoas/tudocerto'))
        .catch(err => console.log(err))
})


module.exports = router;