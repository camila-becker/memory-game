function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      background-color: #f25a70;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      width: 155px;
      height: 155px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
   }

    .memory-card > .icon {
      width: 100px;
      height: 100px;
   }

    .memory-card.-front {
      background-color: #fff;
   }

    .memory-card.-front::before {
      content: "";
      background-color: #d4d4d4;
      width: 95px;
      height: 95px;
      border-radius: 100%;
      position: absolute;
   }

    .memory-card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
   }
 `;

  $head.insertBefore($style, null);

  return ({ nameClass, src, alt }) => `
    <article class="memory-card ${nameClass}">
        <img 
          class="icon" 
          src="${src}" 
          alt="${alt}"
          onClick = "handleClick()"
        />
    </article>
  `;
}

const handleClick = () => console.log("Clicado");
