const layerStart = (function() {
  const module = {};

  module.handleClick = $component => $component.remove();

  module.render = () => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render("Start");

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$transparencyLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
