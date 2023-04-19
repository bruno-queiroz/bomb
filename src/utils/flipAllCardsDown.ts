import { getGameModeValues } from "./getGameModeValues";

export const flipAllCardsDown = () => {
  const cardAmount = getGameModeValues()?.mode || 12;
  const deck = Array.from({ length: cardAmount }, (_, index) => ({
    isBomb: false,
    cardIndex: index,
    isCardRotated: false,
  }));
  return deck;
};
