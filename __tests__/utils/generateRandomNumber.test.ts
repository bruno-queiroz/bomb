import { generateRandomNumber } from "../../src/utils/generateRandomNumber";

describe("Testing generateRandomNumber utility function", () => {
  it("Should not return a value higher than the limit", () => {
    const limit1 = 12;
    const limit2 = 6;
    const limit3 = 2;

    const randomNumber1 = generateRandomNumber(limit1);
    const randomNumber2 = generateRandomNumber(limit2);
    const randomNumber3 = generateRandomNumber(limit3);

    expect(randomNumber1).toBeLessThanOrEqual(limit1);
    expect(randomNumber2).toBeLessThanOrEqual(limit2);
    expect(randomNumber3).toBeLessThanOrEqual(limit3);
  });
});
