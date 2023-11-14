// Função para preencher a matriz com números inteiros
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 20; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz[i][j] = parseInt(
        prompt(`Informe o valor para a posição (${i + 1}, ${j + 1}):`)
      );
    }
  }
  return matriz;
}

// Função para somar cada coluna e armazenar o resultado em um vetor
function somarColunas(matriz) {
  let somasColunas = new Array(10).fill(0);

  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 20; i++) {
      somasColunas[j] += matriz[i][j];
    }
  }

  return somasColunas;
}

// Função para multiplicar cada elemento da matriz pela soma da coluna
function multiplicarPorSomaColuna(matriz, somasColunas) {
  let matrizResultante = [];

  for (let i = 0; i < 20; i++) {
    matrizResultante[i] = [];
    for (let j = 0; j < 10; j++) {
      matrizResultante[i][j] = matriz[i][j] * somasColunas[j];
    }
  }

  return matrizResultante;
}

// Função para exibir uma matriz
function exibirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
  }
}

// Preencher a matriz
let matriz = preencherMatriz();

// Calcular as somas das colunas
let somasColunas = somarColunas(matriz);

// Multiplicar cada elemento pela soma da coluna
let matrizResultante = multiplicarPorSomaColuna(matriz, somasColunas);

// Exibir a matriz original
console.log("Matriz Original:");
exibirMatriz(matriz);

// Exibir a soma de cada coluna
console.log("\nSoma de cada coluna:");
console.log(somasColunas.join("\t"));

// Exibir a matriz resultante
console.log(
  "\nMatriz Resultante (cada elemento multiplicado pela soma da coluna):"
);
exibirMatriz(matrizResultante);
