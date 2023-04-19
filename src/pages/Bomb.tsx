import { useEffect } from "react";
import CardFlip from "../components/CardFlip";
import { useBombStore } from "../store/store";
import EndMatchModal from "../components/EndMatchModal";

export interface Deck {
  isBomb: boolean;
  isCardRotated: boolean;
  cardIndex: number;
}

const Bomb = () => {
  const deck = useBombStore((state) => state.deck);
  const resetMatch = useBombStore((state) => state.resetMatch);

  useEffect(() => {
    resetMatch();
  }, []);

  return (
    <section className="flex justify-center items-center pt-12 p-4 pb-8">
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
