// Função para preencher uma matriz com números inteiros
function preencherMatriz(ordem) {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < ordem; j++) {
      matriz[i][j] = parseInt(
        prompt(`Informe o valor para a posição (${i + 1}, ${j + 1}):`)
      );
    }
  }
  return matriz;
}

// Função para calcular a soma de duas matrizes
function calcularSomaMatrizes(matrizA, matrizB) {
  let matrizSoma = [];

  for (let i = 0; i < matrizA.length; i++) {
    matrizSoma[i] = [];
    for (let j = 0; j < matrizA[i].length; j++) {
      matrizSoma[i][j] = matrizA[i][j] + matrizB[i][j];
    }
  }

  return matrizSoma;
}

// Função para calcular a diferença de duas matrizes
function calcularDiferencaMatrizes(matrizA, matrizB) {
  let matrizDiferenca = [];

  for (let i = 0; i < matrizA.length; i++) {
    matrizDiferenca[i] = [];
    for (let j = 0; j < matrizA[i].length; j++) {
      matrizDiferenca[i][j] = matrizA[i][j] - matrizB[i][j];
    }
  }

  return matrizDiferenca;
}

// Função para exibir uma matriz
function exibirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
  }
}

// Preencher a primeira matriz A de ordem 3x8
let matrizA = preencherMatriz(8);

// Preencher a segunda matriz B de ordem 3x8
let matrizB = preencherMatriz(8);

// Calcular e imprimir a soma das duas matrizes
let matrizSoma = calcularSomaMatrizes(matrizA, matrizB);

console.log("Matriz Soma (A + B):");
exibirMatriz(matrizSoma);

// Calcular e imprimir a diferença das duas matrizes
let matrizDiferenca = calcularDiferencaMatrizes(matrizA, matrizB);

console.log("\nMatriz Diferença (A - B):");
exibirMatriz(matrizDiferenca);
