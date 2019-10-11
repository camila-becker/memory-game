const eyeCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode{
        display: block;
        text-indent: -9999px;
        background: url(/img/eye.png) no-repeat center;
        width: 23px;
        height: 15px;
        transform: translateY(-150%);
        margin-left: auto;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
      <label class="eye-collabcode">Mostrar senha</label>
    `;
  };

  return {
    render: module.render
  };
})();
