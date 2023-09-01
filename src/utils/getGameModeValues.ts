import { gameModes as gameModesData } from "../models/gameModes";

export const getGameModeValues = (
  queryString: string,
  gameModes = gameModesData
) => {
  const searchParams = new URLSearchParams(queryString);

  const gameModeQuery = Number(searchParams.get("gm"));

  const gameModeSelected = gameModes?.find(
    (gameMode) => gameMode.mode === gameModeQuery
  );

  if (!gameModeSelected) {
    return gameModes[0];
  }

  return gameModeSelected;
};
