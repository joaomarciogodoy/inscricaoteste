const express = require('express');

const router = express.Router();

const Pessoa = require('../models/pessoa.model')


router.get('/registrar', (req, res) => {
    res.render('pessoas/registrar')

})




router.post('/registrar', (req, res) => {
    const pessoa = {
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade,
        telefone: req.body.telefone
    }


    new Pessoa({ ...pessoa }).save()
        .then(res.redirect(`/pessoas/pagamento`),)
        .catch(err => console.log(err))
})


// class PessoasController {
//     static async showPessoas(req, res) {
//         const pessoas = await Pessoa.find().lean()
//         res.render('pessoas/pagamento', { pessoas })
//     }
// }



router.get('/pagamento', (req, res) => {
    res.render('pessoas/pagamento')



})



router.get('/inscritosadm', (req, res) => {
    Pessoa.find().lean().then((pessoas) => {
        res.render('pessoas/inscritos', { pessoas: pessoas })
    })

})


router.post('/inscritosadm/apagar', (req, res) => {
    Pessoa.deleteOne({ _id: req.body.apagar }).lean().then((pessoas) => {
        res.redirect('/pessoas/inscritosadm')
    })

})

module.exports = router;