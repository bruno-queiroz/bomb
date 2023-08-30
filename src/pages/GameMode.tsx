import GameModeCard from "../components/GameModeCard";
import { gameModes } from "../modes/gameModes";

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
