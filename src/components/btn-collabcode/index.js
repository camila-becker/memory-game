const btnCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode{
        background-color: #f25a70;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 15px;
        width: 100%;
        height: 48px;
        border-radius: 24px;
        cursor: pointer;
      }

      .input-collabcode + .btn-collabcode{
        margin-top: 45px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `
      <input type="submit" class="btn-collabcode" value="${content}"/>    
    `;
  };

  return {
    render: module.render
  };
})();
