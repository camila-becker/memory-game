const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id}{
        background-color: ${active ? "#f25a70" : "#eae6da"};
        width: 186px;
        height: 176px;
        font-size: 24px;
        font-weight: bold;
        color: ${active ? "#fff" : "#fffcee"};
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        float: left;
        padding-top:60px;
        box-sizing: border-box;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);
    return `
      <a href="" class="flat-button-${module._id}">${content}</a>
    `;
  };

  return {
    render: module.render
  };
})();
