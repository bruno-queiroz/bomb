import { generateRandomNumbers } from "../../src/utils/generateRandomNumbers";

describe("Integration testing generateRandomNumbers utility function", () => {
  it("Should generate an array with the same amount of bombs requested", () => {
    const randomArray1 = generateRandomNumbers(3, 12);
    const randomArray2 = generateRandomNumbers(6, 24);
    const randomArray3 = generateRandomNumbers(12, 30);

    expect(randomArray1.length).toBe(3);
    expect(randomArray2.length).toBe(6);
    expect(randomArray3.length).toBe(12);
  });
});
