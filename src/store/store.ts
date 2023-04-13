import { create } from "zustand";
import { Deck } from "../pages/Bomb";

interface BombState {
  deck: Deck[];
  setDeck: (newDeck: Deck[]) => void;
}

export const useBombStore = create<BombState>()((set) => ({
  deck: [],
  setDeck: (newDeck) => set((state) => ({ deck: newDeck })),
}));
