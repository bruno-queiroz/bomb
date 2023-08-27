import { checkIfRandomNumberIsUnique } from "./checkIfRandomNumberIsUnique";
import { generateRandomNumber } from "./generateRandomNumber";

export const generateRandomNumbers = (
  bombAmount: number,
  cardAmount: number
) => {
  const randomNumbersArray: number[] = [];

  for (let index = 0; index < bombAmount; index++) {
    const randomNumber = generateRandomNumber(cardAmount);

    if (randomNumbersArray.length === 0) {
      randomNumbersArray.push(randomNumber);
      continue;
    }

    const isRandomNumberUnique = checkIfRandomNumberIsUnique(
      randomNumbersArray,
      randomNumber
    );

    if (isRandomNumberUnique) {
      randomNumbersArray.push(randomNumber);
    } else {
      while (true) {
        const newRandomNumber = generateRandomNumber(cardAmount);

        const isNewRandomNumberUnique = checkIfRandomNumberIsUnique(
          randomNumbersArray,
          newRandomNumber
        );

        if (isNewRandomNumberUnique) {
          randomNumbersArray.push(newRandomNumber);
          break;
        }
      }
    }
  }
  return randomNumbersArray;
};
