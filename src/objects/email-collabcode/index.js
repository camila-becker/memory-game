const emailCollabCode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

      .email-collabcode{
        font-size: 16px;
        color: rgba(58, 64, 66,0.5);
        margin-left: 35px;
      }

      .email-collabcode > .email{
        font-size: 18px;
        color: #3a4042;
        width: 302px;
        border: none;
        border-bottom: 2px solid rgba(58, 64, 66,0.5);
        margin-left: 35px;
        padding-top: 10px;
        padding-bottom: 8px;
      }
    
    `;

    $head.insertBefore($style, null);
  };

  module.render = (component, type) => {
    module._style();
    return `  
      <label class="email-collabcode">
        ${component}
        <input class="email" type=${type}>
      </label>   
    `;
  };

  return {
    render: module.render
  };
})();
