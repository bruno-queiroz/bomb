import React, { useState } from "react";
import {
  GiRollingBomb as BombLogoIcon,
  GiGoldBar as GoldIcon,
  GiFireBomb as BombIcon,
} from "react-icons/gi";
import { Deck } from "../pages/Bomb";
import { useBombStore } from "../store/store";

const CardFlip = ({ isBomb, isCardRotated, cardIndex }: Deck) => {
  const deck = useBombStore((state) => state.deck);
  const playerMoves = useBombStore((state) => state.playerMoves);
  const incrementPlayerMoves = useBombStore(
    (state) => state.incrementPlayerMoves
  );
  const setDeck = useBombStore((state) => state.setDeck);
  const setIsEndMatchModalOpen = useBombStore(
    (state) => state.setIsEndMatchModalOpen
  );

  const flipAllCards = () => {
    deck.forEach((card, index) => {
      if (!card.isCardRotated) {
        setTimeout(() => {
          const updatedDeck = [...deck];
          updatedDeck[index].isCardRotated = true;
          setDeck(updatedDeck);
        }, index * 80);
      }
    });
  };

  const rotateCard = () => {
    if (deck[cardIndex].isBomb) {
      flipAllCards();
      setTimeout(() => setIsEndMatchModalOpen(true), deck.length * 80 + 150);
      return;
    }

    if (playerMoves >= 3 - 1) {
      flipAllCards();
      setTimeout(() => setIsEndMatchModalOpen(true), deck.length * 80 + 150);

      return;
    }
    const updatedDeck = [...deck];
    updatedDeck[cardIndex] = { ...updatedDeck[cardIndex], isCardRotated: true };
    setDeck(updatedDeck);
    incrementPlayerMoves();
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
        <div
          className={`grid place-items-center absolute h-full w-full back-face rounded-lg rotate-y ${
            isBomb ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {isBomb ? (
            <div className="text-4xl text-white">
              <BombIcon />
            </div>
          ) : (
            <div className="text-4xl text-amber-400">
              <GoldIcon />
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default CardFlip;
