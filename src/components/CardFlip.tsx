import React, { useState } from "react";

const CardFlip = () => {
  const [isRotated, setIsRotated] = useState(false);
  return (
    <button
      className="w-[100px] h-[100px] perspective"
      onClick={() => setIsRotated(!isRotated)}
    >
      <div
        className={`h-full w-full relative transition duration-300 transform-style ${
          isRotated && "rotate-y"
        }`}
      >
        <div className="absolute h-full w-full back-face bg-red-500">front</div>
        <div className="absolute h-full w-full back-face bg-blue-500 rotate-y">
          back
        </div>
      </div>
    </button>
  );
};

export default CardFlip;
