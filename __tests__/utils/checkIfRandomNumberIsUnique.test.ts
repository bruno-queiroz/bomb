import { describe, expect, it } from "vitest";
import { checkIfRandomNumberIsUnique } from "../../src/utils/checkIfRandomNumberIsUnique";

describe("Testing checkIfRandomNumberIsUnique utility function", () => {
  it("Should return true if all numbers are unique", () => {
    const randomNumbersArray = [1, 2];
    const newRandomNumber = 3;

    const isNewRandomNumberUnique = checkIfRandomNumberIsUnique(
      randomNumbersArray,
      newRandomNumber
    );

    expect(isNewRandomNumberUnique).toBe(true);
  });
  it("Should return false if numbers are not unique", () => {
    const randomNumbersArray = [1, 2];
    const newRandomNumber = 2;

    const isNewRandomNumberUnique = checkIfRandomNumberIsUnique(
      randomNumbersArray,
      newRandomNumber
    );

    expect(isNewRandomNumberUnique).toBe(false);
  });
});
