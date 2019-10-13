const pageError = (function(){

  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      body{
        background-color: #acacac;
      }
      .page-error{
        width: 100%;
        display: flex;
      }

      .error{
        color: #3a4042;
        font-size: 30px;
        text-align: center;
        padding: 10px;
        margin: auto;
      }

      .icon{
        display: flex;
        margin: auto;
        padding: 20px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = error => {
    module._style();
    return `
      <img src="img/icon-collabcode.png" class="icon" />
      <div class="page-error">
        <h1 class="error">${error}</h1> 
      </div>   
    `;
  };

  return {
    render: module.render
  };

})();