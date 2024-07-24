const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')


//imports
const connectDb = require('./db');
const pessoaRoutes = require('./controllers/pessoa.controller')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'))


//routing
app.use('/pessoas', pessoaRoutes)

app.get('/', (req, res) => {
    res.render('pessoas/index')
})

//configure view aengine

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'mainLayout.hbs',

}))
app.set('view engine', '.hbs')



connectDb().then(data => {
    console.log('CONECTOU NO BANCO')

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    }).on('error', err => console.log('Server error: ', err));

}).catch(err => console.log('Server error: ', err))