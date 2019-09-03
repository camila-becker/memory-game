let $root = document.querySelector("#root");

/*Coloca toda a tag img dentro da variavel em formato de string, 
com template string*/
let $iconCollab = `
    <img 
      class='icon' 
      src='img/icon-collabcode.png' 
      alt='Gueio Mascote da CollabCode'
    />
  `;

let $iconJavaScript = `
    <img 
      class='icon'
      src='img/-icon-js.png' 
      alt='Ícone de um livro da linguagem JavaScript' 
    />
  `;

function createCard() {
  //Cria a tag article
  const $memoryCard = document.createElement("article");

  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null); //Insere a tag article dentro da div(root)

  /*Insere o ícone dentro da tag article*/
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createFrontCard() {
  //Cria a tag article
  const $memoryCardFront = document.createElement("article");

  $memoryCardFront.classList.add("memory-card", "-front");
  $root.insertBefore($memoryCardFront, null); //Insere a tag article dentro da div(root)
  /*Insere o ícone dentro da tag article*/
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJavaScript);
}

createFrontCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
