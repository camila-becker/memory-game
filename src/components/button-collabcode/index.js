const buttonCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-collabcode{
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 15px;
        width: 302px;
        height: 48px;
        border-radius: 24px;
        margin-bottom: 36px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <button class="button-collabcode">${content}</button>    
    `;
  };

  return {
    render: module.render
  };
})();
