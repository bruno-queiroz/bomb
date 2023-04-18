import { TbHandFinger as FingerIcon } from "react-icons/tb";
import { GiGoldBar as GoldIcon } from "react-icons/gi";
import { FaBomb as BombIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

export interface GameMode {
  mode: number;
  bombs: number;
  golds: number;
  moves: number;
  win: number;
  loss: number;
}

const GameModeCard = ({ bombs, golds, loss, moves, win, mode }: GameMode) => {
  return (
    <Link
      to={`/bomb?gm=${mode}`}
      className="flex flex-col justify-center gap-1 items-center text-lg font-semibold bg-sky-600 p-4 max-w-[400px] w-full rounded"
    >
      <div className="flex">
        {bombs} <BombIcon className="text-red-600 text-3xl ml-1 mr-3" /> {golds}{" "}
        <GoldIcon className="text-amber-500 text-3xl ml-1 mr-3" /> {moves}{" "}
        <FingerIcon className="text-2xl ml-1 mr-3" />
      </div>
      <div className="flex items-center mt-4">
        Win = <span className="text-green-600">+{win}</span>{" "}
        <GoldIcon className="text-amber-500 text-2xl ml-1 mr-3" />
      </div>
      <div className="flex items-center">
        Loss = <span className="text-red-600">-{loss}</span>{" "}
        <GoldIcon className="text-amber-500 text-2xl ml-1 mr-3" />
      </div>
    </Link>
  );
};

export default GameModeCard;
