function leituraMatriz(mat) {
  for (let i = 0; i < 2; i++) {
    mat[i] = []; //cria espaço para cada vetor da matriz
    for (let j = 0; j < 4; j++) {
      mat[i][j] = Number(
        prompt(`Insira o valor da posição da linha ${i} e coluna ${j} `)
      );
    }
  }
}

function calculaElementos(mat) {
  for (let i = 0; i < 2; i++) {
    let cont = 0;
    for (let j = 0; j < 4; j++) {
      if (mat[i][j] > 12 && mat[i][j] < 20) {
        cont++;
      }
    }
    alert(
      `A quantidade de elementos entre 12 e 20 da linha ${i} é igual a: ${cont}`
    );
  }
}

function calculaMediaPares(mat) {
  let cont = 0;
  let soma = 0;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      if (mat[i][j] % 2 == 0) {
        cont++;
        soma += mat[i][j];
      }
    }
  }
  alert(`A média dos elementos pares é igual a ${soma / cont}`);
}

function principal() {
  let mat = [];
  leituraMatriz(mat);
  calculaElementos(mat);
  calculaMediaPares(mat);
}
