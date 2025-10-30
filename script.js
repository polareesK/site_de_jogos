/* 
  Este script adiciona dinamicamente jogos às seções.
  Em vez de colocar tudo no HTML, você pode gerenciar os jogos aqui.
*/

/* Objeto com categorias e jogos */
const secoes = {
  acao: [
    { nome: "Jogo Ação 1", link: "https://example.com/jogo-acao1" },
    { nome: "Jogo Ação 2", link: "https://example.com/jogo-acao2" }
  ],
  puzzle: [
    { nome: "Jogo Puzzle 1", link: "https://example.com/jogo-puzzle1" }
  ],
  corrida: [
    { nome: "Jogo Corrida 1", link: "https://example.com/jogo-corrida1" }
  ]
};

/* 
  Percorre todas as categorias e insere os jogos automaticamente 
*/
for (let categoria in secoes) {
  // Seleciona o container de jogos daquela categoria
  const container = document.querySelector(`#${categoria} .jogos`);

  // Para cada jogo dentro da categoria...
  secoes[categoria].forEach(jogo => {
    // Cria um elemento <div> para o jogo
    const div = document.createElement("div");
    div.classList.add("jogo"); // Adiciona a classe CSS

    // Insere o iframe e o nome do jogo dentro do div
    div.innerHTML = `
      <iframe src="${jogo.link}" title="${jogo.nome}"></iframe>
      <p>${jogo.nome}</p>
    `;

    // Adiciona o novo jogo ao container
    container.appendChild(div);
  });
}
