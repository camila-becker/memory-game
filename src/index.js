const $root = document.querySelector("#root");

//Cria a tag article
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

/*Coloca toda a tag img dentro da variavel em formato de string, 
com template string*/
const $iconCollab = `
    <img 
      class='icon' 
      src='img/icon-collabcode.png' 
      alt='Gueio Mascote da CollabCode'
    />
  `;

const $iconJavaScript = `
    <img 
      class='icon'
      src='img/-icon-js.png' 
      alt='Ícone de um livro da linguagem JavaScript' 
    />
  `;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null); //Insere a tag article dentro da div(root)

$memoryCardFront.classList.add("memory-card", "-front");
$root.insertBefore($memoryCardFront, $memoryCard); //Insere a tag article dentro da div(root)

/*Insere o ícone dentro da tag article*/
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJavaScript);
