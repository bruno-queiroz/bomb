import { create } from "zustand";
import { Deck } from "../pages/Bomb";

interface BombState {
  deck: Deck[];
  playerMoves: number;
  incrementPlayerMoves: () => void;
  setDeck: (newDeck: Deck[]) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  playerMoves: 0,
  incrementPlayerMoves: () =>
    set((state) => ({ playerMoves: state.playerMoves + 1 })),
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
}));
