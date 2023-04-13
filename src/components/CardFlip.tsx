import React, { useState } from "react";
import {
  GiRollingBomb as BombLogoIcon,
  GiGoldBar as GoldIcon,
} from "react-icons/gi";
import { Deck } from "../pages/Bomb";
import { useBombStore } from "../store/store";

const CardFlip = ({ isBomb, isCardRotated, cardIndex }: Deck) => {
  const deck = useBombStore((state) => state.deck);
  const setDeck = useBombStore((state) => state.setDeck);

  const rotateCard = () => {
    const updatedDeck = [...deck];
    updatedDeck[cardIndex] = { ...updatedDeck[cardIndex], isCardRotated: true };
    setDeck(updatedDeck);
  };

  return (
    <button
      className="w-[120px] h-[120px] perspective rounded-lg"
      onClick={rotateCard}
    >
      <div
        className={`h-full w-full relative transition duration-300 transform-style rounded-lg ${
          isCardRotated && "rotate-y"
        }`}
      >
        <div className="grid place-items-center absolute h-full w-full back-face rounded-lg bg-gray-950">
          <div className="flex items-center font-bold text-lg text-red-600">
            B<BombLogoIcon className="text-white" />
            mb
          </div>
        </div>
        <div className="grid place-items-center absolute h-full w-full back-face rounded-lg bg-green-500 rotate-y">
          <div className="text-4xl text-amber-400">
            <GoldIcon />
          </div>
        </div>
      </div>
    </button>
  );
};

export default CardFlip;
