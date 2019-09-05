const createMemoryCard = card => `
  <article class="memory-card ${card.nameClass}">
    <img 
      class="icon" 
      src="${card.src}" 
      alt="${card.alt}"
      onClick = "handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("Clicado");
