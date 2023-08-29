import { generateRandomNumbers } from "./generateRandomNumbers";
import { getGameModeValues } from "./getGameModeValues";

export const createDeck = (cardsAmount: number, numberOfBombs: number) => {
  const randomNumbers = generateRandomNumbers(
    numberOfBombs,
    getGameModeValues(window.location.search)?.mode || 12
  );
  const deck = Array.from({ length: cardsAmount }, (_, index) => ({
    isBomb: false,
    cardIndex: index,
    isCardRotated: false,
  }));
  randomNumbers.forEach((randomNumber) => {
    deck[randomNumber - 1] = { ...deck[randomNumber - 1], isBomb: true };
  });

  return deck;
};
