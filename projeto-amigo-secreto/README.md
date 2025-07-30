# 🎉 Amigo Secreto

> **Uma aplicação web simples e divertida para sortear seu amigo secreto!**

## 📖 Sobre o Projeto

O **Amigo Secreto** é uma aplicação web que permite adicionar nomes de amigos em uma lista e realizar sorteios aleatórios para determinar quem será o amigo secreto. Perfeito para organizar brincadeiras em família, entre amigos ou no trabalho!

## ✨ Funcionalidades

### 🎯 **Principais**
- ➕ **Adicionar amigos** - Campo de texto + botão ou pressione Enter
- 👀 **Visualizar lista** - Todos os nomes adicionados ficam visíveis
- 🎲 **Sorteio aleatório** - Seleciona um amigo secreto de forma justa
- ✅ **Validações inteligentes** - Impede nomes vazios, duplicados ou muito curtos

### 🚀 **Extras**
- 🗑️ **Remover nomes** - Individual ou limpar toda a lista
- 🔄 **Sortear novamente** - Quantas vezes quiser
- 💫 **Animações suaves** - Interface moderna e responsiva
- 📱 **Design responsivo** - Funciona em qualquer dispositivo

## 🎮 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/mariana_angeli/Programa_ONE.git
   cd Programa_ONE/projeto-amigo-secreto
   ```

2. **Abra o arquivo**
   - Apenas abra o `index.html` no seu navegador
   - Ou use uma extensão como Live Server no VS Code

3. **Divirta-se!**
   - Digite nomes no campo de texto
   - Clique "Adicionar" ou pressione Enter
   - Quando tiver pelo menos 2 pessoas, clique "Sortear Amigo"

## 👀 Preview

```
🎉 Amigo Secreto
├── 📝 Campo para adicionar nomes
├── 📋 Lista de participantes
├── 🎲 Botão de sortear
└── 🏆 Resultado do sorteio
```

## 🎯 Validações Implementadas

| Validação | Descrição |
|-----------|-----------|
| ❌ **Campo vazio** | Não permite adicionar nomes em branco |
| 🔄 **Nomes duplicados** | Evita repetir o mesmo nome |
| 📏 **Tamanho mínimo** | Nome deve ter pelo menos 2 caracteres |
| 👥 **Mínimo de participantes** | Precisa de 2+ pessoas para sortear |

## 📁 Estrutura do Projeto

```
Programa_ONE/
└── projeto-amigo-secreto/
    ├── 📄 index.html          # Estrutura HTML
    ├── 🎨 style.css           # Estilos CSS
    ├── ⚡ app.js              # Lógica JavaScript
    ├── 📁 assets/             # Imagens e ícones
    └── 📖 README.md           # Este arquivo
```

## 🔧 Funcionalidades Técnicas

- **Array dinâmico** para armazenar nomes
- **Math.random()** para sorteio justo
- **DOM manipulation** para interface reativa
- **Event listeners** para interações
- **Validação em tempo real** de entradas
- **Animações CSS** para melhor UX

