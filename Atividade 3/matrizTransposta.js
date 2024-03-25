function transporMatriz(matriz){
    return matriz.map((row, i) => row.map((_, j) => matriz[j][i]));
}

let matriz = [[1,3,5], 
              [2,4,6]];

console.log(matriz);

const matrizTransposta = transporMatriz(matriz);

console.log(matrizTransporta);


