const prompt = require('prompt-sync')();

function menu() {
  let opcao;

  do {
    console.log("\n======= MENU DE EXERCÍCIOS =======");
    console.log("1 - Converter segundos");
    console.log("2 - Maior e menor de 3 números");
    console.log("3 - Ordem crescente e decrescente (2 números)");
    console.log("4 - Verificar cheque");
    console.log("5 - Ordem crescente e decrescente (3 números)");
    console.log("6 - Desconto de compra");
    console.log("7 - Média com pesos");
    console.log("8 - Média de 10 notas");
    console.log("9 - Nome do mês (Switch)");
    console.log("10 - Pares e Ímpares (Loop)");
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
        exercicioSwitch();
        break;
      case 10:
        exercicioLoop();
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
  let totalSegundos = parseInt(prompt("Introduz os segundos: ").trim());

  let horas = Math.floor(totalSegundos / 3600);
  let resto = totalSegundos % 3600;
  let minutos = Math.floor(resto / 60);
  let segundos = resto % 60;

  console.log(horas + " hora(s), " + minutos + " minuto(s) e " + segundos + " segundo(s).");
}

//////////////////////////////////////////////////////

function exercicio2() {
  let num1 = parseInt(prompt("Número 1: ").trim());
  let num2 = parseInt(prompt("Número 2: ").trim());
  let num3 = parseInt(prompt("Número 3: ").trim());

  let maior = num1;
  let menor = num1;

  if (num2 > maior) maior = num2;
  if (num3 > maior) maior = num3;

  if (num2 < menor) menor = num2;
  if (num3 < menor) menor = num3;

  console.log("Maior: ", maior);
  console.log("Menor: ", menor);
}

//////////////////////////////////////////////////////

function exercicio3() {
  let num1 = parseInt(prompt("Número 1: ").trim());
  let num2 = parseInt(prompt("Número 2: ").trim());

  if (num1 < num2) {
    console.log("Crescente:", num1 + ", " + num2);
    console.log("Decrescente:", num2 + ", " + num1);
  } else {
    console.log("Crescente:", num2 + ", " + num1);
    console.log("Decrescente:", num1 + ", " + num2);
  }
}

//////////////////////////////////////////////////////

function exercicio4() {
  let saldo = parseFloat(prompt("Saldo inicial: ").trim());
  let cheque = parseFloat(prompt("Valor do cheque: ").trim());

  if (cheque <= saldo) {
    saldo -= cheque;
    console.log("Cheque descontado, saldo:", saldo);
  } else {
    console.log("Cheque não pode ser descontado.");
  }
}

//////////////////////////////////////////////////////

function exercicio5() {
  let num1 = parseInt(prompt("Número 1: ").trim());
  let num2 = parseInt(prompt("Número 2: ").trim());
  let num3 = parseInt(prompt("Número 3: ").trim());

  let menor, meio, maior;

  if (num1 <= num2 && num1 <= num3) {
    menor = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
  } else {
    menor = num3;
  }

  if (num1 >= num2 && num1 >= num3) {
    maior = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
  } else {
    maior = num3;
  }

  if (num1 !== menor && num1 !== maior) {
    meio = num1;
  } else if (num2 !== menor && num2 !== maior) {
    meio = num2;
  } else {
    meio = num3;
  }

  console.log("Crescente:", menor + ", " + meio + ", " + maior);
  console.log("Decrescente:", maior + ", " + meio + ", " + menor);
}

//////////////////////////////////////////////////////

function exercicio6() {
  let nome = prompt("Nome do cliente: ").trim();
  let compra = parseFloat(prompt("Valor da compra: ").trim());
  let desconto = 0;

  if (compra <= 200) {
    desconto = compra * 0.10;
  } else if (compra <= 500) {
    desconto = compra * 0.15;
  } else {
    desconto = compra * 0.20;
  }

  desconto = Math.ceil(desconto * 100) / 100;
  let total = compra - desconto;
  total = Math.ceil(total * 100) / 100;

  console.log("\nNome:", nome);
  console.log("Compra:", compra.toFixed(2) + "€");
  console.log("Desconto:", desconto.toFixed(2) + "€");
  console.log("Total a pagar:", total.toFixed(2) + "€");
}

//////////////////////////////////////////////////////

function exercicio7() {
  let num1 = parseFloat(prompt("Nota 1 (0-20): ").trim());
  while (num1 < 0 || num1 > 20 || isNaN(num1)) {
    console.log("Nota inválida. Introduz uma nota entre 0 e 20.");
    num1 = parseFloat(prompt("Nota 1 (0-20): ").trim());
  }

  let num2 = parseFloat(prompt("Nota 2 (0-20): ").trim());
  while (num2 < 0 || num2 > 20 || isNaN(num2)) {
    console.log("Nota inválida. Introduz uma nota entre 0 e 20.");
    num2 = parseFloat(prompt("Nota 2 (0-20): ").trim());
  }

  let num3 = parseFloat(prompt("Nota 3 (0-20): ").trim());
  while (num3 < 0 || num3 > 20 || isNaN(num3)) {
    console.log("Nota inválida. Introduz uma nota entre 0 e 20.");
    num3 = parseFloat(prompt("Nota 3 (0-20): ").trim());
  }

  let media = (num1 * 2 + num2 * 3 + num3 * 5) / 10;
  console.log("Média:", media.toFixed(1));

  if (media >= 6) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}

//////////////////////////////////////////////////////

function exercicio8() {
  let soma = 0;
  let notas = [];

  for (let maxNotas = 0; maxNotas < 10; maxNotas++) {
    let nota = parseFloat(prompt("Nota " + (maxNotas + 1) + " (0-20): ").trim());

    while (nota < 0 || nota > 20 || isNaN(nota)) {
      console.log("Nota inválida. Introduz uma nota entre 0 e 20.");
      nota = parseFloat(prompt("Nota " + (maxNotas + 1) + " (0-20): ").trim());
    }

    notas.push(nota);
    soma += nota;
  }

  let media = soma / 10;
  let acimaMedia = 0;

  for (let maxNotas = 0; maxNotas < 10; maxNotas++) {
    if (notas[maxNotas] >= media) {
      acimaMedia++;
    }
  }

  console.log("Média:", media.toFixed(2));
  console.log("Notas acima da média:", acimaMedia);
}

//////////////////////////////////////////////////////

function exercicioSwitch() {
  let mes = parseInt(prompt("Número do mês (1-12): ").trim());

  switch (mes) {
    case 1:
      console.log("Janeiro");
      break;
    case 2: 
      console.log("Fevereiro");
      break;
    case 3: 
      console.log("Março");
      break;
    case 4: 
      console.log("Abril");
      break;
    case 5: 
      console.log("Maio"); 
      break;
    case 6: 
      console.log("Junho");
      break;
    case 7:
      console.log("Julho");
      break;
    case 8:
      console.log("Agosto");
      break;
    case 9: 
      console.log("Setembro"); 
      break;
    case 10: 
      console.log("Outubro"); 
      break;
    case 11: 
      console.log("Novembro"); 
      break;
    case 12: 
      console.log("Dezembro"); 
      break;
    default: 
      console.log("Mês inválido");
  }
}

//////////////////////////////////////////////////////

function exercicioLoop() {
  let pares = 0;
  let impares = 0;

  for (let maxNumeros = 0; maxNumeros < 10; maxNumeros++) {
    let numero = parseInt(prompt("Número " + (maxNumeros+1) + ": ").trim());

    if (numero % 2 === 0) pares++;
    else impares++;
  }

  console.log("Pares:", pares);
  console.log("Ímpares:", impares);
}

//////////////////////////////////////////////////////

menu();