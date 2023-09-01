import { generateCard } from "../models/card";

export const createCard = (index: number) => {
  const card = generateCard();
  card.cardIndex = index;

  return card;
};
