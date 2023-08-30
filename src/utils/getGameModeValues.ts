import { gameModes } from "../modes/gameModes";

export const getGameModeValues = (queryString: string) => {
  const searchParams = new URLSearchParams(queryString);

  const gameModeQuery = Number(searchParams.get("gm"));

  const gameModeSelected = gameModes?.find(
    (gameMode) => gameMode.mode === gameModeQuery
  );

  return gameModeSelected;
};
