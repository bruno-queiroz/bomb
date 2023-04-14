import { create } from "zustand";
import { Deck } from "../pages/Bomb";

interface BombState {
  deck: Deck[];
  playerMoves: number;
  isEndMatchModalOpen: boolean;
  didPlayerWin: boolean;
  setDeck: (newDeck: Deck[]) => void;
  incrementPlayerMoves: () => void;
  setIsEndMatchModalOpen: (state: boolean) => void;
  setDidPlayerWin: (boolean: boolean) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  playerMoves: 0,
  isEndMatchModalOpen: false,
  didPlayerWin: false,
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
  incrementPlayerMoves: () =>
    set((state) => ({ playerMoves: state.playerMoves + 1 })),
  setIsEndMatchModalOpen: (boolean) =>
    set((state) => ({ isEndMatchModalOpen: boolean })),
  setDidPlayerWin: (boolean) => set((state) => ({ didPlayerWin: boolean })),
}));
