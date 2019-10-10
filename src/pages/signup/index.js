(function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign Up", true);
  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");

  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $formWrapper = formWrapper.render(
    labelCollabCode.render("Username"),
    inputCollabCode.render("text"),
    labelCollabCode.render("E-mail"),
    inputCollabCode.render("email"),
    labelCollabCode.render("Password"),
    inputCollabCode.render("password"),
    labelCollabCode.render("Confirm Password"),
    inputCollabCode.render("password"),
    buttonCollabCode.render("Submit")
  );

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formWrapper);
})();
