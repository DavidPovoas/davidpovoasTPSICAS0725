const prompt = require('prompt-sync')();

function menu() {
  let opcao;

  do {
    console.log("\n======= MENU DE EXERCÍCIOS =======");
    console.log("1 - Tipo de dia");
    console.log("2 - Classificação de nota");
    console.log("3 - Tipo de pedido");
    console.log("4 - Tipo de dado");
    console.log("5 - Análise de mensagem");
    console.log("6 - Estado do servidor");
    console.log("7 - Classificação de produto");
    console.log("8 - Operação matemática");
    console.log("9 - Processamento de requisição");
    console.log("10 - Pedra, Papel ou Tesoura");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolhe uma opção: "));

    switch (opcao) {
      case 1:
        exercicio1();
        break;
      case 2:
        exercicio2();
        break;
      case 3:
        exercicio3();
        break;
      case 4:
        exercicio4();
        break;
      case 5:
        exercicio5();
        break;
      case 6:
        exercicio6();
        break;
      case 7:
        exercicio7();
        break;
      case 8:
        exercicio8();
        break;
      case 9:
        exercicio9();
        break;
      case 10:
        exercicio10();
        break;
      case 0:
        console.log("Programa terminado.");
        break;
      default:
        console.log("Opção inválida.");
    }
  } while (opcao !== 0);
}

//////////////////////////////////////////////////////

function exercicio1() {
  let dia = prompt("Dia da semana: ").toLowerCase().trim();

  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    console.log("Fim de semana");
  } else if (
    dia === "segunda" ||
    dia === "terça" || dia === "terca" ||
    dia === "quarta" ||
    dia === "quinta" ||
    dia === "sexta"
  ) {
    console.log("Dia útil");
  } else {
    console.log("Dia inválido");
  }
}


//////////////////////////////////////////////////////

function exercicio2() {
  let nota = parseInt(prompt("Nota (0-100): "));

  while (isNaN(nota) || nota < 0 || nota > 100) {
    console.log("Nota inválida. Introduz um valor entre 0 e 100.");
    nota = parseInt(prompt("Nota (0-100): "));
  }
  if (nota >= 90) {
    console.log("Excelente");
  } else if (nota >= 70) {
    console.log("Bom");
  } else if (nota >= 50) {
    console.log("Suficiente");
  } else {
    console.log("Insuficiente");
  }
}

//////////////////////////////////////////////////////

function exercicio3() {


}

//////////////////////////////////////////////////////

function exercicio4() {

}

//////////////////////////////////////////////////////

function exercicio5() {

}

//////////////////////////////////////////////////////

function exercicio6() {

}

//////////////////////////////////////////////////////

function exercicio7() {

}

//////////////////////////////////////////////////////

function exercicio8() {

}

//////////////////////////////////////////////////////

function exercicio9() {

}

//////////////////////////////////////////////////////

function exercicio10() {

}

//////////////////////////////////////////////////////

menu();