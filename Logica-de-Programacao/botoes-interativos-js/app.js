// 1. Alterar o conteúdo da tag h1
document.querySelector('h1').textContent = 'Hora do Desafio';

// 2. Função para exibir mensagem no console
function mostrarConsole() {
    console.log('O botão foi clicado');
}

// 3. Função para exibir alerta
function mostrarAlerta() {
    alert('Eu amo JS');
}

// 4. Função para pergunta sobre cidade
function perguntarCidade() {
    const cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if (cidade) {
        alert(`Estive em ${cidade} e lembrei de você`);
    }
}

// 5. Função para soma de dois números
function calcularSoma() {
    const num1 = parseInt(prompt('Digite o primeiro número:'));
    const num2 = parseInt(prompt('Digite o segundo número:'));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = num1 + num2;
        alert(`O resultado da soma é: ${resultado}`);
    } else {
        alert('Por favor, digite números válidos!');
    }
}

// Adicionar event listeners aos botões quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.button');
    
    botoes[0].onclick = mostrarConsole;  // Botão Console
    botoes[1].onclick = mostrarAlerta;   // Botão Alert
    botoes[2].onclick = perguntarCidade; // Botão Prompt
    botoes[3].onclick = calcularSoma;    // Botão Soma
});