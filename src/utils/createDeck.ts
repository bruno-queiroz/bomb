import { generateRandomNumbers } from "./generateRandomNumbers";

export const createDeck = (cardsAmount: number) => {
  const randomNumbers = generateRandomNumbers(3);
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
