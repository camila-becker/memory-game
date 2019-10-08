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
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <button class="flat-button">${content}</button>
    `;
  };

  return {
    render: module.render
  };
})();
