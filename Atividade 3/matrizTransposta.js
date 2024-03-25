function transporMatriz(matriz) {
    const matrizTransposta = [];
  
    for (let col = 0; col < matriz[0].length; col++) {
      matrizTransposta.push([]);
      for (let lin = 0; lin < matriz.length; lin++) {
        matrizTransposta[col].push(matriz[lin][col]);
      }
    }
  
    return matrizTransposta;
  }
  
  const matriz = [[1, 3, 5], [2, 4, 6]];
  console.log(matriz)
  console.log(transporMatriz(matriz));
  