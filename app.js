/**
 * @fileoverview Aplicação Amigo Secreto - Gerenciamento de lista e sorteio
 * @description Sistema para adicionar participantes e realizar sorteio aleatório
 * @author Fábio Andrade
 * @version 1.0.0
 * @license MIT
 *
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript|MDN JavaScript}
 * @see {@link https://www.w3.org/WAI/WCAG21/quickref/|WCAG 2.1 Acessibilidade}
 */

"use strict";

// =============================================================================
// CONSTANTES E CONFIGURAÇÕES
// =============================================================================

/**
 * Quantidade mínima de participantes para realizar o sorteio
 * @constant {number}
 */
const MIN_PARTICIPANTES = 2;

/**
 * Mensagens do sistema para feedback ao usuário
 * @constant {Object}
 */
const MENSAGENS = {
  CAMPO_VAZIO: "Por favor, digite um nome válido.",
  NOME_DUPLICADO: "Este nome já foi adicionado à lista.",
  LISTA_VAZIA: "A lista está vazia. Adicione pelo menos 2 amigos.",
  MINIMO_PARTICIPANTES: `Adicione pelo menos ${MIN_PARTICIPANTES} amigos para sortear.`,
  NOME_ADICIONADO: (nome) => `${nome} foi adicionado com sucesso!`,
  RESULTADO_SORTEIO: (nome) => `🎉 O amigo secreto sorteado é: ${nome}!`,
};

// =============================================================================
// ESTADO DA APLICAÇÃO
// =============================================================================

/**
 * Array que armazena os nomes dos amigos adicionados
 * @type {string[]}
 */
let listaAmigos = [];

// =============================================================================
// FUNÇÕES UTILITÁRIAS
// =============================================================================

/**
 * Normaliza um texto removendo espaços extras e convertendo para minúsculas
 *
 * @param {string} texto - Texto a ser normalizado
 * @returns {string} Texto normalizado
 *
 * @example
 * normalizarTexto("  João Silva  ") // retorna "joão silva"
 */
function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

/**
 * Formata o nome com a primeira letra de cada palavra em maiúscula
 *
 * @param {string} nome - Nome a ser formatado
 * @returns {string} Nome formatado
 *
 * @example
 * formatarNome("joão silva") // retorna "João Silva"
 */
function formatarNome(nome) {
  return nome
    .trim()
    .split(" ")
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Gera um número aleatório entre 0 e o máximo especificado (exclusive)
 *
 * @param {number} max - Valor máximo (não incluso)
 * @returns {number} Número aleatório
 *
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random|MDN Math.random}
 */
function gerarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

// =============================================================================
// FUNÇÕES DE VALIDAÇÃO
// =============================================================================

/**
 * Verifica se o campo de entrada está vazio ou contém apenas espaços
 *
 * @param {string} valor - Valor do campo de entrada
 * @returns {boolean} true se estiver vazio, false caso contrário
 */
function campoEstaVazio(valor) {
  return valor.trim() === "";
}

/**
 * Verifica se um nome já existe na lista (ignora diferença de maiúsculas/minúsculas)
 *
 * @param {string} nome - Nome a ser verificado
 * @returns {boolean} true se já existir, false caso contrário
 */
function nomeJaExiste(nome) {
  const nomeNormalizado = normalizarTexto(nome);
  return listaAmigos.some((amigo) => normalizarTexto(amigo) === nomeNormalizado);
}

/**
 * Verifica se há participantes suficientes para o sorteio
 *
 * @returns {boolean} true se houver participantes suficientes
 */
function temParticipantesSuficientes() {
  return listaAmigos.length >= MIN_PARTICIPANTES;
}

// =============================================================================
// FUNÇÕES DE MANIPULAÇÃO DO DOM
// =============================================================================

/**
 * Obtém referência ao campo de entrada de nomes
 *
 * @returns {HTMLInputElement} Elemento input
 */
function obterCampoEntrada() {
  return document.getElementById("amigo");
}

/**
 * Obtém referência à lista de amigos no DOM
 *
 * @returns {HTMLUListElement} Elemento ul da lista de amigos
 */
function obterListaDOM() {
  return document.getElementById("listaAmigos");
}

/**
 * Obtém referência ao elemento de resultado
 *
 * @returns {HTMLUListElement} Elemento ul do resultado
 */
function obterResultadoDOM() {
  return document.getElementById("resultado");
}

/**
 * Limpa o campo de entrada e retorna o foco para ele
 */
function limparCampoEntrada() {
  const campo = obterCampoEntrada();
  campo.value = "";
  campo.focus();
}

/**
 * Exibe uma mensagem de feedback para o usuário
 * Utiliza aria-live para acessibilidade com leitores de tela
 *
 * @param {string} mensagem - Mensagem a ser exibida
 * @param {string} [tipo="info"] - Tipo da mensagem: "sucesso", "erro" ou "info"
 *
 * @see {@link https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19|ARIA Live Regions}
 */
