const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");
    $style.textContent = `
      .game-button{
        border: 3px solid #fffcee;
        background-color: #47b384;
        border-radius: 50%;
        box-shadow: 0px 4px 8px #3a4042;
        width: 80px;
        height: 80px;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        text-transform: uppercase;
        font-family: "Manjari", sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: #fffcee;
        line-height: 85px;
        cursor: pointer;
      }
    `;
    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `
      <button class="game-button">${content}</button>
    `;
  };
  return {
    render: module.render
  };
})();
