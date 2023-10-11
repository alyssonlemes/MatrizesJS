function leituraMatriz(mat) {
  for (let i = 0; i < 3; i++) {
    mat[i] = []; //cria espaço para cada vetor da matriz
    for (let j = 0; j < 5; j++) {
      mat[i][j] = Number(
        prompt(`Insira o valor da posição da linha ${i} e coluna ${j} `)
      );
    }
  }
}

function calculaElementos(mat) {
  let cont = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (mat[i][j] > 15 && mat[i][j] < 20) {
        cont++;
      }
    }
  }
  console.log(`A quantidade de elementos entre 15 e 20 é igual a: ${cont}`);
}

function principal() {
  let mat = [];
  leituraMatriz(mat);
  calculaElementos(mat);
}
