import { Card } from "../models/card";

export const createDeck = (
  randomNumbers: number[],
  cardsAmount: number,
  createCard: (index: number) => Card
) => {
  const deck = Array.from({ length: cardsAmount }, (_, index) =>
    createCard(index)
  );

  randomNumbers.forEach((randomNumber) => {
    deck[randomNumber - 1] = { ...deck[randomNumber - 1], isBomb: true };
  });

  return deck;
};
