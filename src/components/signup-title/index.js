const signupTitle = (function() {
  const module = {};

  module._style = () => {
    const $style = document.createElement("style");
    const $head = document.querySelector("head");

    $style.textContent = `

      .signup-title{
        font-size: 24px;
        color: #f25a70;
        text-align: center;
        text-transform: uppercase;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%);
        z-index: 5;
      }
    
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._style();
    return `    
      <h1 class="signup-title">${content}</h1>
    `;
  };

  return {
    render: module.render
  };
})();
