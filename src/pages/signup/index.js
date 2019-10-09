(function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign Up", true);
  const $signupTitle = signupTitle.render("Welcome!");
  const $logoGueio = logoGueio.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $signupTitle);
  $root.insertAdjacentHTML("beforeend", $logoGueio);
})();
