// Função para calcular o total vendido em cada mês
function calcularTotalMensal(vendas) {
  let totalMensal = [];
  for (let mes = 0; mes < 12; mes++) {
    let totalMes = 0;
    for (let semana = 0; semana < 4; semana++) {
      totalMes += vendas[mes][semana];
    }
    totalMensal.push(totalMes);
  }
  return totalMensal;
}

// Função para calcular o total vendido em cada semana
function calcularTotalSemanal(vendas) {
  let totalSemanal = [0, 0, 0, 0];
  for (let mes = 0; mes < 12; mes++) {
    for (let semana = 0; semana < 4; semana++) {
      totalSemanal[semana] += vendas[mes][semana];
    }
  }
  return totalSemanal;
}

// Função para calcular o total vendido no ano
function calcularTotalAnual(vendas) {
  let totalAnual = 0;
  for (let mes = 0; mes < 12; mes++) {
    for (let semana = 0; semana < 4; semana++) {
      totalAnual += vendas[mes][semana];
    }
  }
  return totalAnual;
}

// Função principal
function main() {
  // Nomes dos meses por extenso
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  // Preencher a matriz de vendas (12x4)
  let vendasLoja = [];
  for (let mes = 0; mes < 12; mes++) {
    vendasLoja[mes] = [];
    for (let semana = 0; semana < 4; semana++) {
      let venda = parseFloat(
        prompt(
          `Digite o valor de vendas para ${meses[mes]}, Semana ${semana + 1}:`
        )
      );
      vendasLoja[mes][semana] = venda;
    }
  }

  // Calcular os totais
  let totalMensal = calcularTotalMensal(vendasLoja);
  let totalSemanal = calcularTotalSemanal(vendasLoja);
  let totalAnual = calcularTotalAnual(vendasLoja);

  // Mostrar os resultados
  for (let mes = 0; mes < 12; mes++) {
    console.log(
      `${meses[mes]}: Total vendido no mês: ${totalMensal[mes].toFixed(2)}`
    );
  }

  for (let semana = 0; semana < 4; semana++) {
    console.log(
      `Semana ${semana + 1}: Total vendido na semana: ${totalSemanal[
        semana
      ].toFixed(2)}`
    );
  }

  console.log(`Total vendido pela loja no ano: ${totalAnual.toFixed(2)}`);
}

// Chamar a função principal para executar o programa
main();
