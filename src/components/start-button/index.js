const startButton = (function() {
  const module = {};

  module.create = () => {
    return `
      <button class="start-button">Start</button>
    `;
  };
  return {
    create: module.create
  };
})();
