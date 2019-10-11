const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login{
        padding: 0 35px 40px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $usernameOrEmailLabel = labelCollabCode.render("Username or e-mail");
    const $usernameOrEmailInput = inputCollabCode.render(
      "text",
      "example@email.com"
    );

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabCode.render("password", "********");

    const $textCollabCode = textCollabCode.render("Forgot password?");

    const $btnLogin = btnCollabCode.render("Login");

    return `
      ${$usernameOrEmailLabel}
      ${$usernameOrEmailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$textCollabCode}

      ${$btnLogin}   
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form action="" method="GET" class="form-login">
        ${module._children()}
      </form>    
    `;
  };

  return {
    render: module.render
  };
})();
