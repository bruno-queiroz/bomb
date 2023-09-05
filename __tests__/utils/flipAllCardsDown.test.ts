import { createCard } from "../../src/utils/createCard";
import { flipAllCardsDown } from "../../src/utils/flipAllCardsDown";

describe("Testing flipAllCardsDown utility function", () => {
  it("Should return the right amount of cards", () => {
    const deck = flipAllCardsDown(12, createCard);

    expect(deck.length).toBe(12);
  });
  it("Should return all cads with isCardRotated being false", () => {
    const deck = flipAllCardsDown(12, createCard);

    const areAllNotCardsRotated = deck.every((card) => !card.isCardRotated);

    expect(areAllNotCardsRotated).toBe(true);
  });
});
