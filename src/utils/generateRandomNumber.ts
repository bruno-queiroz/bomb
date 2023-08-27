export const generateRandomNumber = (limit: number) => {
  const generateRandomNumber = Math.ceil(Math.random() * limit);
  return generateRandomNumber;
};
