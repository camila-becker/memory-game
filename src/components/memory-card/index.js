function createMemoryCard() {
  //Cria a tag article
  const $memoryCard = document.createElement("article");

  /*Coloca toda a tag img dentro da variavel em formato de string, 
com template string*/
  const $iconCollab = `
    <img 
      class='icon' 
      src='img/icon-collabcode.png' 
      alt='Gueio Mascote da CollabCode'
    />
  `;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null); //Insere a tag article dentro da div(root)

  /*Insere o ícone dentro da tag article*/
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  //Cria a tag article
  const $memoryCardFront = document.createElement("article");

  /*Coloca toda a tag img dentro da variavel em formato de string, 
com template string*/
  const $iconJavaScript = `
    <img 
      class='icon'
      src='img/-icon-js.png' 
      alt='Ícone de um livro da linguagem JavaScript' 
    />
  `;

  $memoryCardFront.classList.add("memory-card", "-front");
  $wrapCards.insertBefore($memoryCardFront, null); //Insere a tag article dentro da div(root)
  /*Insere o ícone dentro da tag article*/
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJavaScript);
}
