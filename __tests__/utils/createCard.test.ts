import { generateCard } from "../../src/models/card";
import { createCard } from "../../src/utils/createCard";

describe("Testing createCard utility function", () => {
  it("Should return a card object with the right properties", () => {
    const rightCard = generateCard();

    const newCard = createCard(1);

    expect(Object.keys(newCard)).toStrictEqual(Object.keys(rightCard));
  });
  it("Should return a card object with a cardIndex property with the same value passed by prop", () => {
    const indexProp = 4;

    const card = createCard(indexProp);

    expect(card.cardIndex).toBe(indexProp);
  });
});
