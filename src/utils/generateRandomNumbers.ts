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
    const isRandomNumberUnique = randomNumbersArray.every(
      (randomNumberAlreadySelected) =>
        randomNumberAlreadySelected !== randomNumber
    );

    if (isRandomNumberUnique) {
      randomNumbersArray.push(randomNumber);
    } else {
      while (true) {
        const newRandomNumber = generateRandomNumber(cardAmount);
        const isNewRandomNumberUnique = randomNumbersArray.every(
          (randomNumberAlreadySelected) =>
            randomNumberAlreadySelected !== newRandomNumber
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

const generateRandomNumber = (limit: number) => {
  const generateRandomNumber = Math.ceil(Math.random() * limit);
  return generateRandomNumber;
};
