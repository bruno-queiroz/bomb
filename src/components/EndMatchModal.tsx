import React from "react";

import { IoClose as CloseIcon } from "react-icons/io5";
import { useBombStore } from "../store/store";
import { Link } from "react-router-dom";
import { flipAllCardsDown } from "../utils/flipAllCardsDown";
import { getGameModeValues } from "../utils/getGameModeValues";

const EndMatchModal = () => {
  const isEndMatchModalOpen = useBombStore(
    (state) => state.isEndMatchModalOpen
  );
  const didPlayerWin = useBombStore((state) => state.didPlayerWin);
  const resetMatch = useBombStore((state) => state.resetMatch);
  const setDeck = useBombStore((state) => state.setDeck);

  const CARD_FLIP_ANIMATION_TIME = 300;

  const playAgain = () => {
    setDeck(flipAllCardsDown());
    setTimeout(() => {
      resetMatch();
    }, CARD_FLIP_ANIMATION_TIME);
  };

  return (
    <div
      className={`flex justify-center fixed z-10 top-0 bottom-0 text-white left-0 right-0 bg-[rgba(0,0,0,0.5)] ${
        !isEndMatchModalOpen && "hidden"
      }`}
    >
      <section className="flex flex-col gap-2 max-w-[600px] w-full absolute top-20 z-10 p-4 rounded bg-gray-800">
        <h2 className="text-white text-center text-4xl text-semibold mb-10">
          {didPlayerWin
            ? "Congrats you were a lucky guy this time"
            : "You caught the bomb this time"}
        </h2>

        <div className="flex justify-center mb-4 text-lg">
          {didPlayerWin ? (
            <div>
              You Earned:{" "}
              <span className="text-amber-500 font-semibold">
                {getGameModeValues()?.win} golds
              </span>
            </div>
          ) : (
            <div>
              You Lost:{" "}
              <span className="text-red-500 font-semibold">
                {getGameModeValues()?.loss} golds
              </span>
            </div>
          )}
        </div>

        <button
          className="bg-green-600 py-3 rounded font-semibold text-lg"
          onClick={playAgain}
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
  );
};

export default EndMatchModal;
