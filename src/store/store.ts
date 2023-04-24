import { create } from "zustand";
import { Deck } from "../pages/Bomb";
import { createDeck } from "../utils/createDeck";
import { getGameModeValues } from "../utils/getGameModeValues";

interface BombState {
  deck: Deck[];
  playerMoves: number;
  isEndMatchModalOpen: boolean;
  didPlayerWin: boolean | null;
  golds: number;
  isFloatGoldIconOnScreen: boolean;
  setDeck: (newDeck: Deck[]) => void;
  incrementPlayerMoves: () => void;
  resetMatch: () => void;
  setIsEndMatchModalOpen: (state: boolean) => void;
  setDidPlayerWin: (boolean: boolean) => void;
  winGolds: (amount: number) => void;
  loseGolds: (amount: number) => void;
  setIsFloatGoldIconOnScreen: (boolean: boolean) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  playerMoves: 0,
  isEndMatchModalOpen: false,
  didPlayerWin: null,
  golds: Number(localStorage.getItem("golds")) || 100,
  isFloatGoldIconOnScreen: true,
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
  incrementPlayerMoves: () =>
    set((state) => ({ playerMoves: state.playerMoves + 1 })),
  resetMatch: () => {
    set((state) => ({
      playerMoves: 0,
      isEndMatchModalOpen: false,
      deck: createDeck(
        getGameModeValues()?.mode || 12,
        getGameModeValues()?.bombs || 3
      ),
      didPlayerWin: null,
      isFloatGoldIconOnScreen: true,
    }));
  },
  setIsEndMatchModalOpen: (boolean) =>
    set((state) => ({ isEndMatchModalOpen: boolean })),
  setDidPlayerWin: (boolean) => set((state) => ({ didPlayerWin: boolean })),
  winGolds: (amount) =>
    set((state) => {
      const currentGolds = state.golds + amount;
      localStorage.setItem("golds", currentGolds.toString());
      return { golds: currentGolds };
    }),
  loseGolds: (amount) =>
    set((state) => {
      const currentGolds = state.golds - amount;
      localStorage.setItem("golds", currentGolds.toString());
      return { golds: currentGolds };
    }),
  setIsFloatGoldIconOnScreen: (boolean) =>
    set((state) => ({ isFloatGoldIconOnScreen: boolean })),
}));
