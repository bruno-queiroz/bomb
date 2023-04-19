import { gameModes } from "../pages/GameMode";

export const getGameModeValues = () => {
  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const gameModeQuery = Number(searchParams.get("gm"));
  const gameModeSelected = gameModes?.find(
    (gameMode) => gameMode.mode === gameModeQuery
  );
  return gameModeSelected;
};
