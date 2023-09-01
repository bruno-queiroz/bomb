export const generateCard = () => ({
  isBomb: false,
  cardIndex: 0,
  isCardRotated: false,
});

export type Card = ReturnType<typeof generateCard>;
