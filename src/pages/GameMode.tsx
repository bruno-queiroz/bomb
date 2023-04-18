import React from "react";
import GameModeCard from "../components/GameModeCard";
const gameModes = [
  {
    mode: 12,
    bombs: 3,
    golds: 9,
    moves: 3,
    win: 25,
    loss: 35,
  },
  {
    mode: 20,
    bombs: 5,
    golds: 15,
    moves: 5,
    win: 30,
    loss: 40,
  },
];

const GameMode = () => {
  return (
    <section className="flex flex-col items-center text-white p-4">
      <h1 className="text-center font-bold text-4xl mb-8">Choose your Mode</h1>

      <div className="flex flex-col gap-4 w-full items-center">
        {gameModes.map((mode, index) => (
          <GameModeCard key={index} {...mode} />
        ))}
      </div>
    </section>
  );
};

export default GameMode;