function exibirMensagem(mensagem, tipo = "info") {
  const resultado = obterResultadoDOM();

  // Define a classe CSS baseada no tipo
  resultado.className = "result-list";
  if (tipo === "erro") {
    resultado.style.color = "#e74c3c";
  } else if (tipo === "sucesso") {
    resultado.style.color = "#05DF05";
  } else {
    resultado.style.color = "#4B69FD";
  }

  resultado.innerHTML = `<li>${mensagem}</li>`;

  // Limpa a mensagem após 3 segundos (exceto para resultado do sorteio)
  if (tipo !== "sucesso") {
    setTimeout(() => {
      resultado.innerHTML = "";
    }, 3000);
  }
}

/**
 * Atualiza a renderização da lista de amigos no DOM
 * Cria elementos li para cada amigo na lista
 */
function atualizarListaDOM() {
  const listaDOM = obterListaDOM();

  // Limpa a lista atual
  listaDOM.innerHTML = "";

  // Cria um elemento li para cada amigo
  listaAmigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${amigo}`;
    item.setAttribute("data-index", index);
    listaDOM.appendChild(item);
  });
}

// =============================================================================
// FUNÇÕES PRINCIPAIS DA APLICAÇÃO
// =============================================================================

/**
 * Adiciona um novo amigo à lista
 * Realiza validações de campo vazio e nome duplicado
 *
 * @returns {void}
 *
 * @description
 * Esta função é chamada pelo evento onclick do botão "Adicionar".
 * Implementa as seguintes validações:
 * 1. Verifica se o campo está vazio
 * 2. Verifica se o nome já existe na lista (case-insensitive)
 *
 * @example
 * // Chamada via HTML
 * <button onclick="adicionarAmigo()">Adicionar</button>
 */
function adicionarAmigo() {
  const campo = obterCampoEntrada();
  const nome = campo.value;

  // Validação 1: Campo vazio
  if (campoEstaVazio(nome)) {
    exibirMensagem(MENSAGENS.CAMPO_VAZIO, "erro");
    campo.focus();
    return;
  }

  // Validação 2: Nome duplicado
  if (nomeJaExiste(nome)) {
    exibirMensagem(MENSAGENS.NOME_DUPLICADO, "erro");
    limparCampoEntrada();
    return;
  }

  // Adiciona o nome formatado à lista
  const nomeFormatado = formatarNome(nome);
  listaAmigos.push(nomeFormatado);

  // Atualiza a interface
  atualizarListaDOM();
  limparCampoEntrada();

  // Feedback de sucesso (opcional - pode ser removido se preferir menos verbosidade)
  console.log(`✅ ${nomeFormatado} adicionado. Total: ${listaAmigos.length}`);
}

/**
 * Realiza o sorteio aleatório de um amigo da lista
 * Valida se há participantes suficientes antes de sortear
 *
 * @returns {void}
 *
 * @description
 * Esta função é chamada pelo evento onclick do botão "Sortear amigo".
 * Utiliza Math.random() e Math.floor() para seleção aleatória.
 *
 * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random|MDN Math.random}
 *
 * @example
 * // Chamada via HTML
 * <button onclick="sortearAmigo()">Sortear amigo</button>
 */
function sortearAmigo() {
  // Validação 1: Lista vazia
  if (listaAmigos.length === 0) {
    exibirMensagem(MENSAGENS.LISTA_VAZIA, "erro");
    return;
  }

  // Validação 2: Mínimo de participantes
  if (!temParticipantesSuficientes()) {
    exibirMensagem(MENSAGENS.MINIMO_PARTICIPANTES, "erro");
    return;
  }

  // Gera índice aleatório e obtém o nome sorteado
  const indiceAleatorio = gerarNumeroAleatorio(listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  // Exibe o resultado
  exibirMensagem(MENSAGENS.RESULTADO_SORTEIO(amigoSorteado), "sucesso");

  // Log para debug (pode ser removido em produção)
  console.log(`🎉 Sorteado: ${amigoSorteado} (índice ${indiceAleatorio})`);
}

/**
 * Reinicia a aplicação, limpando a lista e o resultado
 * Função auxiliar para testes e reset do estado
 *
 * @returns {void}
 */
function reiniciarAplicacao() {
  listaAmigos = [];
  atualizarListaDOM();
  obterResultadoDOM().innerHTML = "";
  limparCampoEntrada();
  console.log("🔄 Aplicação reiniciada");
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================

/**
 * Adiciona listener para permitir adicionar amigo com a tecla Enter
 * Melhora a experiência do usuário (UX)
 */
document.addEventListener("DOMContentLoaded", () => {
  const campoEntrada = obterCampoEntrada();

  if (campoEntrada) {
    campoEntrada.addEventListener("keypress", (evento) => {
      if (evento.key === "Enter") {
        evento.preventDefault();
        adicionarAmigo();
      }
    });
  }

  console.log("🚀 Aplicação Amigo Secreto inicializada");
});
