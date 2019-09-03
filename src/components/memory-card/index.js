const createMemoryCard = nameClass => `
  <article class="memory-card ${nameClass}">
    <img 
      class="icon" 
      src="${
        nameClass == "-front" ? "img/-icon-js.png" : "img/icon-collabcode.png"
      }" 
      alt="${
        nameClass == "-front"
          ? "Íconde de um livro de JavaScript"
          : "Gueio mascote da CollabCode"
      }"
      onClick = "handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("Clicado");
