import { generateRandomNumbers } from "./generateRandomNumbers";

export const createDeck = (cardsAmount: number, numberOfBombs: number) => {
  const randomNumbers = generateRandomNumbers(numberOfBombs);
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
