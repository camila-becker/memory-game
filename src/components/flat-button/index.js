const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button{
        background-color: #eae6da;
        width: 186px;
        height: 176px;
        font-size: 24px;
        font-weight: bold;
        color: #fffcee;
        text-transform: uppercase;
        line-height: 27px;
        
      }

      .flat-button.-active{
        background-color: #f25a70;
        color: #fff;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content, active) => {
    module._style();
    return `
      <button class="flat-button ${active}">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
