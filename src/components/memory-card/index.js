const createMemoryCard = () => `
    <article  class="memory-card">
      <img 
        class='icon' 
        src='img/icon-collabcode.png' 
        alt='Gueio Mascote da CollabCode'
        onClick = "handleClick()"
      />
    </article>
  `;

const createMemoryCardFront = () => `
    <article class="memory-card -front">
      <img 
        class='icon'
        src='img/-icon-js.png' 
        alt='Ícone de um livro da linguagem JavaScript' 
        onClick="handleClick()"
      />      
    </article>
  `;

function handleClick() {
  console.log("Clicado");
}
