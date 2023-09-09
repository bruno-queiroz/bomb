import { useEffect, useRef, useState } from "react";

import { useBombStore } from "../store/store";
import { Link } from "react-router-dom";
import { flipAllCardsDown } from "../utils/flipAllCardsDown";
import { getGameModeValues } from "../utils/getGameModeValues";
import { GiGoldBar as GoldIcon } from "react-icons/gi";
import { createCard } from "../utils/createCard";
import { calculateGoldXAndYLocation } from "../utils/calculateGoldXAndYLocation";

const EndMatchModal = () => {
  const isEndMatchModalOpen = useBombStore(
    (state) => state.isEndMatchModalOpen
  );
  const didPlayerWin = useBombStore((state) => state.didPlayerWin);
  const winGolds = useBombStore((state) => state.winGolds);

  const isFloatGoldIconOnScreen = useBombStore(
    (state) => state.isFloatGoldIconOnScreen
  );
  const setIsFloatGoldIconOnScreen = useBombStore(
    (state) => state.setIsFloatGoldIconOnScreen
  );
  const resetMatch = useBombStore((state) => state.resetMatch);
  const setDeck = useBombStore((state) => state.setDeck);

  const earnedGoldRef = useRef<HTMLDivElement>(null);
  const playAgainButtonRef = useRef<HTMLButtonElement>(null);
  const [floatGoldIconTopPosition, setFloatGoldIconTopPosition] = useState(0);

  const CARD_FLIP_ANIMATION_TIME = 300;

  const playAgain = () => {
    const cardAmount = getGameModeValues(window.location.search).mode;

    setDeck(flipAllCardsDown(cardAmount, createCard));

    setTimeout(() => {
      resetMatch();
    }, CARD_FLIP_ANIMATION_TIME);
  };

  useEffect(() => {
    if (didPlayerWin) {
      calculateGoldXAndYLocation(earnedGoldRef, setFloatGoldIconTopPosition);
    }
    if (isEndMatchModalOpen) {
      playAgainButtonRef.current?.focus();
    }
  }, [isEndMatchModalOpen]);

  const incrementGoldOneByOne = (loopAmount: number) => {
    for (let index = 0; index < loopAmount; index++) {
      setTimeout(() => {
        winGolds(1);
      }, index * 100);
    }
  };

  const carryGoldAnimationEnd = () => {
    setIsFloatGoldIconOnScreen(false);
    incrementGoldOneByOne(getGameModeValues(window.location.search)?.win);
  };

  return (
    <>
      <div
        style={{
          top: `${floatGoldIconTopPosition}px`,
          display:
            isEndMatchModalOpen && isFloatGoldIconOnScreen && didPlayerWin
              ? "flex"
              : "none",
        }}
        className="flex justify-center fixed z-40 w-[100%] carry-gold-up"
        onAnimationEnd={carryGoldAnimationEnd}
      >
        <GoldIcon className="text-amber-500 text-4xl carry-gold-right" />
      </div>
      <div
        className={`flex justify-center fixed z-20 top-0 bottom-0 text-white left-0 right-0 bg-[rgba(0,0,0,0.5)] ${
          !isEndMatchModalOpen && "hidden"
        }`}
        data-testid="end-modal"
      >
        <section className="flex flex-col gap-2 max-w-[600px] w-full absolute top-20 z-10 p-4 rounded bg-gray-800">
          <h2 className="text-white text-center text-4xl text-semibold mb-10">
            {didPlayerWin
              ? "Congrats you were a lucky guy this time"
              : "You caught the bomb this time"}
          </h2>

          <div className="flex justify-center mb-4 text-lg">
            {didPlayerWin ? (
              <div ref={earnedGoldRef}>
                You Earned:{" "}
                <span className="text-amber-500 font-semibold">
                  {getGameModeValues(window.location.search)?.win} golds
                </span>
              </div>
            ) : (
              <div ref={earnedGoldRef}>
                You Lost:{" "}
                <span className="text-red-500 font-semibold">
                  {getGameModeValues(window.location.search)?.loss} golds
                </span>
              </div>
            )}
          </div>

          <button
            className="bg-green-600 py-3 rounded font-semibold text-lg"
            onClick={playAgain}
            ref={playAgainButtonRef}
          >
            Play again
          </button>
          <Link
            to="/game-mode"
            className="bg-gray-950 text-center py-3 rounded font-semibold"
          >
            Change Game Mode
          </Link>
        </section>
      </div>
    </>
  );
};

export default EndMatchModal;
