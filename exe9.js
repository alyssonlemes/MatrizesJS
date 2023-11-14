// Função para preencher uma matriz 3x3 com números reais
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = parseFloat(
        prompt(`Informe o valor para a posição (${i + 1}, ${j + 1}):`)
      );
    }
  }
  return matriz;
}

// Função para multiplicar cada elemento da matriz por um número
function multiplicarMatrizPorNumero(matriz, numero) {
  let matrizResultante = [];

  for (let i = 0; i < 3; i++) {
    matrizResultante[i] = [];
    for (let j = 0; j < 3; j++) {
      matrizResultante[i][j] = matriz[i][j] * numero;
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

// Preencher a matriz 3x3 com números reais
let matriz = preencherMatriz();

// Obter o número digitado pelo usuário
let numero = parseFloat(
  prompt("Informe um número para multiplicar pela matriz:")
);

// Calcular e imprimir a matriz resultante
let matrizResultante = multiplicarMatrizPorNumero(matriz, numero);

console.log(`Matriz resultante da multiplicação por ${numero}:`);
exibirMatriz(matrizResultante);
