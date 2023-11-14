// Função para preencher uma matriz 5x5 com números inteiros
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 5; i++) {
    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
      matriz[i][j] = parseInt(
        prompt(`Informe o valor para a posição (${i + 1}, ${j + 1}):`)
      );
    }
  }
  return matriz;
}

// Função para calcular a soma dos elementos de uma linha
function calcularSomaLinha(matriz, linha) {
  let somaLinha = 0;
  for (let j = 0; j < 5; j++) {
    somaLinha += matriz[linha][j];
  }
  return somaLinha;
}

// Função para calcular a soma dos elementos de uma coluna
function calcularSomaColuna(matriz, coluna) {
  let somaColuna = 0;
  for (let i = 0; i < 5; i++) {
    somaColuna += matriz[i][coluna];
  }
  return somaColuna;
}

// Função para calcular a soma dos elementos da diagonal principal
function calcularSomaDiagonalPrincipal(matriz) {
  let somaDiagonalPrincipal = 0;
  for (let i = 0; i < 5; i++) {
    somaDiagonalPrincipal += matriz[i][i];
  }
  return somaDiagonalPrincipal;
}

// Função para calcular a soma dos elementos da diagonal secundária
function calcularSomaDiagonalSecundaria(matriz) {
  let somaDiagonalSecundaria = 0;
  for (let i = 0; i < 5; i++) {
    somaDiagonalSecundaria += matriz[i][4 - i];
  }
  return somaDiagonalSecundaria;
}

// Função para calcular a soma de todos os elementos da matriz
function calcularSomaTotal(matriz) {
  let somaTotal = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      somaTotal += matriz[i][j];
    }
  }
  return somaTotal;
}

// Preencher a matriz 5x5 com números inteiros
let matriz = preencherMatriz();

// Calcular e imprimir as somas solicitadas
console.log(`Soma dos elementos da linha 4: ${calcularSomaLinha(matriz, 3)}`);
console.log(`Soma dos elementos da coluna 2: ${calcularSomaColuna(matriz, 1)}`);
console.log(
  `Soma dos elementos da diagonal principal: ${calcularSomaDiagonalPrincipal(
    matriz
  )}`
);
console.log(
  `Soma dos elementos da diagonal secundária: ${calcularSomaDiagonalSecundaria(
    matriz
  )}`
);
console.log(
  `Soma de todos os elementos da matriz: ${calcularSomaTotal(matriz)}`
);
