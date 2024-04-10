function calculadora(a, b, operador){
    if(operador == "somar"){
        return a+b;
    }else if(operador == "subtrair"){
        return a-b;
    }else if(operador == "multiplicar"){
        return a*b;
    }else if(operador == "dividir"){
        return a/b;
    }
}

module.exports = {
    calculadora
}