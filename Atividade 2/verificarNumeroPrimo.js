function primoNumber(n){
    if(n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
        return("Não é primo");
    }
    return("É primo");
}

console.log(primoNumber(148));
