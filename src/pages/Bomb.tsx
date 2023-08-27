import { useEffect } from "react";
import CardFlip from "../components/CardFlip";
import { useBombStore } from "../store/store";
import EndMatchModal from "../components/EndMatchModal";
import { flipAllCardsDown } from "../utils/flipAllCardsDown";

export interface Deck {
  isBomb: boolean;
  isCardRotated: boolean;
  cardIndex: number;
}

const Bomb = () => {
  const deck = useBombStore((state) => state.deck);
  const setDeck = useBombStore((state) => state.setDeck);
  const setIsEndMatchModalOpen = useBombStore(
    (state) => state.setIsEndMatchModalOpen
  );
  const resetMatch = useBombStore((state) => state.resetMatch);
  const CARD_FLIP_ANIMATION_TIME = 300;

  useEffect(() => {
    setIsEndMatchModalOpen(false);
    setDeck(flipAllCardsDown());
    setTimeout(() => {
      resetMatch();
    }, CARD_FLIP_ANIMATION_TIME);
  }, []);

  return (
    <section className="flex justify-center items-center pt-24 p-4 pb-8">
      <EndMatchModal />
      <div
        className={`flex gap-4 flex-wrap justify-center ${
          deck.length > 12 ? "max-w-[600px]" : "max-w-[500px]"
        }`}
      >
        {deck?.map((card, index) => (
          <CardFlip {...card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Bomb;
