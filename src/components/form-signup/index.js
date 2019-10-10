const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup{padding: 0 35px 40px;}
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $usernameLabel = labelCollabCode.render("Username");
    const $usernameInput = inputCollabCode.render("text");

    const $emailLabel = labelCollabCode.render("E-mail");
    const $emailInput = inputCollabCode.render("email");

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render("password");

    const $confirmPasswordLabel = labelCollabCode.render("Confirm password");
    const $confirmPasswordInput = inputCollabCode.render("password");

    const $btnCollabCode = btnCollabCode.render("Submit");

    return `
      ${$usernameLabel}
      ${$usernameInput}

      ${$emailLabel}
      ${$emailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$btnCollabCode}
    `;
  };

  module.render = () => {
    module._style();
    return `
      <form action ="" method="POST" class="form-signup">
        ${module._children()}
      </form>
    `;
  };

  return {
    render: module.render
  };
})();
