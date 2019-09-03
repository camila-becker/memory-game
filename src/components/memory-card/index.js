function createMemoryCard() {
  /*Coloca toda a tag dentro da variavel em formato de string, 
com template string*/
  const $memoryCard = `
    <article  class="memory-card">
      <img 
        class='icon' 
        src='img/icon-collabcode.png' 
        alt='Gueio Mascote da CollabCode'
        onClick = "handleClick()"
      />
    </article>
  `;

  return $memoryCard;
}

function createMemoryCardFront() {
  /*Coloca toda a tag dentro da variavel em formato de string, 
com template string*/
  const $memoryCardFront = `
    <article class="memory-card -front">
      <img 
        class='icon'
        src='img/-icon-js.png' 
        alt='Ícone de um livro da linguagem JavaScript' 
        onClick="handleClick()"
      />      
    </article>
  `;
  return $memoryCardFront;
}

function handleClick() {
  console.log("Clicado");
}
