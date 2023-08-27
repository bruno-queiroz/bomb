export const checkIfRandomNumberIsUnique = (
  randomNumbersArray: number[],
  newRandomNumber: number
) => {
  const isUnique = randomNumbersArray.every(
    (randomNumberAlreadySelected) =>
      randomNumberAlreadySelected !== newRandomNumber
  );

  return isUnique;
};
