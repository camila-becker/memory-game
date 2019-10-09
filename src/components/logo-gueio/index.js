const logoGueio = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");

    $style.textContent = `

      .logo-gueio{
        width: 252px;
        height: 252px;  
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 40%);
        border-radius: 100%;
      }

      .icon{
        width: 171px;
        height: 175px;
        position: absolute;
        top:0;
        left: 50%; 
        transform: translate(-50%, 20%);      
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
    <div class="logo-gueio">
      <img class="icon" src="img/icon-collabcode.png" alt="Logo CollabCode"/>  
    </div>
      `;
  };

  return {
    render: module.render
  };
})();
