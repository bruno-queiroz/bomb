import React, { useEffect, useState } from "react";
import CardFlip from "../components/CardFlip";
import { createDeck } from "../utils/createDeck";
import { useBombStore } from "../store/store";

export interface Deck {
  isBomb: boolean;
  isCardRotated: boolean;
  cardIndex: number;
}

const Bomb = () => {
  const deck = useBombStore((state) => state.deck);
  const setDeck = useBombStore((state) => state.setDeck);

  useEffect(() => {
    setDeck(createDeck(12));
  }, []);

  return (
    <section className="flex justify-center items-center pt-12">
      <div className="flex gap-4 flex-wrap justify-center max-w-[500px]">
        {deck?.map((card, index) => (
          <CardFlip {...card} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Bomb;
