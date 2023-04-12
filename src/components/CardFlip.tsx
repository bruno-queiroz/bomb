import React, { useState } from "react";
import {
  GiRollingBomb as BombLogoIcon,
  GiGoldBar as GoldIcon,
} from "react-icons/gi";

const CardFlip = () => {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <button
      className="w-[120px] h-[120px] perspective rounded-lg"
      onClick={() => setIsRotated(!isRotated)}
    >
      <div
        className={`h-full w-full relative transition duration-300 transform-style rounded-lg ${
          isRotated && "rotate-y"
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
