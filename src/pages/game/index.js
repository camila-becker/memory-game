const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const createMemoryCard = memoryCard();

const $cardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro JavaScript"
});

const $cardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Ícone de uma mulher programando"
});

const $cardResponsive = createMemoryCard({
  src: "img/icon-responsivo.png",
  alt: "Ícone sobre Layout Responsivo"
});

const $cardPHP = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Ícone de um livro PHP"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardResponsive);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
