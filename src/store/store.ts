import { create } from "zustand";
import { Deck } from "../pages/Bomb";

interface BombState {
  deck: Deck[];
  playerMoves: number;
  isEndMatchModalOpen: boolean;
  setDeck: (newDeck: Deck[]) => void;
  incrementPlayerMoves: () => void;
  setIsEndMatchModalOpen: (state: boolean) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  playerMoves: 0,
  isEndMatchModalOpen: false,
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
  incrementPlayerMoves: () =>
    set((state) => ({ playerMoves: state.playerMoves + 1 })),
  setIsEndMatchModalOpen: (boolean) =>
    set((state) => ({ isEndMatchModalOpen: boolean })),
}));
