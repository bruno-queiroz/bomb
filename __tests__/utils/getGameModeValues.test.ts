import { getGameModeValues } from "../../src/utils/getGameModeValues";
import { gameModesMock } from "../mocks/gameMode";

describe("Testing getGameModeValues utility function", () => {
  it("Should return the first mode", () => {
    const firstModeObj = gameModesMock[0];

    const mode = getGameModeValues("?gm=12", gameModesMock);

    expect(mode).toMatchObject(firstModeObj);
  });
  it("Should return the second mode", () => {
    const secondModeObj = gameModesMock[1];

    const mode = getGameModeValues("?gm=20", gameModesMock);

    expect(mode).toMatchObject(secondModeObj);
  });
  it("Should return first mode when search params are not valid", () => {
    const firstModeObj = gameModesMock[0];

    const mode = getGameModeValues("", gameModesMock);

    expect(mode).toMatchObject(firstModeObj);
  });
});
