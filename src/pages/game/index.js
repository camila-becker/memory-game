const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode"
);
const $cardJS = createMemoryCard(
  "img/-icon-js.png",
  "Ícone de um livro JavaScript",
  "-front"
);

const $cardWoman = createMemoryCard(
  "img/icon-woman.png",
  "Ícone de uma mulher programando",
  "-front"
);

const $cardResponsive = createMemoryCard(
  "img/icon-responsivo.png",
  "Ícone sobre Layout Responsivo",
  "-front"
);

const $cardPHP = createMemoryCard(
  "img/icon-php.png",
  "Ícone de um livro PHP",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
