/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♠", "♥ ", "♦", "♣"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "J",
    "Q",
    "K"
  ];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateRandomCard() {
    const card = document.querySelector(".card");
    const topSuit = card.querySelector(".top .suit");
    const bottomSuit = card.querySelector(".bottom .suit");
    const rank = card.querySelector(".middle .rank");

    const randomSuit = getRandomElement(suits);
    const randomRank = getRandomElement(ranks);

    topSuit.textContent = randomSuit;
    bottomSuit.textContent = randomSuit;
    rank.textContent = randomRank;
  }

  generateRandomCard();
};
