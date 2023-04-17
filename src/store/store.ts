import { create } from "zustand";
import { Deck } from "../pages/Bomb";
import { createDeck } from "../utils/createDeck";

interface BombState {
  deck: Deck[];
  playerMoves: number;
  isEndMatchModalOpen: boolean;
  didPlayerWin: boolean | null;
  setDeck: (newDeck: Deck[]) => void;
  incrementPlayerMoves: () => void;
  resetMatch: () => void;
  setIsEndMatchModalOpen: (state: boolean) => void;
  setDidPlayerWin: (boolean: boolean) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  playerMoves: 0,
  isEndMatchModalOpen: false,
  didPlayerWin: null,
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
  incrementPlayerMoves: () =>
    set((state) => ({ playerMoves: state.playerMoves + 1 })),
  resetMatch: () => {
    set((state) => ({
      playerMoves: 0,
      isEndMatchModalOpen: false,
      deck: createDeck(12),
      didPlayerWin: null,
    }));
  },
  setIsEndMatchModalOpen: (boolean) =>
    set((state) => ({ isEndMatchModalOpen: boolean })),
  setDidPlayerWin: (boolean) => set((state) => ({ didPlayerWin: boolean })),
}));
