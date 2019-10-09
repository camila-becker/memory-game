const formWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-wrapper{
        margin: 0 35px 0 35px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = (...$children) => {
    module._style();
    return `
      <form class="form-wrapper">
        ${$children.join("")}
      </form>
    `;
  };

  return {
    render: module.render
  };
})();
