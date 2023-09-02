import { createDeck } from "../../src/utils/createDeck";
import { createCard } from "../../src/utils/createCard";
import { Card } from "../../src/models/card";

describe("Testing createDeck utility function", () => {
  it("Should return an array with the length of the cardsAmount", () => {
    const firstDeckData: [number[], number, (index: number) => Card] = [
      [1, 4, 6],
      12,
      createCard,
    ];
    const secondDeckData: [number[], number, (index: number) => Card] = [
      [1, 2, 3],
      20,
      createCard,
    ];
    const thirdDeckData: [number[], number, (index: number) => Card] = [
      [1, 2, 3],
      30,
      createCard,
    ];

    const firstDeck = createDeck(...firstDeckData);
    const secondDeck = createDeck(...secondDeckData);
    const thirdDeck = createDeck(...thirdDeckData);

    expect(firstDeck.length).toBe(firstDeckData[1]);
    expect(secondDeck.length).toBe(secondDeckData[1]);
    expect(thirdDeck.length).toBe(thirdDeckData[1]);
  });
  it("Should return the right amount of isBomb true accordingly with the randomNumbers amount", () => {
    const firstDeckData: [number[], number, (index: number) => Card] = [
      [1, 4, 6],
      12,
      createCard,
    ];
    const secondDeckData: [number[], number, (index: number) => Card] = [
      [1, 2, 3, 6, 7, 12, 9],
      20,
      createCard,
    ];
    const thirdDeckData: [number[], number, (index: number) => Card] = [
      [1, 2, 3, 4, 5],
      30,
      createCard,
    ];

    const firstDeck = createDeck(...firstDeckData);
    const secondDeck = createDeck(...secondDeckData);
    const thirdDeck = createDeck(...thirdDeckData);

    const filterIsBombTrue1 = firstDeck.filter((card) => card.isBomb);
    const filterIsBombTrue2 = secondDeck.filter((card) => card.isBomb);
    const filterIsBombTrue3 = thirdDeck.filter((card) => card.isBomb);

    expect(filterIsBombTrue1.length).toBe(firstDeckData[0].length);
    expect(filterIsBombTrue2.length).toBe(secondDeckData[0].length);
    expect(filterIsBombTrue3.length).toBe(thirdDeckData[0].length);
  });
  it("Should return an array with the property isBomb set to true on specific indexes", () => {
    const firstDeckData: [number[], number, (index: number) => Card] = [
      [1, 4, 6],
      12,
      createCard,
    ];
    const secondDeckData: [number[], number, (index: number) => Card] = [
      [1, 2, 3, 9, 16],
      20,
      createCard,
    ];

    const firstDeck = createDeck(...firstDeckData);
    const secondDeck = createDeck(...secondDeckData);

    const areBombsOnRightIndexes1 = firstDeckData[0].every(
      (randomNumb) => firstDeck[randomNumb - 1].isBomb
    );
    const areBombsOnRightIndexes2 = secondDeckData[0].every(
      (randomNumb) => secondDeck[randomNumb - 1].isBomb
    );

    expect(areBombsOnRightIndexes1).toBe(true);
    expect(areBombsOnRightIndexes2).toBe(true);
  });
  it("All card's indexes should be in incremental order", () => {
    const firstDeckData: [number[], number, (index: number) => Card] = [
      [1, 4, 6],
      12,
      createCard,
    ];

    const firstDeck = createDeck(...firstDeckData);

    firstDeck.forEach((card, i) => {
      expect(card.cardIndex).toBe(i);
    });
  });
});
