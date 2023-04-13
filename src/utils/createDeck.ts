import { generateRandomNumbers } from "./generateRandomNumbers";

export const createDeck = (cardsAmount: number) => {
  const randomNumbers = generateRandomNumbers(3);

  const deck = Array.from({ length: cardsAmount }, (_, index) => ({
    isBomb: false,
    cardIndex: index,
    isCardRotated: false,
  }));

  randomNumbers.forEach((randomNumber) => {
    deck[randomNumber] = { ...deck[randomNumber], isBomb: true };
  });

  return deck;
};
