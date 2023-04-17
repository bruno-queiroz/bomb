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

  const INTERVAL_BETWEEN_FLIP_A_CARD = 80;
  const INTERVAL_TO_START_FLIPPING_ALL_CARDS = 400;
  const INTERVAL_TO_SHOW_MODAL = 1000;

  const flipAllCards = (lastCardFlippedIndex: number) => {
    deck.forEach((card, index) => {
      if (!card.isCardRotated) {
        if (lastCardFlippedIndex === index) return;
        setTimeout(() => {
          const updatedDeck = [...deck];
          updatedDeck[index].isCardRotated = true;
          updatedDeck[lastCardFlippedIndex].isCardRotated = true;
          setDeck(updatedDeck);
        }, index * INTERVAL_BETWEEN_FLIP_A_CARD);
      }
    });
  };

  const flipOneCard = () => {
    const updatedDeck = [...deck];
    updatedDeck[cardIndex] = { ...updatedDeck[cardIndex], isCardRotated: true };
    setDeck(updatedDeck);
  };

  const rotateCard = () => {
    flipOneCard();
    if (deck[cardIndex].isBomb) {
      setTimeout(() => {
        flipAllCards(cardIndex);
      }, INTERVAL_TO_START_FLIPPING_ALL_CARDS);

      setTimeout(
        () => setIsEndMatchModalOpen(true),
        deck.length * INTERVAL_BETWEEN_FLIP_A_CARD + INTERVAL_TO_SHOW_MODAL
      );
      return;
    }

    if (playerMoves >= 3 - 1) {
      setTimeout(() => {
        flipAllCards(cardIndex);
      }, INTERVAL_TO_START_FLIPPING_ALL_CARDS);

      setTimeout(
        () => setIsEndMatchModalOpen(true),
        deck.length * INTERVAL_BETWEEN_FLIP_A_CARD + INTERVAL_TO_SHOW_MODAL
      );
      return;
    }
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
