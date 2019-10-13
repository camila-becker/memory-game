const error = (function(){
  const $root = document.querySelector("#root");
  const $pageError = pageError.render("Error 404 - Not Found!");

  $root.insertAdjacentHTML("beforeend", $pageError);

});