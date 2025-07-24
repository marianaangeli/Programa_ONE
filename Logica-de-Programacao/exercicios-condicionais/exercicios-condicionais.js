// DESAFIO 1
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", 
// mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt("Qual e o dia da semana?");

// Converte para minusculo para comparar, independente de como o usuario escrever
let diaMinusculo = diaSemana.toLowerCase();

if (diaMinusculo === "sabado" || diaMinusculo === "domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// ==================================================================================

// DESAFIO 2
// Verifique se um numero digitado pelo usuario e positivo ou negativo. 
// Mostre um alerta informando.

let numero = parseFloat(prompt("Digite um numero:"));

if (numero > 0) {
    alert("O numero e positivo!");
} else if (numero < 0) {
    alert("O numero e negativo!");
} else {
    alert("O numero e zero!");
}

// ==================================================================================

// DESAFIO 3
// Crie um sistema de pontuacao para um jogo. Se a pontuacao for maior ou igual a 100, 
// mostre "Parabens, voce venceu!". Caso contrario, mostre "Tente novamente para ganhar.".

let pontuacao = parseInt(prompt("Qual foi sua pontuacao no jogo?"));

if (pontuacao >= 100) {
    alert("Parabens, voce venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// ==================================================================================

// DESAFIO 4
// Crie uma mensagem que informa o usuario sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.

let saldo = 1250.75; // Exemplo de saldo

let mensagemSaldo = `Seu saldo atual e de R$ ${saldo.toFixed(2)}`;
alert(mensagemSaldo);

// ==================================================================================

// DESAFIO 5
// Peca ao usuario para inserir seu nome usando prompt. Em seguida, 
// mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt("Por favor, insira seu nome:");

alert(`Bem-vindo(a), ${nomeUsuario}! E um prazer te-lo(a) aqui.`);