const inputCollabCode = (function() {
  const module = {};

  module._email = () => {
    const email = "camila.becker01@gmail.com";
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log("Email: ", regex.test(email));
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode{
        font-size: 18px;
        font-weight: bold;
        color: #3a4042;
        width: 100%;
        border-bottom: 2px solid rgba(58, 64, 66,0.5);
        padding: 12px 0 12px 0;
      }    
    `;

    $head.insertBefore($style, null);
  };

  module.render = ({ type = "text", placeholder = "", id = "" }) => {
    module._email();
    module._style();

    return `  
      <input id="${id}" type="${type}" class="input-collabcode" placeholder="${placeholder}"/>   
    `;
  };

  return {
    render: module.render
  };
})();
