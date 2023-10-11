function leituraMatriz(mat) {
  for (let i = 0; i < 6; i++) {
    mat[i] = []; //cria espaço para cada vetor da matriz
    for (let j = 0; j < 3; j++) {
      mat[i][j] = Number(
        prompt(`Insira o valor da posição da linha ${i} e coluna ${j} `)
      );
    }
  }
}

function veMaior(mat) {
  let maior = 0,
    aux,
    linhaMaior,
    colunaMaior;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (maior < mat[i][j]) {
        aux = mat[i][j];
        maior = aux;
        linhaMaior = i;
        colunaMaior = j;
      }
    }
  }
  alert(
    `O maior numero é o ${maior} e está na linha ${linhaMaior} e coluna ${colunaMaior}`
  );
}

function veMenor(mat) {
  let menor = 0,
    aux,
    linhaMenor,
    colunaMenor;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      if (menor > mat[i][j]) {
        aux = mat[i][j];
        menor = aux;
        linhaMenor = i;
        colunaMenor = j;
      }
    }
  }
  alert(
    `O menor numero é o ${menor} e está na linha ${linhaMenor} e coluna ${colunaMenor}`
  );
}

function principal() {
  let mat = [];
  leituraMatriz(mat);
  veMaior(mat);
  veMenor(mat);
}
