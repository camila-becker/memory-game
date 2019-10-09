const emailCollabCode = (function() {
  const module = {};

  module._email = () => {
    const email = "camila.becker01@gmail.com";
    const regexp = new RegExp(/[@+]/i);
    const validation = regexp.exec(email);

    if (validation == "@") {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .email-collabcode{
        font-size: 18px;
        color: #3a4042;
        width: 302px;
        border: none;
        border-bottom: 2px solid rgba(58, 64, 66,0.5);
        padding-top: 10px;
        padding-bottom: 8px;
      }    
    `;

    $head.insertBefore($style, null);
  };

  module.render = content => {
    module._email();
    module._style();
    return `  
      <input class="email-collabcode" type=${content}>   
    `;
  };

  return {
    render: module.render
  };
})();
