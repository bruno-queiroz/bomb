import { Card } from "../models/card";

export const flipAllCardsDown = (
  cardAmount: number,
  createCard: (index: number) => Card
) => {
  const deck = Array.from({ length: cardAmount }, (_, index) =>
    createCard(index)
  );
  return deck;
};
