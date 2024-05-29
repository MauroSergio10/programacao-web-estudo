function calcular(v1, v2, op) {
    let resultado;
    switch (op) {
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            resultado = v1 / v2;
            break;
    }
    return resultado;
}

function nomeOperador(op) {
    let Operador;
    switch (op) {
        case '+':
            Operador = "soma";
            break;
        case '-':
            Operador = "subtração";
            break;
        case '*':
            Operador = "multiplicação";
            break;
        case '/':
            Operador = "divisão";
            break;
    }
    return Operador;
}

module.exports = {
    calcular,
    nomeOperador
}