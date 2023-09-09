export const calculateGoldXAndYLocation = (
  earnedGoldRef: React.RefObject<HTMLDivElement>,
  setFloatGoldIconTopPosition: React.Dispatch<React.SetStateAction<number>>
) => {
  const root: HTMLDivElement | null = document.querySelector(":root");
  const goldCounter = document.querySelector("#gold-counter");

  if (!root || !earnedGoldRef.current || !goldCounter) return;

  const goldCounterLocation = goldCounter?.getBoundingClientRect();
  const earnedGoldLocation = earnedGoldRef.current?.getBoundingClientRect();

  const earnedGoldTopLocation = earnedGoldLocation.top;
  const goldCounterLeftLocation = goldCounterLocation?.left;
  const goldCounterTopLocation = goldCounterLocation?.top;
  const middleOfTheBody = root?.getBoundingClientRect().width / 2;

  const middleOfGoldCounterHorizontally = goldCounterLocation?.width / 2;

  setFloatGoldIconTopPosition(earnedGoldTopLocation);

  root.style.setProperty(
    "--y-location",
    `-${earnedGoldTopLocation - goldCounterTopLocation}px`
  );
  root!.style.setProperty(
    "--x-location",
    `${
      goldCounterLeftLocation -
      middleOfTheBody +
      middleOfGoldCounterHorizontally
    }px`
  );
};
