const textCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .text-collabcode{
        font-size: 14px;
        text-align: right;
        color: rgba(58, 64, 66,0.7);
        padding: 40px 0 110px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();

    return `
      <p class="text-collabcode">${content}</p>    
    `;
  };

  return {
    render: module.render
  };
})();
