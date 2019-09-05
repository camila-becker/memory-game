const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $styleMemoryCard = styleMemoryCard();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
});

const $cardJS = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-js.png",
  alt: "Ícone de um livro JavaScript"
});

const $cardWoman = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-woman.png",
  alt: "Ícone de uma mulher programando"
});

const $cardResponsive = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-responsivo.png",
  alt: "Ícone sobre Layout Responsivo"
});

const $cardPHP = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-php.png",
  alt: "Ícone de um livro PHP"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
