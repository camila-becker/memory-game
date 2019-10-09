(function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign Up", true);
  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $emailCollabCode = emailCollabCode.render("E-mail", "email");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $emailCollabCode);
})();
