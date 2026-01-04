# 🎁 Amigo Secreto — Sorteio Online

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsivo-1572B6?style=flat&logo=css3&logoColor=white)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG_2.1-005A9C?style=flat&logo=w3c&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

Aplicação web para gerenciamento de lista de participantes e sorteio aleatório de amigo secreto, desenvolvida com foco em **boas práticas**, **acessibilidade** e **experiência do usuário**.

🌐 **[Acessar Demonstração Online](https://thedrads.github.io/logic-challenges-javascript/)**

---

## 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Boas Práticas Aplicadas](#-boas-práticas-aplicadas)
- [Acessibilidade](#-acessibilidade)
- [Aprendizados](#-aprendizados)
- [Declaração de Uso de IA](#-declaração-de-uso-de-ia)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Challenge Amigo Secreto** do programa **Oracle Next Education (ONE)** em parceria com a **Alura**.

### Contexto do Desafio

O Challenge utiliza a metodologia **Challenge-Based Learning** (CBL), desenvolvida pela Apple, que propõe aprendizado através de desafios práticos do mundo real.

### Objetivo

Desenvolver habilidades em **lógica de programação** através da criação de uma aplicação funcional que permita:

1. Adicionar nomes de participantes a uma lista
2. Validar entradas (campos vazios e duplicados)
3. Realizar sorteio aleatório
4. Fornecer feedback acessível ao usuário

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| ➕ **Adicionar participantes** | Insere nomes na lista com validação |
| 🔍 **Validação de duplicados** | Impede nomes repetidos (case-insensitive) |
| ⚠️ **Validação de campo vazio** | Bloqueia adição de campos em branco |
| 🎲 **Sorteio aleatório** | Seleciona um participante aleatoriamente |
| ⌨️ **Tecla Enter** | Permite adicionar pressionando Enter |
| ♿ **Acessibilidade** | Feedback para leitores de tela |

---

## 🖥️ Demonstração

### Interface da Aplicação

![Interface do Amigo Secreto](assets/amigo-secreto.png)

### Como Usar

1. Digite o nome de um participante no campo de texto
2. Clique em **"Adicionar"** ou pressione **Enter**
3. Repita até ter pelo menos 2 participantes
4. Clique em **"Sortear amigo"** para realizar o sorteio
5. O resultado será exibido na tela

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| JavaScript | ES6+ | Lógica da aplicação |
| HTML5 | 5 | Estrutura semântica |
| CSS3 | 3 | Estilização responsiva |
| Google Fonts | - | Tipografia (Inter, Merriweather) |

### Recursos do JavaScript Utilizados

- **Arrays** — Armazenamento da lista de participantes
- **Funções** — Modularização do código
- **Eventos** — Interação com o usuário (click, keypress)
- **DOM Manipulation** — Atualização dinâmica da interface
- **Math.random()** — Geração de números aleatórios
- **Template Literals** — Interpolação de strings

---

## 📁 Estrutura do Projeto

```
logic-challenges-javascript/
├── 📄 index.html          # Estrutura HTML semântica
├── 📄 style.css           # Estilos CSS com variáveis
├── 📄 app.js              # Lógica JavaScript documentada
├── 📄 README.md           # Documentação do projeto
├── 📄 LICENSE             # Licença MIT
└── 📂 assets/             # Recursos visuais
    ├── amigo-secreto.png  # Imagem do banner
    └── play_circle_outline.png  # Ícone do botão
```

---

## 🚀 Como Executar

### Opção 1: Online (Recomendado)

Acesse diretamente: **[thedrads.github.io/logic-challenges-javascript](https://thedrads.github.io/logic-challenges-javascript/)**

### Opção 2: Localmente

```bash
# Clone o repositório
git clone https://github.com/thedrads/logic-challenges-javascript.git

# Entre na pasta
cd logic-challenges-javascript

# Abra no navegador (ou use Live Server no VSCode)
# Clique com botão direito no index.html → "Open with Live Server"
```

### Opção 3: VSCode com Live Server

1. Abra a pasta do projeto no VSCode
2. Instale a extensão **Live Server** (se ainda não tiver)
3. Clique com botão direito no `index.html`
4. Selecione **"Open with Live Server"**

---

## ✅ Boas Práticas Aplicadas

### JavaScript

| Prática | Implementação | Referência |
|---------|---------------|------------|
| **"use strict"** | Modo estrito ativado | [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) |
| **Const/Let** | Sem uso de var | [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const) |
| **JSDoc** | Documentação de funções | [JSDoc](https://jsdoc.app/) |
| **Funções puras** | Separação de responsabilidades | [Clean Code JS](https://github.com/ryanmcdermott/clean-code-javascript) |
| **Nomes descritivos** | Funções e variáveis claras | Clean Code |
| **Constantes** | Valores fixos centralizados | Best Practices |

### HTML

| Prática | Implementação | Referência |
|---------|---------------|------------|
| **Semântica** | Tags main, header, section | [W3C HTML5](https://www.w3.org/TR/html52/) |
| **Acessibilidade** | ARIA labels e roles | [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) |
| **Meta tags** | Description, viewport, author | SEO Best Practices |

### CSS

| Prática | Implementação | Referência |
|---------|---------------|------------|
| **CSS Custom Properties** | Variáveis para cores e espaçamentos | [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/--*) |
| **Mobile First** | Media queries responsivas | [MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Media_Queries) |
| **Reset CSS** | Normalização de estilos | Modern CSS Reset |
| **BEM-like** | Nomenclatura de classes | CSS Methodology |

---

## ♿ Acessibilidade

Este projeto segue as diretrizes **WCAG 2.1** para garantir acessibilidade:

| Recurso | Implementação |
|---------|---------------|
| **aria-live** | Anuncia mudanças para leitores de tela |
| **aria-label** | Descrições para elementos interativos |
| **role** | Define papéis semânticos |
| **visually-hidden** | Classe para conteúdo apenas para screen readers |
| **prefers-reduced-motion** | Respeita preferência de redução de movimento |
| **Foco visível** | Indicadores de foco claros |

### Testado com

- ✅ Navegação por teclado
- ✅ Leitor de tela (NVDA)
- ✅ Contraste de cores

---

## 📚 Aprendizados

Este projeto me permitiu praticar e consolidar conhecimentos em:

### Lógica de Programação
- Estruturas condicionais (if/else)
- Loops e iteração (forEach, map)
- Manipulação de arrays (push, some)
- Funções e modularização

### Manipulação do DOM
- Seleção de elementos (getElementById)
- Criação dinâmica de elementos (createElement)
- Eventos (click, keypress, DOMContentLoaded)

### Boas Práticas
- Documentação com JSDoc
- Código limpo e legível
- Acessibilidade web
- Versionamento com Git

### Cursos Base (Alura)
- Lógica de programação: mergulhe em programação com JavaScript
- Lógica de programação: explore funções e listas
- Git e GitHub: compartilhando e colaborando em projetos

---

## 🤖 Declaração de Uso de IA

Este projeto foi desenvolvido com auxílio de **Inteligência Artificial (IA)** como ferramenta de apoio.

### Escopo do Uso

| Aspecto | Descrição |
|---------|-----------|
| **Ferramenta** | Chat GPT (Open AI) |
| **Uso** | Revisão de código, boas práticas, documentação |
| **Responsabilidade** | Toda lógica e implementação são do autor |
| **Validação** | Código compreendido e testado antes do uso |

### O que foi feito com apoio de IA:
- ✅ Revisão de boas práticas JavaScript
- ✅ Melhoria da documentação (JSDoc)
- ✅ Sugestões de acessibilidade
- ✅ Estruturação do README

### O que foi desenvolvido pelo autor:
- ✅ Lógica de programação completa
- ✅ Estrutura e organização do código
- ✅ Testes e validação
- ✅ Deploy e publicação

### Referências sobre Uso Ético de IA

- [Princeton - Academic Integrity & AI](https://mcgraw.princeton.edu/academic-integrity)
- [ASU - AI in Academic Work](https://provost.asu.edu/academic-integrity)

---

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/thedrads">
        <img src="https://github.com/thedrads.png" width="100px;" alt="Foto do Autor"/><br>
        <sub><b>Fábio Andrade</b></sub>
      </a>
    </td>
  </tr>
</table>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fabioandradegf/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thedrads)

**Programa:** Oracle Next Education (ONE) + Alura  
**Trilha:** Iniciante em Programação

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

### 📖 Notas Técnicas

| Termo | Explicação |
|-------|------------|
| **DOM** | Document Object Model - estrutura da página que o JavaScript manipula |
| **ARIA** | Accessible Rich Internet Applications - padrão de acessibilidade |
| **Validação** | Regras que impedem dados incorretos ou duplicados |
| **ES6+** | Versão moderna do JavaScript com novos recursos |

</div>

---

<div align="center">
  
⭐ **Se este projeto foi útil, considere dar uma estrela!** ⭐

</div>
