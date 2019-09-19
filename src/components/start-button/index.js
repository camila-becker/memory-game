const startButton = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");
    $style.textContent = `
      .start-button{
        border: 3px solid #fffcee;
        background-color: #3a4042;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        position: absolute;
        bottom: 0;
        font-family: "Manjari", sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        line-height: 70px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module._style();
    return `
      <button class="start-button">Start</button>
    `;
  };
  return {
    create: module.create
  };
})();
