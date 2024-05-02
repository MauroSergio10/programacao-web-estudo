const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('html', require('mustache-express')()); 
app.set('view engine', 'html'); 
app.set('views', path.join(__dirname, 'views')); 

app.get('/', (req, res) => {
    res.render('index'); 
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;

    res.render('dados', { nome, endereco, telefone, data });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
