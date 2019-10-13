(function() {
  const {hash} = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/404"] = status404;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;

  if (paths[hash] === undefined){
    paths["#/404"]();
  }else{
    paths[hash]();
  }
  
})();
