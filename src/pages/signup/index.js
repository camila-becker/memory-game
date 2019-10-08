(function() {
  const $root = document.querySelector("#root");
  const $flatButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign Up", "-active");

  $root.insertAdjacentHTML("beforeend", $flatButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
})();
