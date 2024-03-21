function verificarNumeroPrimo(n){
    if(n % 2 == 0){
        return false;
    }

    if(n == 1){
        return false
    }

    for(i = n-1; i > 1; i--){
        if(n % i == 0){
            return false
        }
    }

    return true;
}

console.log(verificarNumeroPrimo(0)); //false
console.log(verificarNumeroPrimo(1)) //false
console.log(verificarNumeroPrimo(2)); //true
console.log(verificarNumeroPrimo(3)); //true
console.log(verificarNumeroPrimo(7)); //true
console.log(verificarNumeroPrimo(83)); //true
console.log(verificarNumeroPrimo(100)); //false
console.log(verificarNumeroPrimo(991)); //true
console.log(verificarNumeroPrimo(104729)); //true
console.log(verificarNumeroPrimo(14348907)); //false