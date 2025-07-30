// Array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista
 */
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    // Validação: verificar se o campo não está vazio
    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    // Validação: verificar se o nome já existe na lista (evita duplicatas)
    if (amigos.includes(nome)) {
        alert(`O nome "${nome}" já foi adicionado à lista!`);
        input.value = '';
        input.focus();
        return;
    }
    
    // Validação: verificar se o nome tem pelo menos 2 caracteres
    if (nome.length < 2) {
        alert('O nome deve ter pelo menos 2 caracteres!');
        return;
    }
    
    // Adicionar o nome ao array
    amigos.push(nome);
    
    // Limpar o campo de entrada
    input.value = '';
    
    // Atualizar a lista exibida na tela
    atualizarListaAmigos();
    
    // Focar novamente no campo de entrada para facilitar a adição de mais nomes
    input.focus();
    
    // Limpar resultado anterior se existir
    limparResultado();
}

/**
 * Função para atualizar a lista de amigos exibida na tela
 */
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${nome}</span>
            <button onclick="removerAmigo(${index})" style="margin-left: 10px; padding: 5px 10px; background-color: #ff4444; color: white; border: none; border-radius: 15px; cursor: pointer; font-size: 12px;">
                Remover
            </button>
        `;
        lista.appendChild(li);
    });
}

/**
 * Função para remover um amigo da lista
 */
function removerAmigo(index) {
    const nomeRemovido = amigos[index];
    amigos.splice(index, 1);
    atualizarListaAmigos();
    limparResultado();
    
    // Mostrar mensagem de confirmação
    alert(`${nomeRemovido} foi removido da lista!`);
}

/**
 * Função para sortear um amigo secreto
 */
function sortearAmigo() {
    // Verificar se há pelo menos 2 amigos na lista
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    
    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Exibir o resultado
    exibirResultado(amigoSorteado);
    
    // Adicionar efeito visual ao resultado
    const resultado = document.getElementById('resultado');
    resultado.style.animation = 'none';
    setTimeout(() => {
        resultado.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
}

/**
 * Função para exibir o resultado do sorteio
 */
function exibirResultado(nome) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <li style="text-align: center; padding: 20px; background-color: rgba(5, 223, 5, 0.1); border-radius: 15px; margin: 10px 0;">
            🎉 O amigo secreto sorteado foi: <strong>${nome}</strong> 🎉
        </li>
        <li style="text-align: center; margin-top: 10px;">
            <button onclick="novoSorteio()" style="padding: 10px 20px; background-color: #4B69FD; color: white; border: none; border-radius: 20px; cursor: pointer; font-size: 14px;">
                Sortear Novamente
            </button>
        </li>
    `;
}

/**
 * Função para limpar o resultado do sorteio
 */
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Função para realizar um novo sorteio
 */
function novoSorteio() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    sortearAmigo();
}

/**
 * Função para limpar toda a lista (funcionalidade extra)
 */
function limparLista() {
    if (amigos.length === 0) {
        alert('A lista já está vazia!');
        return;
    }
    
    if (confirm(`Tem certeza que deseja remover todos os ${amigos.length} amigos da lista?`)) {
        amigos = [];
        atualizarListaAmigos();
        limparResultado();
        alert('Lista limpa com sucesso!');
    }
}

// Adicionar funcionalidade de pressionar Enter no campo de texto
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    
    // Permitir adicionar amigo pressionando Enter
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
    
    // Focar no campo de entrada quando a página carregar
    input.focus();
    
    // Adicionar botão para limpar lista (funcionalidade extra)
    const buttonContainer = document.querySelector('.button-container');
    const limparButton = document.createElement('button');
    limparButton.innerHTML = '🗑️ Limpar Lista';
    limparButton.onclick = limparLista;
    limparButton.style.cssText = `
        margin-top: 10px;
        background-color: #dc3545;
        color: white;
        border: 2px solid #000;
        border-radius: 25px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 14px;
        width: 100%;
    `;
    limparButton.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#c82333';
    });
    limparButton.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#dc3545';
    });
    
    buttonContainer.appendChild(limparButton);
});

// Adicionar animação CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .name-list li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 15px;
        margin: 5px 0;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 20px;
        border: 1px solid #ddd;
        animation: fadeIn 0.3s ease-in;
    }
    
    .name-list li:hover {
        background-color: rgba(255, 255, 255, 0.9);
        transform: translateX(5px);
        transition: all 0.2s ease;
    }
`;
document.head.appendChild(style);