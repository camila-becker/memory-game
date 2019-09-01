const $root = document.querySelector("#root");

//Cria a tag article
const $memoryCard = document.createElement("article");
const $memoryCardJs = document.createElement("article");

/*Coloca toda a tag img dentro da variavel em formato de string, 
com template string*/
const $icon = `
    <img 
      class='icon' 
      src='img/icon-collabcode.png' 
      alt='Gueio Mascote da CollabCode'
    />
  `;

const $iconJavaScript = `
    <img 
      class='icon -style'
      src='img/-icon-js.png' 
      alt='Ícone JavaScript' 
    />
  `;

$memoryCard.classList.add("memory-card");
$memoryCardJs.classList.add("memory-card", "-js");

//Insere a tag article dentro da div(root)
$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardJs, $memoryCard);

/*Insere o ícone dentro da tag article*/
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCardJs.insertAdjacentHTML("afterbegin", $iconJavaScript);
