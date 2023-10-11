// Função para calcular a média aritmética de um array de notas
function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

// Função para determinar a situação do aluno com base em sua média
function determinarSituacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Exame";
  } else {
    return "Reprovado";
  }
}

// Função para ler a matriz de notas dos alunos
function lerMatrizNotas() {
  let notasAlunos = [];

  for (let i = 0; i < 15; i++) {
    let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
    let notas = [];
    for (let j = 0; j < 5; j++) {
      let nota = parseFloat(
        prompt(`Digite a nota da prova ${j + 1} para ${nome}:`)
      );
      notas.push(nota);
    }
    notasAlunos.push([nome, ...notas]);
  }

  return notasAlunos;
}

// Função principal
function main() {
  // Chamar a função para ler a matriz de notas dos alunos
  let notasAlunos = lerMatrizNotas();

  // Calcular a média da classe
  let mediasClasse = [];
  for (let i = 0; i < 15; i++) {
    let mediaAluno = calcularMedia(notasAlunos[i].slice(1)); // Ignorar o primeiro elemento (nome)
    mediasClasse.push(mediaAluno);
  }

  // Mostrar os resultados para cada aluno
  for (let i = 0; i < 15; i++) {
    let nome = notasAlunos[i][0]; // Primeiro elemento é o nome
    let mediaAluno = calcularMedia(notasAlunos[i].slice(1)); // Ignorar o primeiro elemento (nome)
    let situacao = determinarSituacao(mediaAluno);
    console.log(`Aluno: ${nome}`);
    console.log(`Média: ${mediaAluno.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
  }

  // Calcular a média da classe
  let mediaClasse = calcularMedia(mediasClasse);
  console.log(`Média da Classe: ${mediaClasse.toFixed(2)}`);
}

// Chamar a função principal para executar o programa
main();
