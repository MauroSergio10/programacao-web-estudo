const express = require('express');
const app = express();

class Produto{
    constructor(id, nome, qtd){
        this.id = id;
        this.nome = nome;
        this.qtd = qtd;
    }
}

let listaProdutos = []

app.get('/', (req, res) => {
    res.send("Principal");
})

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;;

    const novoProduto = new Produto(id, nome, qtd);
    listaProdutos.push(novoProduto)
    res.send("Produto Adicionado com sucesso")
})

app.get('/listar', (req, res) =>{
    if (listaProdutos.length === 0) {
        res.send('Nenhum produto cadastrado.');
    } else {
        const produtosFormatados = listaProdutos.map(produto => {
            return `ID: ${produto.id}, Nome: ${produto.nome}, Quantidade: ${produto.qtd}\n`;
        });

        res.send(produtosFormatados.join(''));
    }
});

app.get('/remover/:id', (req,res) =>{
    const {id} = req.params;

    listaProdutos = listaProdutos.filter(novoProduto => novoProduto.id.toString() !== id);
    console.log(listaProdutos);
    res.send("Produto Removido com sucesso");
});

app.get('/editar/:id/:qtd', (req,res) => {
    const { id, qtd } = req.params;

  
    const indexProdutoEditar = listaProdutos.findIndex(produto => produto.id === id);


    if (indexProdutoEditar !== -1) {

        listaProdutos[indexProdutoEditar].qtd = qtd;

        res.send(`Produto com ID ${id} editado com sucesso. Nova quantidade: ${qtd}`);
    } else {
        res.send(`Produto com ID ${id} não encontrado.`);
    }
});

app.listen(3000);



