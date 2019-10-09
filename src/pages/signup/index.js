(function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign Up", true);
  const $logoCollabCode = logoCollabCode.render();
  const $titleCollabCode = titleCollabCode.render("Welcome!");
  const $labelCollabCode = labelCollabCode.render("E-mail");
  const $emailCollabCode = emailCollabCode.render("email");

  const $logoWrapper = logoWrapper.render($logoCollabCode, $titleCollabCode);
  const $formWrapper = formWrapper.render($labelCollabCode, $emailCollabCode);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formWrapper);
})();
