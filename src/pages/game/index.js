const $root = document.querySelector("#root");

const memoryCard = {
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
};

const cardJS = {
  nameClass: "-front",
  src: "img/-icon-js.png",
  alt: "Ícone de um livro JavaScript"
};

const cardWoman = {
  nameClass: "-front",
  src: "img/icon-woman.png",
  alt: "Ícone de uma mulher programando"
};

const cardResponsive = {
  nameClass: "-front",
  src: "img/icon-responsivo.png",
  alt: "Ícone sobre Layout Responsivo"
};

const cardPHP = {
  nameClass: "-front",
  src: "img/icon-php.png",
  alt: "Ícone de um livro PHP"
};

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(memoryCard);

const $cardJS = createMemoryCard(cardJS);

const $cardWoman = createMemoryCard(cardWoman);

const $cardResponsive = createMemoryCard(cardResponsive);

const $cardPHP = createMemoryCard(cardPHP);

$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
