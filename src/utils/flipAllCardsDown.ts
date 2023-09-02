export const flipAllCardsDown = (cardAmount: number) => {
  const deck = Array.from({ length: cardAmount }, (_, index) => ({
    isBomb: false,
    cardIndex: index,
    isCardRotated: false,
  }));
  return deck;
};
