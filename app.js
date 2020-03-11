const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contato = require('./models/Contato');

var path = __dirname + '/public';
//configs
app.use(express.static(path));
//body parser
app.use(bodyParser.urlencoded( { extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res){
    res.sendFile(path + 'index.html');
})

app.get('/registrar', (req, res) => {
    res.render('registrar')
})

app.get('/sucesso', (req, res) => {
    res.sendFile(path + '/sucesso.html')
})

app.post('/registrar', (req, res) => {
     contato.create(
         {
             nome: req.body.nome,
             email: req.body.email,
             assunto: req.body.assunto,
             mensagem: req.body.mensagem
         }
     ).then(function(){
         res.redirect('/sucesso');
     }).catch(function(erro){
        res.send("Erro: Contato não cadastrado! " + erro)
     })
})

app.listen(3000);