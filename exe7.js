// Função para preencher uma matriz com números inteiros
function preencherMatriz(ordemM, ordemN) {
  let matriz = [];
  for (let i = 0; i < ordemM; i++) {
    matriz[i] = [];
    for (let j = 0; j < ordemN; j++) {
      matriz[i][j] = parseInt(
        prompt(`Informe o valor para a posição (${i + 1}, ${j + 1}):`)
      );
    }
  }
  return matriz;
}

// Função para calcular a soma das linhas de M com as colunas de N
function calcularSomaLinhasColunas(matrizM, matrizN) {
  let somaLinhasColunas = [];

  for (let i = 0; i < matrizM.length; i++) {
    somaLinhasColunas[i] = 0;
    for (let j = 0; j < matrizM[i].length; j++) {
      somaLinhasColunas[i] += matrizM[i][j] * matrizN[j][i];
    }
  }

  return somaLinhasColunas;
}

// Função para exibir um vetor
function exibirVetor(vetor) {
  console.log(vetor.join("\t"));
}

// Preencher a matriz M de ordem 4x6
let matrizM = preencherMatriz(4, 6);

// Preencher a matriz N de ordem 6x4
let matrizN = preencherMatriz(6, 4);

// Calcular e imprimir a soma das linhas de M com as colunas de N
let somaLinhasColunas = calcularSomaLinhasColunas(matrizM, matrizN);

console.log("Soma das linhas de M com as colunas de N:");
exibirVetor(somaLinhasColunas);
