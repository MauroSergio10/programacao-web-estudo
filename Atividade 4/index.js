const express = require ('express');
const app = express();
const calculadora = require('./util/calculadora');

app.get('/', (req, res) => {
    res.send('Principal')
})

app.get('/somar/:a/:b', (req, res) => {
    const { a, b } = req.params;

    const numA = parseInt(a);
    const numB = parseInt(b);

    const resultado = calculadora.calculadora(numA, numB, "somar");

    res.send(`O resultado da soma é: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const { a, b } = req.params;

    const numA = parseInt(a);
    const numB = parseInt(b);

    const resultado = calculadora.calculadora(numA, numB, "subtrair");

    res.send(`O resultado da subtração é: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const { a, b } = req.params;

    const numA = parseInt(a);
    const numB = parseInt(b);

    const resultado = calculadora.calculadora(numA, numB, "multiplicar");

    res.send(`O resultado da multiplicação é: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const { a, b } = req.params;

    const numA = parseInt(a);
    const numB = parseInt(b);

    const resultado = calculadora.calculadora(numA, numB, "dividir");

    res.send(`O resultado da dividir é: ${resultado}`);
});


app.listen(3000);